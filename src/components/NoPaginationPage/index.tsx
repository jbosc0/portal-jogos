'use client';
import { useState, useEffect } from 'react';

import { CardCursoEdit } from 'components/CardCursoEdit';
import { WithSubnavigation } from 'components/NavBar';

import { Box, Flex, Heading } from '@chakra-ui/react';
import { api } from 'services/api';

import { Curso } from '../ListCursosPage/type';

export default function NoPaginationPage() {
	const [cursos, setCursos] = useState<Curso[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const response = await api.get('/cursos');
				setCursos(response.data);
			} catch (error) {
				console.error(error);
				setError(true);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	return (
		<Box backgroundImage={"url('/img/bgHeroSection.png')"}>
			<WithSubnavigation />
			<Flex
				width={'110vw'}
				height={'125vh'}
				flexDirection={'column'}
				justifyContent={'start'}
				alignItems={'start'}
				paddingLeft={120}
			>
				<Flex justifyContent={'start'} flexDir={'column'} gap={15}>
					<Heading
						borderBottom={'10px solid #B530F3'}
						fontSize={'70px'}
						color={'#FFFFFF'}
						width={'min-content'}
					>
						SemPaginação
					</Heading>
					{loading && <p>Loading...</p>}
					{error && <p>Erro ao carregar os cursos</p>}
					{!loading && !error && (
						<>
							{cursos.map((curso) => (
								<CardCursoEdit curso={curso} key={curso.Id} />
							))}
						</>
					)}
				</Flex>
			</Flex>
		</Box>
	);
}
