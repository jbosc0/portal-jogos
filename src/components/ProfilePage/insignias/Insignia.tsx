import React from 'react';
import { Flex, Image, Box, Text } from '@chakra-ui/react';
import { StaticImageData } from 'next/image';

interface InsigniaProps {
    imageUrl: StaticImageData;
}

const Insignia: React.FC<InsigniaProps> = ({ imageUrl }) => {
    return (
        <Box m={2}>
            <Image src={imageUrl.src} alt="Insignia" boxSize="40px" color='white' />
        </Box>
    );
};

export default Insignia;