import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import routes from './routes';
import { PaginationProvider } from './Pages/Contexts/PaginationContext';

function App() {
  const getRoutes = () => routes.map(route => {
    return (
      <Route path={route.path} exact={route.exact} key={route.key} element={route.component} />
    );
  });

  return (
    <PaginationProvider>
      <Router>
        <Routes>
          {getRoutes()}
        </Routes>
      </Router>
    </PaginationProvider>
  );
}

export default App;
