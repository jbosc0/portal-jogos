'use client';
import { useEffect, useState } from 'react';

import { CardCursoEdit } from 'components/CardCursoEdit';
import { Curso } from 'components/ListCursosPage/type';
import { WithSubnavigation } from 'components/NavBar';
import { userProps } from 'components/ProfilePage/type';

import { Box, Flex, Heading } from '@chakra-ui/react';
import { jwtDecode } from 'jwt-decode';
import { parseCookies } from 'nookies';
import { api } from 'services/api';

export default function MyCoursesPage() {
	const { 'portal-jogos.token': token } = parseCookies();
	const [cursos, setCursos] = useState<Curso[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const [user] = useState<userProps | null>(jwtDecode(token) || null);

	useEffect(() => {
		if (user) {
			(async () => {
				try {
					const response = await api.get(`cursos/`);
					setCursos(response.data);
				} catch (error) {
					console.error(error);
					setError(true);
				} finally {
					setLoading(false);
				}
			})();
		}
	}, [user]);

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
						Cursos
					</Heading>
						{/* Adicione um espaço extra entre o Heading e os cards */}
						<Box mt={5}>
							{loading && <p>Loading...</p>}
							{error && <p>Erro ao carregar os cursos</p>}
							{!loading && !error && (
							<>
								{cursos.map((curso) => (
									<CardCursoEdit curso={curso} key={curso.Id} />
								))}
							</>
							)}
						</Box>
					</Flex>
				</Flex>
		</Box>
	);
}
