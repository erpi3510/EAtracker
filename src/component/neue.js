import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Pressable, View, Image, Text, Button, StyleSheet } from 'react-native'; 
import "./style.css";
function Basic() {
  return (
      <div>
      Fisch, Joghurt, Butter, Milch, ... 
    </div>
   );
}

export default function Neue() {
  return (
    
    <Container>
         <Row>
        <Col><div className='Titel'></div></Col>
      </Row>
      <Row>
    <View style={[{ width: 1200 }]}>
        <Col className='rectangle3'>
        <Col className='artTitel1'>Neue Artikeln kürzlich hinzugefügt:</Col>
        <Col className='artTitel1'>&nbsp;</Col>
        <Col className='artTitel2'><Basic /></Col>
        <Col className='artTitel1'>&nbsp;</Col>
         </Col>
        
        </View>  
      </Row>
    </Container>
  
  );
}
  