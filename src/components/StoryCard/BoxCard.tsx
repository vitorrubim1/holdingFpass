import { Flex, Text } from "@chakra-ui/react";

interface BoxCardProps {
  label: string;
}

const BoxCard: React.FC<BoxCardProps> = ({ label }) => {
  return (
    <Flex
      padding="2"
      maxWidth="150px"
      background="gray.800"
      align="center"
      justify="center"
      marginBottom="10"
    >
      <Text
        size="xs"
        fontWeight="bold"
        color="gray.300"
        textTransform="capitalize"
      >
        {label}
      </Text>
    </Flex>
  );
};

export default BoxCard;
