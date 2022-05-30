import Image from 'next/image';
import {
	Box,
	Center,
	Heading,
	Text,
	Stack,
  Flex,
  Grid,
  useMediaQuery
} from '@chakra-ui/react';

export default function NewsPost() {
  const [isLesserThan850] = useMediaQuery('(max-width: 850px)');
  
  let temp = isLesserThan850 ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)';
  return (
		<Grid templateColumns={temp} gap={6}>
			<Center py={6}>
				<Box
					maxW={'445px'}
					w={'full'}
					bg={'gray.900'}
					boxShadow={'2xl'}
					rounded={'md'}
					p={6}
					overflow={'hidden'}
				>
					<Box
						h={'210px'}
						bg={'gray.100'}
						mt={-6}
						mx={-6}
						mb={6}
						pos={'relative'}
					>
						<Image src='/images/new1.jpg' layout={'fill'} alt='News 1' />
					</Box>
					<Stack>
						<Text
							color={'green.500'}
							textTransform={'uppercase'}
							fontWeight={800}
							fontSize={'sm'}
							letterSpacing={1.1}
						>
							Global
						</Text>
						<Heading color={'gray.700'} fontSize={'2xl'} fontFamily={'body'}>
							Children and youth in internal displacement
						</Heading>
						<Text color={'gray.500'}>
							19 May 2022, Geneva - The number of people living in internal
							displacement around the world reached a record 59.1 million at the
							end of 2021, up from 55 million a year earlier. The unprecedented
							figure is the result of new waves of violence and protracted
							conflict in countries ranging from Ethiopia and Afghanistan to
							Syria and the Democratic Republic of the Congo (DRC), Nigeria.
							according to the Internal Displacement Monitoring Centre (IDMC)'s
							annual global report.
						</Text>
					</Stack>
					<Stack direction={'column'} spacing={0} fontSize={'sm'}>
						<Text fontWeight={600}>Achim Rolle</Text>
						<Text color={'gray.500'}>Mar 16, 2020 · 10min read</Text>
					</Stack>
				</Box>
			</Center>

			<Center py={6}>
				<Box
					maxW={'445px'}
					w={'full'}
					bg={'gray.900'}
					boxShadow={'2xl'}
					rounded={'md'}
					p={6}
					overflow={'hidden'}
				>
					<Box
						h={'210px'}
						bg={'gray.100'}
						mt={-6}
						mx={-6}
						mb={6}
						pos={'relative'}
					>
						<Image src='/images/new2.jpg' layout={'fill'} alt='News 1' />
					</Box>
					<Stack>
						<Text
							color={'green.500'}
							textTransform={'uppercase'}
							fontWeight={800}
							fontSize={'sm'}
							letterSpacing={1.1}
						>
							IDP AND INSECURITY
						</Text>
						<Heading color={'gray.700'} fontSize={'2xl'} fontFamily={'body'}>
							IDP camps in Maiduguri could endanger lives
						</Heading>
						<Text color={'gray.500'}>
							Amnesty International is deeply concerned about the safety of
							thousands of Internally Displaced Persons (IDPs) in Borno state,
							who are at risk of forced resettlement as the Borno state governor
							moves to close all IDP camps within Maiduguri despite continued
							attacks by Boko Haram and ISWAP and human rights violations by the
							military. “The conflict that made us flee our homes out of fear,
							is what the government is forcing us to go back and face.
						</Text>
					</Stack>
					<Stack direction={'column'} spacing={0} fontSize={'sm'}>
						<Text fontWeight={600}>John Pie</Text>
						<Text color={'gray.500'}>Feb 08, 2019 · 6min read</Text>
					</Stack>
				</Box>
			</Center>

			<Center py={6}>
				<Box
					maxW={'445px'}
					w={'full'}
					bg={'gray.900'}
					boxShadow={'2xl'}
					rounded={'md'}
					p={6}
					overflow={'hidden'}
				>
					<Box
						h={'210px'}
						bg={'gray.100'}
						mt={-6}
						mx={-6}
						mb={6}
						pos={'relative'}
					>
						<Image src='/images/new3.jpg' layout={'fill'} alt='News 1' />
					</Box>
					<Stack>
						<Text
							color={'green.500'}
							textTransform={'uppercase'}
							fontWeight={800}
							fontSize={'sm'}
							letterSpacing={1.1}
						>
							Maiduguri
						</Text>
						<Heading color={'gray.700'} fontSize={'2xl'} fontFamily={'body'}>
							Hundreds of thousands of Idps
						</Heading>
						<Text color={'gray.500'}>
							The most critical season for rains and floods has started, leaving
							Maiduguri refugees and local communities residing in and around
							camps in Zamfara at risk of landslides and waterborne diseases
							such as cholera. June, July and August are the most critical
							months for rains.
						</Text>
					</Stack>
					<Stack direction={'column'} spacing={0} fontSize={'sm'}>
						<Text fontWeight={600}>Adams Smith</Text>
						<Text color={'gray.500'}>June 08, 2018 · 9min read</Text>
					</Stack>
				</Box>
			</Center>

			<Center py={6}>
				<Box
					maxW={'445px'}
					w={'full'}
					bg={'gray.900'}
					boxShadow={'2xl'}
					rounded={'md'}
					p={6}
					overflow={'hidden'}
				>
					<Box
						h={'210px'}
						bg={'gray.100'}
						mt={-6}
						mx={-6}
						mb={6}
						pos={'relative'}
					>
						<Image src='/images/new4.jpg' layout={'fill'} alt='News 1' />
					</Box>
					<Stack>
						<Text
							color={'green.500'}
							textTransform={'uppercase'}
							fontWeight={800}
							fontSize={'sm'}
							letterSpacing={1.1}
						>
							Nigeria
						</Text>
						<Heading color={'gray.700'} fontSize={'2xl'} fontFamily={'body'}>
							Experiences of Community
						</Heading>
						<Text color={'gray.500'}>
							Community engagement usually necessitates time spent with
							communities to build trust and ensure the community representation
							structures are inclusive and accountable. How do we do this when
							we are prevented from meeting with the communities due to safety
							measures?
						</Text>
					</Stack>
					<Stack direction={'column'} spacing={0} fontSize={'sm'}>
						<Text fontWeight={600}>Aisha Bukar</Text>
						<Text color={'gray.500'}>April 08, 2018 · 13min read</Text>
					</Stack>
				</Box>
			</Center>
		</Grid>
	);
}
