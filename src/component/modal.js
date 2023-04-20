
import "./style.css";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  export default function Click(){
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  
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
      handleClose();
    };
    return (
      <> 
  <Modal show={show} onHide={handleClose} autoFocus={true} centered={true}>
          <Modal.Body style={{display:'flex',justifyContent:'space-evenly',flexDirection:'column',backgroundColor:'#298ED7'}}>
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
        </Modal>
      </>
      );
  } 
