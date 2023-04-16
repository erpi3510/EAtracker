import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Pressable, View, Image, Text, Button, StyleSheet } from 'react-native'; 
import "./style.css";

function click(){
    alert('You clicked the button!'); 
} 

function Basic() {
  return (
    <Pressable 
                    onPress={click} >
                    <FontAwesomeIcon className='eatTrackerRad' icon={icon({name: 'gear'})} />
                 </Pressable>

   );
}

export default function Header() {
  return (
    
    <Container>
         <Row>
        <Col><div className='Titel'></div></Col>
      </Row>
      <Row>
        <Col className='eatTrackerTitel'>EATracker</Col>
        <Col className='eatTrackerRad'><Basic /></Col>
       
      </Row>
    </Container>
  
  );
}
  