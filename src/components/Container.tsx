import { Flex } from "@chakra-ui/react";

const Container: React.FC = ({ children }) => {
  return (
    <Flex width="100%" height="100vh" overflowX="hidden" position="relative">
      {children}
    </Flex>
  );
};

export default Container;
