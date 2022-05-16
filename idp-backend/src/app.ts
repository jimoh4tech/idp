import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { PrismaClient } from '@prisma/client';
import { errorHandler } from './error/error.middleware';
import { notFoundHandler } from './error/not-found.middleware';
import { personRouter } from './persons/persons.router';
import { donationRouter } from './donations/donations.router';
import { expenseRouter } from './expenses/expenses.router';

export const app: Application = express();
export const prisma = new PrismaClient();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/persons', personRouter);
app.use('/api/v1/donations', donationRouter);
app.use('/api/v1/expenses', expenseRouter);

app.use(errorHandler);
app.use(notFoundHandler);
