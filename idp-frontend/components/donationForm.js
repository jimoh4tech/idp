import {
	FormLabel,
	Input,
	Button,
	Container,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from '@chakra-ui/react';
export default function DonationForm() {
	const handleSubmit = async (event) => {
		event.preventDefault();

		const data = {
			displayName: event.target.name.value,
			amount: Number(event.target.amount.value),
		};

    console.log(data);
		const JSONdata = JSON.stringify(data);

		const endpoint = 'http://localhost:3333/api/v1/donations';

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSONdata,
		};

		const response = await fetch(endpoint, options);
		event.target.name.value = '';
		event.target.amount.value = '';

		const result = await response.json();
		alert(`Hi ${result.displayName}, your donation was successfully added!`);
	};

	return (
		<Container borderRadius={'10'} p={'16'} background={'gray.300'}>
			<form onSubmit={handleSubmit}>
				<FormLabel htmlFor='first'>Display Name</FormLabel>
				<Input type='text' id='name' name='name' required />

				<FormLabel htmlFor='amount'>Amount</FormLabel>
				<NumberInput min={1}>
					<NumberInputField id='amount' name='amount' />
					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>

				<Button mt={4} colorScheme='teal' type='submit'>
					Submit
				</Button>
			</form>
		</Container>
	);
}
