import { useState } from 'react';
import { Container, Title, Typography } from './components';
import ToDosList from './components/ToDosList/ToDosList';
import Card from './components/Card/Card';
import ProgressBar from './components/ProgressBar/ProgressBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Title />
      <Typography fontSize={24} bold marginTop={"38px"}>
        List of Tasks
      </Typography>
      <Container flex>
        <ToDosList />
        <Card>
          <Typography fontSize={24} bold >
            List of Tasks
          </Typography>
          <ProgressBar progress={"60%"} />
        </Card>
      </Container>
    </Container>

  );
}

export default App
