import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './pages/Index';
import Sandbox from './pages/Sandbox';
import NetworkedSample from './pages/NetWorkedSample';

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
          <Route path="/networked_sample">
            <NetworkedSample />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
