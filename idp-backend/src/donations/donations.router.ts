/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";
import { createDonation, getAllDonations, getDonationById } from "./donations.controller";

export const donationRouter = Router();

donationRouter.post('/', createDonation);

donationRouter.get('/', getAllDonations);

donationRouter.get('/:id', getDonationById);