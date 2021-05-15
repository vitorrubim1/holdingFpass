import { Text, Flex, SimpleGrid } from "@chakra-ui/react";

interface StoryCardProps {
  sectionLabel: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ sectionLabel, children }) => {
  return (
    <Flex flexDirection="column" align="start">
      <Text size="lg" fontWeight="bold" color="gray.50">
        {sectionLabel}
      </Text>

      <SimpleGrid flex="1" gap="5" minChildWidth="140px" width="100%">
        {children}
      </SimpleGrid>
    </Flex>
  );
};

export default StoryCard;
