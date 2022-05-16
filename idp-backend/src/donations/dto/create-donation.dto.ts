import {
	IsEmail,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
} from 'class-validator';

export class CreateDonationInput {
	@IsString()
	@IsNotEmpty()
	displayName: string;

	@IsNumber()
	@IsNotEmpty()
	amount: number;

	@IsEmail()
	@IsOptional()
	email?: string;

	@IsString()
	@IsOptional()
	mobile?: string;
}
