/*
 * Copyright Lynkeus 2020. All Rights Reserved.
 *
 * Author: Alexandros Tragkas
 */

'use strict';

const { DataContract, AgreementContract, Util } = require('../index');
const sleep = Util.sleep;

require('dotenv').config();

const assert = require('chai').assert;
const expect = require('chai').expect;

const channelID = process.env.CHANNEL_ID;
const chaincodeID = process.env.CHAINCODE_ID;
const BLOCK_DELAY = process.env.BLOCK_DELAY;
const username = process.env.USERNAME;
const adminID = process.env.CLIENT;
const clientID = username;
const nonClientID = process.env.PEER_ID;

// Init
// let userContract = new UserContract(channelID, chaincodeID);
let dataContract = new DataContract(channelID, chaincodeID);
let agreementContract = new AgreementContract(channelID, chaincodeID);

const buyerID = 'user1';

let product = {
	name: 'testProduct1',
	price: 10,
	desc: 'An analytics product',
	curations: [],
	productType: 'analytics',
	policy: {
		inclPersonalInfo: true,
		hasConsent: true,
		purposes: ['Marketing', 'Business'],
		protectionType: 'SMPC',
		secondUseConsent: true,
		recipientType: '',
		transferToCountry: false,
		storagePeriod: 20,
	},
	escrow: '',
	productIDs: [],
};

describe('==== Lib AgreementContract ====', async function () {
	this.timeout(20000);
	let productID;
	let transactionID;

	context('Agreement Lifecycle', async function () {

		it('Seller creates product', async function () {
			let res = await dataContract.createProduct(clientID, product);
			expect(res).to.be.a('string');
			productID = res;
			await sleep(BLOCK_DELAY);
		});

		it('Should Buy Product (Eligible buyer)', async function () {
			const buyerParams = {
				purposes: ['Marketing'],
			};

			let res = await dataContract.buyProduct(
				buyerID,
				productID,
				buyerParams
			);

			transactionID = res;
			await sleep(BLOCK_DELAY);
		});

		it('Should Create Agreement with status: Eligible', async function () {
			let res = await agreementContract.getAgreement(adminID, transactionID);
			expect(res).to.have.property('status', 'Eligible');
		});

		it('Should Update Agreement to: Paid (Admin)', async function () {
			let res = await agreementContract.updateAgreement(
				adminID,
				transactionID,
				'Paid'
			);
			assert.equal(res, '', 'error on update agreement');
			await sleep(BLOCK_DELAY);
			res = await agreementContract.getAgreement(adminID, transactionID);
			expect(res).to.have.property('status', 'Paid');
		});

		it('Should Update Agreement to: Access (Admin)', async function () {
			let res = await agreementContract.updateAgreement(
				adminID,
				transactionID,
				'Access'
			);
			assert.equal(res, '', 'error on update agreement');
			await sleep(BLOCK_DELAY);
			res = await agreementContract.getAgreement(adminID, transactionID);
			expect(res).to.have.property('status', 'Access');
		});
	});

	context('Validations', async function () {

		it('Should reject non Eligible/Paid/Access status', async function() {
			let res = await agreementContract.updateAgreement(
				adminID,
				transactionID,
				'Illegal'
			);
			expect(res).to.be.a('error');
			await sleep(BLOCK_DELAY);
			res = await agreementContract.getAgreement(adminID, transactionID);
			expect(res).to.have.property('status', 'Access');

		});
	});

	context('Permission checks', async function () {
		it('Should reject Non $MainMSP (LynkeusMSP / TexMSP)', async function() {
			let res = await agreementContract.updateAgreement(
				clientID,
				transactionID,
				'Paid'
			);
			expect(res).to.be.a('error');
			await sleep(BLOCK_DELAY);
			res = await agreementContract.getAgreement(adminID, transactionID);
			expect(res).to.have.property('status', 'Access');

		});

		it('Should reject non Client role', async function() {
			let res = await agreementContract.updateAgreement(
				nonClientID,
				transactionID,
				'Paid'
			);
			expect(res).to.be.a('error');
			await sleep(BLOCK_DELAY);
			res = await agreementContract.getAgreement(adminID, transactionID);
			expect(res).to.have.property('status', 'Access');

		});
	});

});
