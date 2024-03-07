import Link from 'next/link';

import { Button, Heading, Flex, Text } from '@chakra-ui/react';

export const ParticipateSection = () => {
	return (
		<Flex
			flexDir={'column'}
			justifyContent={'space-around'}
			width={'100%'}
			height={'90vh'}
			backgroundColor={'#120E27'}
			backgroundImage={"url('/img/bgTeamSection.png')"}
			backgroundSize={'cover'}
			paddingY={'2%'}
			paddingInline={'8%'}
		>
			<Heading
				as={'b'}
				fontSize={'80px'}
				color={'white'}
				textDecoration={'underline #C329FFCC'}
			>
				Participe
			</Heading>
			<Text
				as={'b'}
				fontSize={'5.1rem'}
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
