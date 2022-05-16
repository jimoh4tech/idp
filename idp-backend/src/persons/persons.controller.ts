/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response } from 'express';
import { throwError } from '../error/common.error';
import { prisma } from '../app';
import { CreatePersonInput } from './dto/create-persons.dto';
import { UpdatePersonInput } from './dto/update-persons.dto';

export const createPerson = async (req: Request, res: Response) => {
	try {
		const newPerson: CreatePersonInput = req.body;
		const person = await prisma.person.create({
			data: {
				...newPerson,
			},
		});

		res.status(201).json(person);
	} catch (error) {
		res.status(400).send(throwError(error));
	}
};

export const getAllPersons = async (req: Request, res: Response) => {
	try {
		const persons = await prisma.person.findMany({});
		res.status(200).json(persons);
	} catch (error) {
		res.status(400).send(throwError(error));
	}
};

export const getPersonById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const person = await prisma.person.findUnique({
			where: {
				id: Number(id),
			},
		});
		res.status(200).json(person);
	} catch (error) {
		res.status(400).send(throwError(error));
	}
};

export const updatePerson = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const personData: UpdatePersonInput = req.body;
		const personToUpdate = await prisma.person.findUnique({
			where: {
				id: Number(id),
			},
		});

		if (!personToUpdate)
			res.status(404).send(`Person with  id: ${id} not found!`);

		const updatedPerson = await prisma.person.update({
			where: {
				id: Number(id),
			},
			data: {
				...personData,
			},
		});

		res.status(200).json(updatedPerson);
	} catch (error) {
		res.status(400).send(throwError(error));
	}
};

export const deletePerson = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const personToUpdate = await prisma.person.findUnique({
			where: {
				id: Number(id),
			},
		});

		if (!personToUpdate)
			res.status(404).send(`Person with  id: ${id} not found!`);

		await prisma.person.delete({
			where: {
				id: Number(id),
			},
		});

		res.status(204).end();
	} catch (error) {
		res.status(400).send(throwError(error));
	}
};
