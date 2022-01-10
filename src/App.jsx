import "./App.css";
import { Switch, Route } from "react-router";
import Testing from "./components/Map/Testing.jsx";
import newHome from "./components/Home/Homepage.jsx"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Testing} />
        <Route path="/home" component={newHome}/>
      </Switch>
    </div>
  );
}

export default App;
