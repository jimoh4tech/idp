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

export default function ExpensesForm() {
	const handleSubmit = async (event) => {
		event.preventDefault();

		const data = {
			title: event.target.name.value,
			description: event.target.description.value,
			amount: Number(event.target.amount.value),
		};

		console.log(data);
		const JSONdata = JSON.stringify(data);

		const endpoint = 'http://localhost:3333/api/v1/expenses';

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSONdata,
		};

		const response = await fetch(endpoint, options);

		const result = await response.json();

		event.target.name.value = '';
		event.target.name.description = '';
		event.target.amount.value = '';
		alert(`${result.title} was successfully added!`);
	};

	return (
		<Container borderRadius={'10'} p={'16'} background={'gray.300'}>
			<form onSubmit={handleSubmit}>
				<FormLabel htmlFor='first'>Title</FormLabel>
				<Input type='text' id='name' name='name' required />

				<FormLabel htmlFor='first'>Description</FormLabel>
				<Input type='text' id='description' name='description' required />

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
