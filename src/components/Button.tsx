import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

type ButtonProps = ChakraButtonProps;

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <ChakraButton background="blue.500">{children}</ChakraButton>;
};

export default Button;
