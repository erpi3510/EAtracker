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
                    <FontAwesomeIcon className='home' icon={icon({name: 'house'})} />
                 </Pressable>

   );
}
function Book() {
    return (
        
          
          <Pressable 
                          onPress={click} >
                          <FontAwesomeIcon icon={icon({name: 'book'})} />
                       </Pressable>
          
     );
  }
  function CirclePlus() {
    return (
      
      <Pressable 
                      onPress={click} >
                      <FontAwesomeIcon icon={icon({name: 'circle-plus'})} />
                   </Pressable>
     
     );
  }

export default function Menu() {
  return (
    
    <Container>
         <Row>
        <Col><div className='Titel'></div></Col>
      </Row>
      <Row className='rectangle4'>
   
        <Col className='home'><Basic /></Col>
        <Col className='circlePlus'><CirclePlus /></Col>
        <Col className='book'><Book /></Col>
       
      </Row>
    </Container>
  
  );
}
  