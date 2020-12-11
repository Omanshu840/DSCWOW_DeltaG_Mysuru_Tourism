import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Components/Homepage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
