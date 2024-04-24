import { Flex } from "@chakra-ui/react";

import { Text } from "@chakra-ui/react";
import Insignia from "./Insignia";

import img1 from "../insignias/img/insignia.svg";
import img2 from "../insignias/img/insignia2.svg";

const Insignias = () => {
    return (
        <Flex direction="column" alignItems="center">
             {/* Título "Insignias" */}
            <Flex justifyContent="center" flexWrap="wrap">
                {/* Exemplo de duas insignias lado a lado */}
                <Insignia imageUrl={img1} />
                <Insignia imageUrl={img2} />
                {/* Adicione quantas insignias desejar aqui */}
            </Flex>
        </Flex>
    );
};

export default Insignias;