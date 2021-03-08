import { Route, Switch } from 'react-router';
import ArtPage from './components/ArtPage';
import Home from "./components/Home";
import NotFound from './components/NotFound';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/art" component={ArtPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
