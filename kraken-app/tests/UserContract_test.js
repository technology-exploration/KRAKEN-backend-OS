/*
 * Copyright Lynkeus 2020. All Rights Reserved.
 *
 * Author: Alexandros Tragkas
 */

'use strict';

const { UserContract, DataContract } = require('../index');
const { sleep } = require('../dist/libUtil');

require('dotenv').config();

const assert = require('chai').assert;

const channelID = process.env.CHANNEL_ID;
const chaincodeID = process.env.CHAINCODE_ID;
const BLOCK_DELAY = process.env.BLOCK_DELAY;
const username = process.env.USERNAME;
const clientID = username;

// Init
let userContract = new UserContract(channelID, chaincodeID);
let dataContract = new DataContract(channelID, chaincodeID);

let userObj = {
	username: username,
	isOrg: true,
	org: {
		instType: 'Private Hospital',
		orgName: 'Lynkeus',
		dpoFirstName: 'Bob',
		dpoLastName: 'Bobinson',
		dpoEmail: 'Bob@email.com',
		active: true,
	},
	isBuyer: true,
	purposes: ['Marketing', 'Business'],
};

let product = {
	name: 'prodName1',
	price: 10,
	desc: 'A simple blood test',
	policy: {
		inclPersonalInfo: true,
		hasConsent: true,
		purposes: ['AutomatedDecisionMaking'],
		protectionType: 'SMPC',
		secondUseConsent: true,
		recipientType: '',
		transferToCountry: false,
		storagePeriod: 20,
	},
};

describe('==== Lib UserContract ====', async function () {
	this.timeout(100000);

	// Create
	context('1st CRUD', async function () {
		it('Creates User', async function () {
			await userContract.createUser(clientID, userObj);
			await sleep(BLOCK_DELAY);
		});

		// Read
		it('Reads User', async function () {
			// this.timeout(5000);
			let res = await userContract.readUser(clientID, username);
			assert.equal(
				res.org.instType,
				userObj.org.instType,
				'Not equal created clientID'
			);
			assert.equal(
				res.purposes[0],
				userObj.purposes[0],
				'Not equal purpose'
			);
		});

		// Update
		userObj.purposes = ['AutomatedDecisionMaking'];
		it('Updates User', async function () {
			await userContract.updateUser(clientID, userObj);
			await sleep(BLOCK_DELAY);
			let res = await userContract.readUser(clientID, username);
			assert.equal(
				res.purposes[0],
				userObj.purposes[0],
				'Not equal purpose'
			);
		});

		// Delete
		it('Deletes User And Products', async function () {
			await dataContract.createProduct(clientID, product);
			await sleep(BLOCK_DELAY);
			await userContract.deleteUser(clientID, username);
			await sleep(BLOCK_DELAY);
			let res = await userContract.readUser(clientID, username);
			assert.equal(res, null);
		});
	});

	context('2nd CRUD', async function () {
		it('Creates User', async function () {
			await userContract.createUser(clientID, userObj);
			await sleep(BLOCK_DELAY);
		});

		// Read
		it('Reads User', async function () {
			// this.timeout(5000);
			let res = await userContract.readUser(clientID, username);
			assert.equal(
				res.org.instType,
				userObj.org.instType,
				'Not equal created clientID'
			);
			assert.equal(
				res.purposes[0],
				userObj.purposes[0],
				'Not equal purpose'
			);
		});

		// Update
		userObj.purposes = ['AutomatedDecisionMaking'];
		it('Updates User', async function () {
			await userContract.updateUser(clientID, userObj);
			await sleep(BLOCK_DELAY);
			let res = await userContract.readUser(clientID, username);
			assert.equal(
				res.purposes[0],
				userObj.purposes[0],
				'Not equal purpose'
			);
		});

		// Delete
		it('Deletes User And Products', async function () {
			await dataContract.createProduct(clientID, product);
			await sleep(BLOCK_DELAY);
			await userContract.deleteUser(clientID, username);
			await sleep(BLOCK_DELAY);
			let res = await userContract.readUser(clientID, username);
			assert.equal(res, null);
		});
	});
});
