/* eslint-disable react/jsx-key */
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import routes from './routes';
import { PaginationProvider } from './Contexts/PaginationContext';
import { LayoutProvider } from './Contexts/LayoutContext';

function App() {
  const getRoutes = () => routes.map(route => {
    return (
      <Route path={route.path} exact={route.exact} key={route.key} element={route.component} />
    );
  });

  return (
    <PaginationProvider>
      <LayoutProvider>
        <Router>
          <Routes>
            {getRoutes()}
          </Routes>
        </Router>
      </LayoutProvider>
    </PaginationProvider>
  );
}

export default App;
