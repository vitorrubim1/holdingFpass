import { Box } from "@chakra-ui/react";
import { CircleLoader } from "react-spinners";

const Loading: React.FC = () => {
  return (
    <Box>
      <CircleLoader size={50} color="#F10707" />
    </Box>
  );
};

export default Loading;
