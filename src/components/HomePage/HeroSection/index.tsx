import Link from 'next/link';

import { WithSubnavigation } from 'components/NavBar';

import { Flex, Box, Text, Button } from '@chakra-ui/react';

import styles from './styles.module.scss';

export const HeroSection = () => {
	return (
		<Box
			width={'100%'}
			backgroundImage={"url('/img/bgHeroSection.png')"}
			backgroundRepeat={'no-repeat'}
			backgroundSize={'cover'}
		>
			<WithSubnavigation />
			<Flex
				width={'100%'}
				minHeight={'90vh'}
				paddingInline={'6%'}
				flexDir={'column'}
				justifyContent={'space-evenly'}
			>
				<Text
					as={'b'}
					color={'white'}
					fontSize={'5.1rem'}
					width={'55%'}
				>
					Desenvolva <span className={styles.fontColor}>jogos</span>{' '}
					incríveis e traga suas{' '}
					<span className={styles.fontColor}>ideias</span> à vida!
				</Text>
				<Button
					rounded={'full'}
					width={'20%'}
					height={'8vh'}
					alignSelf={'center'}
					fontSize={'2.1rem'}
					fontWeight={'bold'}
				>
					<Link href="/login">Entre Agora</Link>
				</Button>
			</Flex>
		</Box>
	);
};
