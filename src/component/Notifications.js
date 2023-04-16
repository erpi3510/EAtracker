import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css";
import { AppRegistry, Pressable, ScrollView, View, Image, Text, Button, StyleSheet } from 'react-native'; 
const myObj ={'item1':{'name':'Milch','color':'#FF3D00'},'item2':{'name':'Bananen','color':'#3D00FF'},'item3':{'name':'Button3','color':'#FFFF3D'},'item4':{'name':'Button4','color':'#FF3DFF'},'item5':{'name':'Button5','color':'#3DFF00'},'item6':{'name':'Button6','color':'#3D00FF'},'item7':{'name':'Button7','color':'#FF3DFF'},'item8':{'name':'Button8','color':'#3DFF00'}};

function Notif() {
  function click(){
    alert('You clicked the button!'); 
} 
var notif = [];
for (var i in myObj){
  notif.push(
    <View style={{ width: 220,height: 70,padding: 10,display:'flex',justifyContent:'center'}} >   
    <Pressable style={{width: 137.42,height: 40.31,display: 'flex',fontFamily: 'Roboto',alignItems: 'center',justifyContent: 'center',borderRadius: 10,elevation: 3,backgroundColor: myObj[i].color,}} 
        onPress={click} >
        <Text style={styles.text}>{myObj[i].name}</Text>
     </Pressable>
</View>
  ); 
}
return notif;
}

function Basic() {
return (
<ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>   
<Notif />
   </ScrollView>
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
  


export default function Gallery() {
  return (
    
    <Container>
      <Row>
        <Col><div className='Titel'>Notifications</div></Col>
      </Row>
      <Row>
      <View style={[{ width: 1200 }]}>
        <Col><div className='rectangle1'><Basic /></div></Col>
        </View> 
      </Row>
    </Container>
  );
}
