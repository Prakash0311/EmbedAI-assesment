import './App.css';
import {Route, Switch} from 'react-router-dom'
import Homepage from './components/Homepage'
import CreateCharacter from './components/CreateCharacter'
import Chat from './components/Chat'
import NotFound from './components/NotFound'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/create" component={CreateCharacter} />
        <Route exact path="/chat" component={Chat} />
        <Route path="/not-found" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
