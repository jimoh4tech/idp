import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { HealthStatus } from './create-persons.dto';

export class UpdatePersonInput {
	@IsString()
	@IsOptional()
	fullname?: string;

	@IsString()
	@IsOptional()
	gender?: string;

	@IsString()
	@IsOptional()
	address?: string;

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

