/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { app, prisma } from '../app';
import supertest from 'supertest';
import { CreateExpenseInput } from './dto/create-expenses.dto';


const api = supertest(app);

beforeAll(async () => {
	await prisma.expense.deleteMany({});
});

afterAll(async () => {
	await prisma.$disconnect();
});

describe('Expense APi', () => {
	const initialExpense: CreateExpenseInput = {
		title: 'Puchase of clothings',
		amount: 1000,
	};

	it('POST /api/v1/expenses', async () => {
		const expense = await api
			.post('/api/v1/expenses')
			.send(initialExpense)
			.expect(201)
			.expect('Content-Type', /application\/json/);

		expect(expense.body.title).toContain(initialExpense.title);
		expect(expense.body.amount).toBe(initialExpense.amount);
	});

	it('GET /api/v1/expenses => get all expenses', async () => {
		const expenses = await api
			.get('/api/v1/expenses')
			.expect(200)
			.expect('Content-Type', /application\/json/);

		expect(expenses.body).toHaveLength(1);
	});

	it('PUT /api/v1/expenses/:id => can update expense', async () => {
		const expensesAtStart = await api.get('/api/v1/expenses');
		const expenseToUpdate = expensesAtStart.body[0];
		await api
			.put(`/api/v1/expenses/${expenseToUpdate.id}`)
			.send({ description: 'Target for the critcals' })
			.expect(200)
			.expect('Content-Type', /application\/json/);
	});

	it('DELETE /api/v1/expenses/:id => can delete expense', async () => {
		const expensesAtStart = await api.get('/api/v1/expenses');
		const expenseToUpdate = expensesAtStart.body[0];
		await api.delete(`/api/v1/expenses/${expenseToUpdate.id}`).expect(204);
	});
});
