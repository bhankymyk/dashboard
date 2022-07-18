// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import Home from './Component/Home';
// import Header from './Component/Header';
import Navigation from './Component/Navigation';
// import Navigations from './Component/Navigations';
import { Route } from 'react-router-dom';
import Admins from './Component/Pages/Admins';
import Teachers from './Component/Pages/Teachers'
import Students from './Component/Pages/Students';
// import Watch from './Component/Watch';


function App() {
  
  return (
    <div className="App">
      <Container fluid>
      {/* <Watch/> */}
      {/* <Header/> */}
      {/* <Navigations/> */}
      <Navigation/>
      <Route path="/" exact component={Home} />
      <Route path="/admins" exact component={Admins} />
      <Route path="/teachers" exact component={Teachers}/>
      <Route path="/students" exact component={Students}/>
      </Container>
    </div>
  );
}

export default App;
