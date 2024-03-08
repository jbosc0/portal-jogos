import { WithSubnavigation } from 'components/NavBar';

import { Box, Flex, Grid, GridItem, Progress } from '@chakra-ui/react';

import CursosProgress from './CursosProgress';
import XpProgress from './XpProgress';
import LastAchievement from './LastAchievement';
import ProgressBar from './ProgressBar';

export default function DashboardStudentPage() {
	return (
		<Box backgroundImage={"url('/img/bgHeroSection.png')"}>
			<WithSubnavigation />
			<Flex>
				<Grid
					templateRows="repeat(2, 2fr)"
					templateColumns="repeat(4, 1fr)"
					gap={5}
					width={'100%'}
					height={'100%'}
					paddingX={'8.5%'}
					paddingY={'2rem'}
				>
					<GridItem colSpan={1}>
						<LastAchievement />
					</GridItem>
					<GridItem>
						<XpProgress />
					</GridItem>
					<GridItem colSpan={2}>
						<CursosProgress />
					</GridItem>
					<GridItem colSpan={4}>
						<ProgressBar />
						{/* <Progress value={20} size='xs' colorScheme='pink' /> */}
					</GridItem>
				</Grid>
			</Flex>
		</Box>
	);
}
