'use client';
import Link from 'next/link';

import { Button, Flex, Image } from '@chakra-ui/react';
import { parseCookies } from 'nookies';
import nookies from 'nookies';


const navItems = [
	{ label: 'Home', href: '/' },
	{ label: 'Saiba Mais', href: '/informations' }
];

const navItemsUser = [
	{ label: 'Dashboard', href: '/dashboard' },
	{ label: 'Explorar', href: '/listCursos' },
	{ label: 'Meus Cursos', href: '/myCourses' },
	{ label: 'NoPagination', href: '/noPagination' },
	{ label: 'Perfil', href: '/profile' }
];

const caminhoImagem = '../img/pdj.png';
export const WithSubnavigation = () => {
	const { 'portal-jogos.token': token } = parseCookies();

	return (
		<>
			<Flex
				alignItems={'center'}
				justifyContent={'space-between'}
				width={'100%'}
				color={'white'}
				padding ={1}

			>
				<Flex justifySelf={'flex-start'} alignItems={'center'} gap={5}>
					<Link href={'/'}>
						<Image src={caminhoImagem} alt={'PDJ Imagem'} width={'60px'} height={'60px'}/>
					</Link>
					{token ? (
						<>
							{navItemsUser.map((navItem, index) => (
								<Link href={navItem.href} key={index}>
									{navItem.label}
								</Link>
							))}
						</>
					) : (
						<>
							{navItems.map((navItem, index) => (
								<Link href={navItem.href} key={index}>
									{navItem.label}
								</Link>
							))}
						</>
					)}
				</Flex>
				{!token && (
					<Button
						variant={'outline'}
						borderColor={'#00FFF0'}
						rounded={'5'}
						color={'#00FFF0'}
						_hover={{
							backgroundColor: '#00FFF0',
							color: '#0e0b1c'
						}}
					>
						<Link href={'/login'}>Login</Link>
					</Button>
				)}

			{token && (
				<Button
					variant={'outline'}
					borderColor={'#FA0505'}
					rounded={'5'}
					color={'#FA0505'}
					_hover={{
						backgroundColor: '#Fa0505',
						color: '#0e0b1c'
					}}
					onClick={() => nookies.destroy(null, 'portal-jogos.token')}
				>
					<Link href={'/login'}>Sair</Link>
				</Button>
			)}
			</Flex>
			<div style={{ borderBottom: '1px solid #ccc', margin: '1px 0', textAlign: 'center', color: '#777'}}></div>
		</>
	);
};

// 			backgroundColor={'purple.700'} 
