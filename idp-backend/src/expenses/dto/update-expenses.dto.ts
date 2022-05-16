import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateExpenseInput {
	@IsString()
	@IsOptional()
	title?: string;

	@IsNumber()
	@IsOptional()
	amount?: number;

	@IsString()
	@IsOptional()
	description?: string;
}
