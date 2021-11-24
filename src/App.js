
import './App.css';
import Input from './Components/Input';
import Navbar from './Components/Navbar';
import Navbartabs from './Components/Navbartabs';
import Showbar from './Components/Showbar';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const todos = useSelector((s) => s.addingToDoReducer.todos);
  console.log(todos)

  return (
    <Router>

        <div className="App">

          <Navbar />
          <Navbartabs />
          <hr />
          <Input />





        </div>
        <Switch>
        <Route path="/active">
          {
            todos.map((a) => {

              if(a.status===false){

                return <Showbar data={a.val} key={a.uniquekey} unique={a.uniquekey} status={a.status} />
              }
              else return null
            })
          }
        </Route>
        <Route path="/complete">
        {
            todos.map((a) => {
              console.log('in complete',a)

              if(a.status===true){

                return <Showbar data={a.val} key={a.uniquekey} unique={a.uniquekey} status={a.status}/>
              }
              else return null
            })
          }
        </Route>
        <Route path="/">
          {
            todos.map((a) => {
              return <Showbar data={a.val} key={a.uniquekey} unique={a.uniquekey} status={a.status}/>
            })
          }
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
