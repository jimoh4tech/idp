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

export default function DonationList({ data }) {
	return (
		<TableContainer>
			<Table variant='striped'>
				<TableCaption>Details of Donations</TableCaption>
				<Thead>
					<Tr>
						<Th>Display Name</Th>
						<Th>Amount</Th>
						<Th>Date</Th>
					</Tr>
				</Thead>
				<Tbody>
					{data.map((d) => (
						<Tr key={d.id}>
							<Td>{d.displayName}</Td>
							<Td>{d.amount}</Td>
							<Td>{new Date(d.createdAt).toDateString()}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
}
