import { useState } from "react";
import { Stack } from "@chakra-ui/react";

const TodoAdd = () => {
  const [todo, setTodo] = useState("");
  const handleOnClick = () => {
    setTodo("タスク");
  };
  return (
    <Stack>
      <p>TodoAdd:{todo}</p>
      <button onClick={handleOnClick}>タスクを追加</button>
    </Stack>
  );
};
