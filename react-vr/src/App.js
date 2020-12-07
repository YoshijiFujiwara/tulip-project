import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './pages/Index';
import Network from './pages/Network';
// import Sandbox from './pages/Sandbox';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route
            path="/sandbox/:id"
            render={(props) => {
              return <Sandbox {...props} />;
            }}
          /> */}
          <Route path="/network">
            <Network />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
