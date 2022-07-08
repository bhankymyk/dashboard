// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap'
import Home from './Component/Home';
// import Watch from './Component/Watch';


function App() {
  
  return (
    <div className="App">
      <Container>
      {/* <Watch/> */}
      <Home/>
      </Container>
    </div>
  );
}

export default App;
