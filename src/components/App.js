import axios from "axios";
import { Stack, HStack } from "@chakra-ui/react";

export default function App() {
  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return console.log(response.data);
  };
  fetchData();
  return (
    <Stack>
      <HStack>
        <h1>Hello React</h1>
      </HStack>
    </Stack>
  );
}
