import Home from './Home'
import About from "./About";
import HowTo from "./HowTo";
import Profile from "./Profile";
import { BrowserRouter, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
        <Route path="/about" component={ About } />
        <Route path="/howto" component={ HowTo } />
        <Route path="/profile"><Profile /></Route>
        <Route exact path="/" component={ Home } />
    </BrowserRouter>

  );
}

export default App;
