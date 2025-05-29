import { useState } from 'react';
import { Container, Title, Typography } from './components';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Title />
      <Typography fontSize={24} bold marginTop={"38px"}>
        List of Tasks
      </Typography>
    </Container>

  );
}

export default App
