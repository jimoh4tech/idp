import { Container, Divider, Heading, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import CountUpComponent from './countUp';

export default function Content() {
	return (
		<Stack>
			<Container maxW={''}>
				This data base core functions includes coordinating and monitoring
				assistance and protection, setting up and supporting governance and
				community participation mechanisms, managing and disseminating
				information, providing multi sector feedback mechanisms. We facilitate
				two-way communication by strengthening the participation of community
				representatives in decision-making processes, including vulnerable
				individuals and groups, and developing complaints and feedback
				mechanisms. We facilitate camp set-ups and upgrades and, where
				applicable, the maintenance of communal infrastructure. Our approach
				differs according to the needs of our beneficiaries, the type of
				settlement, the phase of the camp life cycle, the humanitarian response
				capacity, the humanitarian architecture and the actors on the ground.
			</Container>
			<Divider orientation='vertical' height='20px' />
			<CountUpComponent />
			<Divider orientation='vertical' height='40px' />
			<Image
				src={'/images/highlights.PNG'}
				alt='Highlight of IDPs'
				width={856}
				height={560}
			/>
			<Divider orientation='vertical' height='30px' />
			<Heading as={'h2'} size='lg'>
				Our expertise in camp management
			</Heading>
			<Divider orientation='vertical' height='5px' />

			<Container maxW={''}>
				Camp management core functions include coordinating and monitoring
				assistance and protection, setting up and supporting governance and
				community participation mechanisms, managing and disseminating
				information, providing multisector feedback mechanisms, and maintaining
				infrastructure. We facilitate two-way communication by strengthening the
				participation of community representatives in decision-making processes,
				including vulnerable individuals and groups, and developing complaints
				and feedback mechanisms. We facilitate camp set-ups and upgrades and,
				where applicable, the maintenance of communal infrastructure. Our
				approach differs according to the needs of our beneficiaries, the type
				of settlement, the phase of the camp life cycle, the humanitarian
				response capacity, the humanitarian architecture and the actors on the
				ground.
			</Container>
		</Stack>
	);
}
