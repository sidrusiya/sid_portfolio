import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from './components';
import { useLocation } from 'react-router-dom';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

function App() {
  const location = useLocation();
  return (
    <Layout location={location}>
      <StyledMainContainer className="fillHeight">
        <Hero />
        <About />
        <Jobs />
        <Featured />
        <Projects />
        <Contact />
      </StyledMainContainer>
    </Layout>
  );
}

export default App;
