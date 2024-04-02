import Link from 'next/link';

import { Button, Heading, Flex, Text } from '@chakra-ui/react';

export const ParticipateSection = () => {
	return (
		<Flex
			flexDir={'column'}
			justifyContent={'space-around'}
			width={'100%'}
			height={'100vh'}
			paddingY={'2%'}
			paddingInline={'8%'}
			minHeight="100vh"
  			background="linear-gradient(to bottom, #38102F, #000000)"
		>
			<Heading
				as={'b'}
				fontSize={'70px'}
				color={'white'}
				textDecoration={'underline #C329FFCC'}
			>
				Participe
			</Heading>
			<Text
				as={'b'}
				fontSize={'4.1rem'}
				color={'white'}
				alignSelf={'center'}
				width={'85%'}
				textAlign={'center'}
			>
				Deseja se tornar um sensei? Aperte no botão abaixo e nos envie
				seu curso!
			</Text>
			<Button
				width={'20%'}
				height={'7vh'}
				rounded={'full'}
				alignSelf={'center'}
				fontSize={'2rem'}
				fontWeight={'bold'}
			>
				<Link href="/login">Colabore</Link>
			</Button>
		</Flex>
	);
};
