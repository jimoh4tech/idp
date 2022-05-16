/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import { createExpense, deleteExpense, getAllExpenses, getExpenseById, updateExpense } from './expenses.controller';


export const expenseRouter = Router();

expenseRouter.post('/', createExpense);

expenseRouter.get('/', getAllExpenses);

expenseRouter.get('/:id', getExpenseById);

expenseRouter.put('/:id', updateExpense);

expenseRouter.delete('/:id', deleteExpense);


