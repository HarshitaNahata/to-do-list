import { useState } from 'react';
import { Container, Title, Typography } from './components';
import ToDosList from './components/ToDosList/ToDosList';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Title />
      <Typography fontSize={24} bold marginTop={"38px"}>
        List of Tasks
      </Typography>
      <ToDosList />
    </Container>

  );
}

export default App
