import {
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';

export default function ExpensesList({ data }) {
	return (
		<TableContainer>
			<Table variant='striped'>
				<TableCaption>Details of Expenses</TableCaption>
				<Thead>
					<Tr>
						<Th>Title</Th>
						<Th>Amount</Th>
						<Th>Description</Th>
						<Th>Date</Th>
					</Tr>
				</Thead>
				<Tbody>
					{data.map((ex) => (
						<Tr key={ex.id}>
							<Td>{ex.title}</Td>
							<Td>{ex.amount}</Td>
							<Td>{ex.description}</Td>
							<Td>{new Date(ex.createdAt).toDateString()}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
}
