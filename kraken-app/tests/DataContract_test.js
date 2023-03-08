/*
 * Copyright Lynkeus 2020. All Rights Reserved.
 *
 * Author: Alexandros Tragkas
 */

'use strict';

const { UserContract, DataContract, Util } = require('../index');
const _ = require('lodash');
const sleep = Util.sleep;
const assert = require('chai').assert;
const expect = require('chai').expect;
require('dotenv').config();

const channelID = process.env.CHANNEL_ID;
const chaincodeID = process.env.CHAINCODE_ID;
const BLOCK_DELAY = process.env.BLOCK_DELAY;
const username = process.env.USERNAME;
const clientID = username;
const otherClientID = 'user1';

// Init
let userContract = new UserContract(channelID, chaincodeID);
let dataContract = new DataContract(channelID, chaincodeID);

let userObj = {
	username: username,
	isOrg:true,
	org: {
		instType:'Private Hospital',
		orgName:'Lynkeus',
		dpoFirstName:'Bob',
		dpoLastName:'Bobinson',
		dpoEmail:'Bob@email.com',
		active:true,
	},
	isBuyer:true,
	purposes: ['Marketing', 'Business']
};

let product = {
	name:'testProduct1',
	price:10,
	desc:'An analytics product',
	curations: [],
	productType: 'analytics',
	policy:{
		inclPersonalInfo:true,
		hasConsent:true,
		purposes:[
			'Marketing',
			'Business'
		],
		protectionType:'SMPC',
		secondUseConsent:true,
		recipientType:'',
		transferToCountry:false,
		storagePeriod:20
	},
	escrow: '',
	productIDs: []
};


let product_tmp = _.cloneDeep(product);
describe('==== Lib DataContract ====', async function() {
	this.timeout(20000);
	let productID;
	context('Is owner - CRUD', function() {
		it('Creates Product', async function() {
			let res = await userContract.readUser(clientID, username);
			if (!res) {
				await userContract.createUser(clientID, userObj);
				await sleep(BLOCK_DELAY);
			}
			res = await dataContract.createProduct(clientID, product);
			expect(res).to.be.a('string');
			productID = res;
			await sleep(BLOCK_DELAY);
		});

		it('Reads Product', async function() {
			let res = await dataContract.readProduct(clientID, productID);

			expect(res).to.be.a('object');
			expect(res).to.have.property('price', 10);
			assert.equal(res.policy.purposes[0], product.policy.purposes[0], 'Non matching policies');
		});

		it('Updates Product', async function() {
			product.id = productID;
			product.price = 20;
			product.policy.purposes = ['Marketing', 'Business'];
			let res = await dataContract.updateProduct(clientID, product);
			expect(res).to.equal('');
			await sleep(BLOCK_DELAY);

			res = await dataContract.readProduct(clientID, productID);
			expect(res).to.have.property('price', 20);
			assert.equal(res.policy.purposes[0], product.policy.purposes[0], 'Non matching policies');
		});

		it('Deletes Product', async function() {
			let res = await dataContract.deleteProduct(clientID, productID);
			expect(res).to.equal(null);
			await sleep(BLOCK_DELAY);

			res = await dataContract.readProduct(clientID, productID);
			expect(res).to.equal(null);
		});
	});

	context('Is not Owner - Permission checks CRUD', function() {
		it('Cannot Update Product', async function() {
			let res = await dataContract.createProduct(clientID, product);
			expect(res).to.be.a('string');
			productID = res;
			await sleep(BLOCK_DELAY);

			product.id = productID;
			product.price = 30;
			res = await dataContract.updateProduct(otherClientID, product);
			expect(res).to.be.a('error');
			await sleep(BLOCK_DELAY);

			res = await dataContract.readProduct(clientID, productID);
			expect(res).to.have.property('price', 20);
		});

		it('Cannot Delete Product', async function() {
			let res = await dataContract.deleteProduct(otherClientID, productID);
			expect(res).to.be.a('error');
			await sleep(BLOCK_DELAY);

			res = await dataContract.readProduct(clientID, productID);
			expect(res).to.be.a('object');
			assert.equal(res.policy.purposes[0], product.policy.purposes[0], 'Non matching policies');
		});

	});

	context('Curation', function() {
		it('Create Curated Product', async function() {

			// Create product
			let res = await dataContract.createProduct(clientID, product);
			expect(res).to.be.a('string');
			productID = res;
			await sleep(BLOCK_DELAY);

			// Create 1st curation
			let product_curated = _.cloneDeep(product);
			product_curated.curations.push(productID);
			res = await dataContract.createProduct(clientID, product_curated);
			expect(res).to.be.a('string');
			let productID_curated = res;
			await sleep(BLOCK_DELAY);

			// Curations[0] should be productID of Base Product
			res = await dataContract.readProduct(clientID, productID_curated);
			expect(res).to.be.a('object');
			assert.equal(res.curations[0], productID, 'Non matching ProductID on Product.curation');
			assert.equal(res.curations[1], null, 'Non Empty Product.curation[1]');

			// Create 2nd curation
			let product_curated_2 = _.cloneDeep(product);
			product_curated_2.curations.push(productID, productID_curated);
			res = await dataContract.createProduct(clientID, product_curated_2);
			expect(res).to.be.a('string');
			let productID_curated_2 = res;
			await sleep(BLOCK_DELAY);

			// Curations[0] should be productID of 1st Product
			// Curations[1] should be productID of base Product
			res = await dataContract.readProduct(clientID, productID_curated_2);
			expect(res).to.be.a('object');
			assert.equal(res.curations[0], productID, 'Non matching 1st ProductID on Product.curation');
			assert.equal(res.curations[1], productID_curated, 'Non matching 2nd ProductID on Product.curation');
			assert.equal(res.curations[2], null, 'Non Empty Product.curation[2]');
		});

		it('Should error if base product does not exist', async function() {
			product_tmp.curations = ['9ef6b6b6ce1f83a2465b424478916273afafe1fee1138baa8fc38b0526fb98c2'];

			let res = await dataContract.createProduct(clientID, product_tmp);
			expect(res).to.be.a('error');

			product_tmp = _.cloneDeep(product);
			await sleep(BLOCK_DELAY);
		});

	});

	context('Validations', function() {
		it('Should error on inclPersonalInfo=true and hasConsent=false', async function() {
			product_tmp.policy.inclPersonalInfo = true;
			product_tmp.policy.hasConsent = false;

			let res = await dataContract.createProduct(clientID, product_tmp);
			expect(res).to.be.a('error');

			product_tmp = _.cloneDeep(product);
			await sleep(BLOCK_DELAY);
		});

		it('Should error on empty policy.Purposes or unknown policy.Purpose', async function() {
			product_tmp.policy.purposes = [];

			let res = await dataContract.createProduct(clientID, product_tmp);
			expect(res).to.be.a('error');
			await sleep(BLOCK_DELAY);

			product_tmp.policy.purposes = ['Unknown'];
			res = await dataContract.createProduct(clientID, product_tmp);
			expect(res).to.be.a('error');

			product_tmp = _.cloneDeep(product);
			await sleep(BLOCK_DELAY);
		});
	});

	context('Buy Product', function() {
		it('Eligible on Matching Purposes', async function() {
			// Create product
			let res = await dataContract.createProduct(clientID, product);
			expect(res).to.be.a('string');
			productID = res;
			await sleep(BLOCK_DELAY);

			const buyerParams = {
				purposes: ['Marketing']
			};

			res = await dataContract.buyProduct(otherClientID, productID, buyerParams);
			expect(res).to.be.a('string');
		});

		it('Should error on Non Matching Purposes', async function() {
			const buyerParams = {
				purposes: ['AutomatedDecisionMaking']
			};

			let res = await dataContract.buyProduct(otherClientID, productID, buyerParams);
			expect(res).to.be.a('error');
		});

		it('Should error on partially matching Purposes', async function() {
			const buyerParams = {
				purposes: ['Marketing', 'AutomatedDecisionMaking']
			};

			let res = await dataContract.buyProduct(otherClientID, productID, buyerParams);
			expect(res).to.be.a('error');
		});

		it('Should error on owner buying own product', async function() {
			const buyerParams = {
				purposes: ['Marketing']
			};

			let res = await dataContract.buyProduct(clientID, productID, buyerParams);
			expect(res).to.be.a('error');

		});

	});
});