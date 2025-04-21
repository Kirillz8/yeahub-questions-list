import { Outlet } from 'react-router-dom';
import { Container } from 'shared/ui/Container/Container.tsx';
import { Header } from 'widgets/Header';

function App() {
  return (
    <>
      <Header />
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
}

export default App;
