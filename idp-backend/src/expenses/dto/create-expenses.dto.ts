import {IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateExpenseInput {
	@IsString()
	@IsNotEmpty()
	title: string;

	@IsNumber()
	@IsNotEmpty()
	amount: number;

	@IsString()
	@IsOptional()
	description?: string;
}
