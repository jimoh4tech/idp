/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { app, prisma } from '../app';
import supertest from 'supertest';
import { CreateDonationInput } from './dto/create-donation.dto';

const api = supertest(app);

beforeAll(async () => {
	await prisma.donation.deleteMany({});
});

afterAll(async () => {
	await prisma.$disconnect();
});

describe('Donation APi', () => {
	const initialDonation: CreateDonationInput= {
    displayName: 'Umar Musa',
    amount: 1000,
	};

	it('POST /api/v1/donations', async () => {
		const donation = await api
			.post('/api/v1/donations')
			.send(initialDonation)
			.expect(201)
			.expect('Content-Type', /application\/json/);

		expect(donation.body.displayName).toContain(initialDonation.displayName);
		expect(donation.body.amount).toBe(initialDonation.amount);
	});

	it('GET /api/v1/donations => get all donations', async () => {
		const donations = await api
			.get('/api/v1/donations')
			.expect(200)
			.expect('Content-Type', /application\/json/);

		expect(donations.body).toHaveLength(1);
	});
});
