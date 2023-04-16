import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { PieChart } from 'react-minimal-pie-chart';
import { Pressable, View, Image, Text, Button, StyleSheet } from 'react-native'; 
import "./style.css";
const myObj = {"abgelaufen":{name:"Abgelaufen",color:"#C92424"}, "ablauft":{name:"Läuft ab",color:"#FFA800"}, "haltbar":{name:"Haltbar",color:"#3096DF"}};

function Basic() {
  return (
    
<PieChart
  data={[
    { title: myObj.ablauft.name, value: 33, color: myObj.ablauft.color },
    { title: myObj.haltbar.name, value: 33, color: myObj.haltbar.color },
    { title: myObj.abgelaufen.name, value: 33, color: myObj.abgelaufen.color },
  ]} viewBoxSize="[10, 10]" center={[75,75]}/>
   );
}

function Dashboardbutton2() {
  function onPress(){
    alert('You clicked the button!'); 

} 
var Dashboard = [];
for(var i in myObj){
  Dashboard.push(
    <Pressable style={[{width: 137.42,height: 40.31,display: 'flex',padding:'10x',paddingVertical: 12,paddingHorizontal: 10,fontFamily: 'Roboto',alignItems: 'center',justifyContent: 'center',borderRadius: 10,elevation: 3,backgroundColor: myObj[i].color,}]} 
    onPress={onPress} >
        <Text style={styles.text}>{myObj[i].name} <FontAwesomeIcon icon={icon({name: 'chevron-right'})} style={{color: "#ffffff",fontSize: "20px",alignItems: 'flex-end'}} /></Text>
      </Pressable>
  );
 
}
return Dashboard;
}

function Dashboardbutton() {
  return (
    <div className='dashoard'>
    <Dashboardbutton2 />
    </div>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'self-end',
    justifyContent: 'self-end',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default function Dashboard() {
  return (
    
    <Container>
      <Row>
        <Col><div className='Titel'>Aktuelübersicht</div></Col>
      </Row>
      <Row>
    <View style={[{ width: 1200 }]}>
        <Col className='rectangle2'>
        <Row className='rectcenter'>
        <Col><Basic /></Col>
        <Col xs lg="2"><Dashboardbutton /></Col>
        </Row>
         </Col>
        
        </View>  
      </Row>
    </Container>
  
  );
}
  