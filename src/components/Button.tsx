import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

type ButtonProps = ChakraButtonProps;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <ChakraButton
      background="blue.500"
      _hover={{ background: "blue.600" }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
