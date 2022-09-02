import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import routes from './routes';

function App() {
  const getRoutes = () => routes.map(route => {
    return (
      <Route path={route.path} exact={route.exact} key={route.key} element={route.component} />
    );
  });

  return (
    <Router>
      <Routes>
        {getRoutes()}
      </Routes>
    </Router>
  );
}

export default App;
