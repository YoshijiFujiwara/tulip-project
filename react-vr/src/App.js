import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sandbox from './pages/Sandbox';
import Index from './pages/Index';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/sandbox/:id"
            render={(props) => {
              return <Sandbox {...props} />;
            }}
          />
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
