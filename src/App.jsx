import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

function App() {
  (
  <Router>
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
  </Switch>
  </Router>
  )
}

export default App
