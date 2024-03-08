'use client'
import { Box, Card, Flex, Progress, Text } from "@chakra-ui/react";
import { userProps } from "components/ProfilePage/type";
import { jwtDecode } from "jwt-decode";
import { parseCookies } from "nookies";
import { useState, useEffect } from "react";

export default function ProgressBar() {
    const { 'portal-jogos.token': token } = parseCookies();

	const [user] = useState<userProps | null>(jwtDecode(token) || null);
	const [XP, setXP] = useState(0);
	useEffect(() => {
		setXP(user?.result?.XP || 0);
	}, [user?.result?.XP]);

	console.log(user?.result?.XP);
    
    return (
        <Flex justifyContent={'center'} alignItems={'center'}>
            <Card
                bg={'#120E27'}
				width={{ lg: '100%' }}
				height={{ lg: '18rem' }}
				rounded={'14px'}
				borderTop={'34px solid #2A2156'}
				justifyContent={'space-between'}
				alignItems={'center'}>
                    <Box
                        width={'90%'}
                        padding={5}>
                        <Text
                            color={'#F5F5F5'}
                            fontWeight={'500'}
                            fontSize={'2rem'}
                            paddingBottom={'5%'}>
                            Seu progresso até a próxima insignia:
                        </Text>
                        <Progress
                            value={XP}
                            size='xs'
                            maxWidth={'100%'}
                            minWidth={'100%'}
                            colorScheme={'purple'}
                            color={'#B530F3'}
                            width={'80%'}
                            height={'2rem'}
                            borderRadius={'10px'}
                            
                        />
                    </Box>
            </Card>
        </Flex>
    )
}