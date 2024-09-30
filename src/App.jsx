import { Outlet } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      {/* <Header /> */}
      {/* Container From Material-Tailwind For <Outlet /> */}
      {/* End Container */}
      {/* Footer */}
    </>
  );
}

export default App;
