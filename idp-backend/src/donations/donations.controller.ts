/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response } from 'express';
import { throwError } from '../error/common.error';
import { prisma } from '../app';
import { CreateDonationInput } from './dto/create-donation.dto';

export const createDonation = async (req: Request, res: Response) => {
	try {
		const newDonation: CreateDonationInput = req.body;
		const donation = await prisma.donation.create({
			data: {
				...newDonation,
			},
		});

		res.status(201).json(donation);
	} catch (error) {
		res.status(400).send(throwError(error));
	}
};

export const getAllDonations = async (req: Request, res: Response) => {
	try {
		const donations = await prisma.donation.findMany({});
		res.status(200).json(donations);
	} catch (error) {
		res.status(400).send(throwError(error));
	}
};

export const getDonationById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const donation = await prisma.donation.findUnique({
			where: {
				id: Number(id),
			},
		});
		res.status(200).json(donation);
	} catch (error) {
		res.status(400).send(throwError(error));
	}
};
