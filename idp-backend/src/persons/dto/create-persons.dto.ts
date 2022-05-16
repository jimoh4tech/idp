import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePersonInput {
	@IsString()
	@IsNotEmpty()
	fullname: string;

	@IsString()
	@IsNotEmpty()
	gender: string;

	@IsString()
	@IsNotEmpty()
	address: string;

	@IsString()
	@IsOptional()
	healthStatus?: HealthStatus;

	@IsBoolean()
	@IsOptional()
	isAlive?: boolean;

	@IsBoolean()
	@IsOptional()
	isPregnant?: boolean;
}

export enum HealthStatus {
  GOOD = 'Good',
  AVERAGE = 'Average',
  SEVERE = 'Severe'
}