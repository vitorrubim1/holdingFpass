import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ name, placeholder, ...rest }) => {
  return (
    <ChakraInput
      name={name}
      placeholder={placeholder}
      background="gray.900"
      border="1px solid gray.900"
      {...rest}
    />
  );
};

export default Input;
