/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import { createPerson, deletePerson, getAllPersons, getPersonById, updatePerson } from './persons.controller';

export const personRouter = Router();

personRouter.post('/', createPerson);

personRouter.get('/', getAllPersons);

personRouter.get('/:id', getPersonById);

personRouter.put('/:id', updatePerson);

personRouter.delete('/:id', deletePerson);

