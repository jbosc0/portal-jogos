import { AboutSection } from './AboutSection';
import { HeroSection } from './HeroSection';
import { ParticipateSection } from './ParticipateSection';

export const HomePage = () => {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<TeamSection />
			<ParticipateSection />
		</>
	);
};
