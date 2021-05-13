import { Flex } from "@chakra-ui/react";
import { CircleLoader } from "react-spinners";

const Loading: React.FC = () => {
  return (
    <Flex height="30%" width="inherit" align="center" justify="center">
      <CircleLoader size={70} color="#FFF" />
    </Flex>
  );
};

export default Loading;
