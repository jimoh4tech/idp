import {
	FormLabel,
	Input,
	Button,
	Select,
  Container,
} from '@chakra-ui/react';
export default function RefugeeForm() {


	const handleSubmit = async (event) => {
		event.preventDefault();

		const data = {
			fullname: event.target.name.value,
			gender: event.target.gender.value,
			address: event.target.address.value,
    };
    
    
		const JSONdata = JSON.stringify(data);
    
		const endpoint = 'http://localhost:3333/api/v1/persons';
    
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSONdata,
		};
    
		const response = await fetch(endpoint, options);
		event.target.name.value = '';
		event.target.gender.value = '';
		event.target.address.value = '';
		const result = await response.json();
		alert(`${result.fullname} was successfully added!`);
	};

	return (
		<Container borderRadius={'10'} p={'16'} background={'gray.300'}>
			<form onSubmit={handleSubmit}>
				<FormLabel htmlFor='first'>Fullame</FormLabel>
				<Input type='text' id='name' name='name' required />

				<FormLabel htmlFor='last'>Address</FormLabel>
				<Input type='text' id='address' name='address' required />

				<FormLabel htmlFor='last'>Gender</FormLabel>
				<Select id='gender' name='gender'placeholder='Male'>
					<option value={'Male'}>Male</option>
					<option value={'Female'}>Female</option>
				</Select>

				<Button mt={4} colorScheme='teal' type='submit'>
					Submit
				</Button>
			</form>
		</Container>
	);
}
