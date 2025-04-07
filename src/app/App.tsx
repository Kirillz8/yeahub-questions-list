import { Outlet } from 'react-router-dom';
import { Container } from '../shared/ui/Container/Container.tsx';
import { Header } from '../widgets/Header/Header.tsx';
import '../shared/styles/index.css';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
