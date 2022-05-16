/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { app, prisma } from '../app';
import supertest from 'supertest';
import { CreatePersonInput } from './dto/create-persons.dto';

const api = supertest(app);

beforeAll(async () => {
	await prisma.person.deleteMany({});
});

afterAll(async () => {
	await prisma.$disconnect();
});

describe('Person APi', () => {
	const initialPerson: CreatePersonInput = {
		fullname: 'Umar Umar',
		gender: 'Male',
		address: 'Jos, Nigeria',
	};

	it('POST /api/v1/persons', async () => {
		const person = await api
			.post('/api/v1/persons')
			.send(initialPerson)
			.expect(201)
			.expect('Content-Type', /application\/json/);

		expect(person.body.fullname).toContain(initialPerson.fullname);
		expect(person.body.gender).toContain(initialPerson.gender);
		expect(person.body.address).toContain(initialPerson.address);
	});

	it('GET /api/v1/persons => get all persons', async () => {
		const persons = await api
			.get('/api/v1/persons')
			.expect(200)
			.expect('Content-Type', /application\/json/);

		expect(persons.body).toHaveLength(1);
	});

	it('PUT /api/v1/persons/:id => can update person', async () => {
		const personsAtStart = await api.get('/api/v1/persons');
		const personToUpdate = personsAtStart.body[0];
		await api
			.put(`/api/v1/persons/${personToUpdate.id}`)
			.send({ isPregnant: true })
			.expect(200)
			.expect('Content-Type', /application\/json/);
	});

	it('DELETE /api/v1/persons/:id => can delete person', async () => {
		const personsAtStart = await api.get('/api/v1/persons');
		const personToUpdate = personsAtStart.body[0];
		await api.delete(`/api/v1/persons/${personToUpdate.id}`).expect(204);
	});
});
