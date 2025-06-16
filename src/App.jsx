import { useState } from 'react';
import { Container, Title, Typography, Card, ToDosList, Form, ProgressBar } from './components';
import CategoriesList from './components/CategoriesList/CategoriesList';
// import ToDosList from './components/ToDosList/ToDosList';
// import Card from './components/Card/Card';
// import ProgressBar from './components/ProgressBar/ProgressBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Title />
      <Typography fontSize={24} bold marginTop={"38px"} marginBottom={"17px"}>
        List of Tasks
      </Typography>

      <Container flexrow>
        <ToDosList />
        <Container flexcol>
          <Card col>
            <Typography fontSize={24} bold >
              List of Tasks
            </Typography>
            <ProgressBar progress={"60%"} />
          </Card>
          <Form />
        </Container>
      </Container>
      <CategoriesList />
    </Container>

  );
}

export default App
