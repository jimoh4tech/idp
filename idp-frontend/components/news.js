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
							Coronavirus wil decimate refugee 
						</Heading>
						<Text color={'gray.500'}>
							As world leaders brace for the worst within their borders, they
							must not abandon those living outside them. We must turbocharge
							our humanity and stand in international solidarity with refugees
							and displaced people during this time of widespread uncertainty.
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
							Afghanistan
						</Text>
						<Heading color={'gray.700'} fontSize={'2xl'} fontFamily={'body'}>
							No place to call home for refugees
						</Heading>
						<Text color={'gray.500'}>
							Pakistani refugees in Afghanistan are facing a bleak future as
							international organisations withdraw from Gulan camp, in the
							south-east of the country. Funding for their assistance is now
							being omitted for plans for 2020. In this photo story, camp
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
