import { Flex, Icon, Text } from "@chakra-ui/react";
import { useCallback } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useHistory } from "react-router-dom";

interface GoBackProps {
  to: string;
}

const GoBack: React.FC<GoBackProps> = ({ to }) => {
  const history = useHistory();

  const handleGoBack = useCallback(() => {
    history.push(`${to}`);
  }, [to, history]);

  return (
    <Flex
      align="center"
      width="100px"
      cursor="pointer"
      marginTop="5"
      position="absolute"
      top="0"
      left="0"
      onClick={handleGoBack}
    >
      <Icon as={HiOutlineArrowNarrowLeft} size={25} color="gray.50" />
      <Text fontWeight="bold" color="gray.50" fontSize="larger" marginLeft="3">
        Voltar
      </Text>
    </Flex>
  );
};

export default GoBack;
