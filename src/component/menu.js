import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Pressable, View, Image, Text, StyleSheet } from 'react-native'; 
import "./style.css";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Example() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleArtikel = () => setShow2(true);
  const handleClose2 = () => setShow2(false);

  return (
    <>
      <Pressable 
        onPress={handleShow} >
          <FontAwesomeIcon icon={icon({name: 'circle-plus'})} />
      </Pressable>

      <Modal show={show} onHide={handleClose} autoFocus={true} centered={true}>
        <Modal.Body style={{display:'flex',justifyContent:'space-evenly',flexDirection:'column'}}>
        <Pressable 
        onPress={handleArtikel}>
          <div className='rectangle1'>
          Neuer Artikel
          </div>
      </Pressable>
      <Pressable onPress={handleShow}>
                    <div className='rectangle1'>
                    Scanner
          </div>
      </Pressable>
        </Modal.Body>
      </Modal>

      <Modal show={show2} onShow={handleClose} onHide={handleClose2} autoFocus={true} centered={true}>
      <div 
    className="modal show"
    style={{ display: 'block', position: 'initial' }}
    >
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tomaten"
                autoFocus
              
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Mindesthaltbarkeitsdatum</Form.Label>
              <Form.Control as="textarea" rows={1} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <ModalFooter style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
          <Button type='submit' style={{width:'100%', borderRadius:'10px'}} variant="primary">Speichern</Button>
        </ModalFooter>
    </div>
      </Modal>
    </>
  );
}

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
        <Col className='circlePlus'><Example /></Col>
        <Col className='book'><Book /></Col>
      </Row>
    </Container>
  
  );
}
  