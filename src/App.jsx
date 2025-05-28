import { useState } from 'react';
import { Container, Typography } from './components';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Container><Typography fontSize={24}>Hello World!</Typography></Container>

  )
}

export default App
