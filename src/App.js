import CanvasBoard from "./components/CanvasBoard";
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <CanvasBoard />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex; 
  flex-direction: row; 
`
