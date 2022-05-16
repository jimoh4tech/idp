import { Flex, Heading } from '@chakra-ui/react';
import { CountUp } from 'use-count-up';

export default function CountUpComponent() {
	return (
		<Flex
			direction={'column'}
			align='center'
			maxW={''}
			borderRadius={'10'}
			p={'10'}
			background={'cadetblue'}
		>
			<Heading as={'h3'} size='md' color={'gray.200'}>
				A total of
			</Heading>
			<Heading as={'h2'} size='4xl' color={'white'}>
				<CountUp isCounting end={4132210} duration={20} />
			</Heading>
			<Heading as={'h3'} size='lg' color={'gray.700'}>
				people have benefitted from our camp management work
			</Heading>
		</Flex>
	);
}
