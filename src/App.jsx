import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
      {/* <Header /> */}
      {/* Container From Material-Tailwind For <Outlet /> */}
      {/* End Container */}
      <Footer />
    </>
  );
}

export default App;
