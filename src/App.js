import './App.css';
import Teeth from './artifacts/contracts/Teeth.sol/Teeth.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col} from 'react-bootstrap'
import Faucet from './components/Faucet.js'

function App() {

  const Token = Teeth;

  return (
    <div className='App'>
      <Container>
        <Row className='justify-content-md-center'>
          <Col>
          <div><Faucet tokenContract={Token}/></div>
          </Col>
          <Col>
          <div>Send Teeth</div>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
