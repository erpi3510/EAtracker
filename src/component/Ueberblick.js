import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Pressable, View, Image, Text, Button, StyleSheet } from 'react-native'; 
import "./style.css";
function Basic() {
  return (
      <div>
      <ProgressBar style={{height: '40px',borderRadius:'20px'}}>
       <ProgressBar style={{color:'white'}} label={'75 %'} now={75} key={1} />
      <ProgressBar  label={'25 %'}  variant="danger" now={25} key={2} />
    </ProgressBar>
  
    </div>
   );
}

export default function Dashboard() {
  return (
    
    <Container>
      <Row>
        <Col><div className='Titel'>Monatsrückblick</div></Col>
      </Row>
      <Row>
    <View style={[{ width: 1200 }]}>
        <Col className='rectangle3'>
        <Col>
        <Row className=''>
        <Col className='Titel1'>Verbrauch</Col>
        <Col className='Titel2'>Abfall</Col>
        </Row>
        </Col>
        <Col><Basic /></Col>
         </Col>
        
        </View>  
      </Row>
    </Container>
  
  );
}
  