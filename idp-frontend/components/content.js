import { Container, Divider, Heading, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import CountUpComponent from './countUp';

export default function Content() {
	return (
		<Stack>
			<Container maxW={''}>
				We work in camps, in dispersed displacement settings, and within host
				communities in non-camp settings. We do not promote camps. Camps are not
				long-term or sustainable solutions – they are a last resort. For this
				reason, our camp management portfolio includes different approaches,
				such as assisting displaced people living with host communities. To
				carry out camp management activities, NRC must be mandated by the
				government or agency responsible for these settlements.
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
