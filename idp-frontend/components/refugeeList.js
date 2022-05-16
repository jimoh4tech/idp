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

export default function RefugeeList({ data }) {
	return (
		<TableContainer>
			<Table variant='striped'>
				<TableCaption>Details of Refugees in our Camp</TableCaption>
				<Thead>
					<Tr>
						<Th>Name</Th>
						<Th>Gender</Th>
						<Th>Address</Th>
						<Th>Health Status</Th>
						<Th>Living Status</Th>
						<Th>Date Addmitted</Th>
					</Tr>
				</Thead>
				<Tbody>
					{data.map((per) => (
						<Tr key={per.id}>
							<Td>{per.fullname}</Td>
							<Td>{per.gender}</Td>
							<Td>{per.address}</Td>
							<Td>{per.healthStatus}</Td>
							<Td>{per.isAlive ? 'Living' : 'Dead'}</Td>
							<Td>{new Date(per.createdAt).toDateString()}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
}
