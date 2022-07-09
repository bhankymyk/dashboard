// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap'
import Home from './Component/Home';
import Header from './Component/Header';
import { Route } from 'react-router-dom';
import Admins from './Component/Pages/Admins';
// import Watch from './Component/Watch';


function App() {
  
  return (
    <div className="App">
      <Container fluid>
      {/* <Watch/> */}
      <Header/>
      <Route path="/" exact component={Home} />
      <Route path="/admins" exact component={Admins} />
      </Container>
    </div>
  );
}

export default App;
