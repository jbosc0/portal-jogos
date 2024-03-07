'use client';

import { Card, Flex } from "@chakra-ui/react";
import { userProps } from "components/ProfilePage/type";

import { jwtDecode } from 'jwt-decode';
import { parseCookies } from 'nookies';
import { useEffect, useState } from "react";

export default function LastAchievement() {
    const { 'portal-jogos.token': token } = parseCookies();

    const [user] = useState<userProps | null>(jwtDecode(token) || null);

    const [lastAchievement] = useState(0);
    // useEffect(() => {


    return (
        <Flex justifyContent={'center'} alignItems={'center'}>
            <Card
                bg={'#120E27'}
				width={{ lg: '22rem' }}
				height={{ lg: '22rem' }}
				rounded={'14px'}
				borderTop={'34px solid #2A2156'}
				justifyContent={'center'}
				alignItems={'center'}>

            </Card>
        </Flex>
    );
}