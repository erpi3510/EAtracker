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
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import de from 'date-fns/locale/de';
import 'bootstrap/dist/css/bootstrap.min.css';
registerLocale('de', de);

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(newData) {
  var wert = JSON.stringify(newData);
  var cookie_value = getCookie("data");
  var data ;
  var values;
  if (cookie_value !== "") {
    var newValues = JSON.stringify(cookie_value);;
    data = JSON.parse(newValues);
    values = JSON.parse(wert);
    var endData = data +','+ values;
    setCookie("data", endData, 30);
    console.log(endData+'  da');
  } else {

       setCookie("data", JSON.parse(wert), 30);
      
       console.log(JSON.parse(wert)+'jo1');
  }
}

function Example() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleArtikel = () => setShow2(true);
  const handleClose2 = () => setShow2(false);
  const nameRef = React.useRef();
  const dateRef = React.useRef();


  const handleSubmit = (event) => {
      event.preventDefault();
  
      const name = nameRef.current.value;
      const date = dateRef.current.value;
      var daten={"name":name,
      "date":date}; 
      var data=[];
      data.push(daten);
      checkCookie(JSON.stringify(daten)); 
    };

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
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label style={{display:'flex',justifyContent:'center'}}>Name</Form.Label>
        <Form.Control id="name" type="text" ref={nameRef} placeholder="Tomaten" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label style={{display:'flex',justifyContent:'center'}}>Mindesthaltbarkeitsdatum</Form.Label>
        <Form.Control type="date" id="date" ref={dateRef} />
      </Form.Group>
      <Button variant="primary" type="submit" style={{width:'100%', borderRadius:'10px'}}>
        Submit
      </Button>
    </Form>
        </Modal.Body>
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (    
      <>   
          <Pressable 
                          onPress={handleShow} >
                          <FontAwesomeIcon icon={icon({name: 'book'})} />
                       </Pressable>
                       <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Header closeButton>
          <Modal.Title>Liste</Modal.Title>
        </Modal.Header>
        <Modal.Body>{getCookie("data")}</Modal.Body>
      </Modal>

                       </>
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
  