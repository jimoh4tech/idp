/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response } from 'express';
import { throwError } from '../error/common.error';
import { prisma } from '../app';
import { CreateExpenseInput } from './dto/create-expenses.dto';
import { UpdateExpenseInput } from './dto/update-expenses.dto';

export const createExpense = async (req: Request, res: Response) => {
	try {
		const newExpense: CreateExpenseInput= req.body;
		const expense = await prisma.expense.create({
			data: {
				...newExpense,
			},
		});

		res.status(201).json(expense);
	} catch (error) {
		res.status(400).send(throwError(error));
	}
};

export const getAllExpenses = async (_req: Request, res: Response) => {
	try {
		const expenses = await prisma.expense.findMany({});
		res.status(200).json(expenses);
	} catch (error) {
		res.status(400).send(throwError(error));
	}
};

export const getExpenseById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const expense = await prisma.expense.findUnique({
			where: {
				id: Number(id),
			},
		});
		res.status(200).json(expense);
	} catch (error) {
		res.status(400).send(throwError(error));
	}
};

export const updateExpense = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const expenseData: UpdateExpenseInput = req.body;
		const expenseToUpdate = await prisma.expense.findUnique({
			where: {
				id: Number(id),
			},
		});

		if (!expenseToUpdate)
			res.status(404).send(`Expense with  id: ${id} not found!`);

		const updatedExpense = await prisma.expense.update({
			where: {
				id: Number(id),
			},
			data: {
				...expenseData,
			},
		});

		res.status(200).json(updatedExpense);
	} catch (error) {
		res.status(400).send(throwError(error));
	}
};

export const deleteExpense = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const expenseToUpdate = await prisma.expense.findUnique({
			where: {
				id: Number(id),
			},
		});

		if (!expenseToUpdate)
			res.status(404).send(`Expense with  id: ${id} not found!`);

		await prisma.expense.delete({
			where: {
				id: Number(id),
			},
		});

		res.status(204).end();
	} catch (error) {
		res.status(400).send(throwError(error));
	}
};
