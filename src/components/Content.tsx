import { Flex } from "@chakra-ui/react";

const Layout: React.FC = ({ children }) => {
  return (
    <Flex
      width="100%"
      height="100vh"
      left="0"
      right="0"
      padding="6"
      position="absolute"
    >
      {children}
    </Flex>
  );
};

export default Layout;
