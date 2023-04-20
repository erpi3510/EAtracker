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
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../App.js';
import ReactDOM from 'react-dom/client';
import Header from './Header.js';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Save from './modal.js';


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
    //var endData = data +', '+ values;
    var endData = [];
endData.push(data);
endData.push(values);
    setCookie("data", endData, 30);
  } else {
       setCookie("data", JSON.parse(wert), 30);
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
      var daten={"name":name, "date":date}; 
      var data=[];
      data.push(daten);
      checkCookie(JSON.stringify(daten)); 
      handleClose2();
    };

    function GetModalSave(){
      return (
        <> 
    <Modal show={show} onHide={handleClose} autoFocus={true} centered={true}>
            <Modal.Body style={{display:'flex',justifyContent:'space-evenly',flexDirection:'column',backgroundColor:'#298ED7'}}>
            <Pressable onPress={handleArtikel} style={{backgroundColor:'#298ED7'}}>
              <div className='rectangle11'>
              Neuer Artikel
              </div>
          </Pressable>
          <Pressable onPress={handleShow}>
                        <div className='rectangle11'>
                        Scanner
              </div>
          </Pressable>
            </Modal.Body>
          </Modal>
        </>
        );
    }

    function GetModalDataSave(){
      return (
        <> 
        <Modal show={show2} onShow={handleClose} onHide={handleClose2} autoFocus={true} centered={true}>
      <div 
    style={{ display: 'block', position: 'relative' }}
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
      <Button variant="primary" placeholder="TT.mm.jjjj" type="submit" style={{width:'100%', borderRadius:'10px'}}>
        Speichern
      </Button>
    </Form>
        </Modal.Body>
    </div>
      </Modal>
        </>
        );
    }

  return (
    <>
      <Pressable 
        onPress={handleShow} >
          <FontAwesomeIcon icon={icon({name: 'circle-plus'})} />
      </Pressable>
      <GetModalSave />
      <GetModalDataSave />

    </>
  );
} 

function Basic() {

  function handleClick() {
    window.location.reload();
  }
  return (
    <Pressable 
                    onPress={handleClick} >
                    <FontAwesomeIcon className='home' icon={icon({name: 'house'})} />
                 </Pressable>

   );
}

function click(values){
  alert('object '+ values );
  }



function Book() {
  var [mittel, setName] = useState("Values");
  function getData(){

    var a = "["+getCookie("data")+"]";
    var obj = eval ("(" + a + ")");
    var values = []
    for(var i in obj){
  values.push(
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start" action eventKey={i} onClick={handleArtikel} >
          <div className="ms-2 me-auto" onClick={() => setName(obj[i].name)}>
            <div className="fw-bold">{obj[i].name}</div>
            {obj[i].date}
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>    
  )
  }
      return values;
       
  }
  const [show, setShow] = useState(false);
 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleArtikel = () => setShow2(true);
  const handleClose2 = () => setShow2(false);
  const nameRef = React.useRef();
  const dateRef = React.useRef();


  const handleSubmit = (event) => {
      event.preventDefault();
  
      const name = nameRef.current.value;
      const date = dateRef.current.value;
      var daten={"name":name, "date":date}; 
      var data=[];
      data.push(daten);
      checkCookie(JSON.stringify(daten)); 
      handleClose2();
    };
    return (    
      <>   
          <Pressable 
                          onPress={handleShow} >
                          <FontAwesomeIcon icon={icon({name: 'book'})} />
                       </Pressable>
                       <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Header style={{padding:'0px',margin:'0px',borderBottom:'0px'}}>
          <Modal.Title style={{width:'100%',borderBottom:'0px',display:'flex',justifyContent:'center'}}><Header /></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup as="ol" numbered>
          {getData()}
    </ListGroup>

        </Modal.Body>
        <Modal.Footer  style={{padding:'0px',width:'100%',margin:'0px',borderTop:'0',display:'flex',justifyContent:'center'}}>
          <Menu />
        </Modal.Footer>
      </Modal>

      <Modal show={show2}  onHide={handleClose2} autoFocus={true} centered={true}>
      <div 
    style={{ display: 'block', position: 'relative' }}
    >
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label style={{display:'flex',justifyContent:'center'}}>Name</Form.Label>
        <Form.Control id="name" type="text" ref={nameRef} placeholder="Tomaten" value={mittel}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label style={{display:'flex',justifyContent:'center'}}>Mindesthaltbarkeitsdatum</Form.Label>
        <Form.Control type="date" id="date" ref={dateRef} />
      </Form.Group>
      <Button variant="primary" placeholder="TT.mm.jjjj" type="submit" style={{width:'100%', borderRadius:'10px'}}>
        Speichern
      </Button>
    </Form>
        </Modal.Body>
    </div>
      </Modal>

                       </>
     );
  }

export default function Menu() {
  return (
    
    <Container>
      <Row className='rectangle4'>
        <Col className='home'><Basic /></Col>
        <Col className='circlePlus'><Example /></Col>
        <Col className='book'><Book /></Col>
      </Row>
    </Container>
  
  );
}
  