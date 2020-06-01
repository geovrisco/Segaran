import { StyleSheet, Dimensions } from 'react-native';
import * as Font from 'expo-font';

const MAX_WIDTH = Dimensions.get('screen').width
const MAX_HEIGHT = Dimensions.get('screen').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  justifyVertical: {
    flex: 1,
    alignItems:'center'
  },
  buttonBiru:{
    alignItems: "center",
    backgroundColor: "#34ace0",
    padding: 10,
    justifyContent:'center',
    height:MAX_HEIGHT * 0.05,
    width:MAX_WIDTH* 0.2,
    marginLeft:MAX_WIDTH*0.010
  },
  textWhite:{
    color:'white'
  },
  containerGeo:{
    marginTop:MAX_HEIGHT*0.05,
    flex:1,
  },
  Opensans:{
    fontFamily:'OpenSans',
    fontSize:30
  },
  paragraf:{
    marginTop:MAX_HEIGHT*0.01
  },
  container2:{
    backgroundColor:'#1e90ff',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  inputContainer:{
    width:MAX_WIDTH*0.75,
    backgroundColor:'white',
    borderTopEndRadius:20,
    borderTopStartRadius:20,
    height:MAX_HEIGHT*0.25,
    alignItems:'center',
    justifyContent:'center',
  },
  marginTop1Bot1:{
    marginTop: MAX_HEIGHT*0.01,
    marginBottom:MAX_HEIGHT*0.01
  },
  white:{
    color:'#ffffff',
    fontWeight:'bold'
  },
  registerContainer:{
    width:MAX_WIDTH*0.75,
    backgroundColor:'white',
    borderTopEndRadius:20,
    borderTopStartRadius:20,
    height:MAX_HEIGHT*0.5,
    alignItems:'center',
    justifyContent:'center',
  },
  profileForm:{
    width:MAX_WIDTH*0.8,
  },
  profileFormMulti:{
    width:MAX_WIDTH*0.65,
    height:MAX_HEIGHT*0.3
  }
});

export default styles