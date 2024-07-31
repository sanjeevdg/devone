// screens/Dashboard.js
import React from 'react';
import { TouchableOpacity,Text,View, Button } from 'react-native';
import { useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { clearUser } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Dashboard = ({ navigation }) => {


const userInfo = useSelector((state) => state.user.userInfo);

console.log('userInfo--',userInfo);


const dispatch = useDispatch();


 

  
const logout = async () => {
try {
auth()
  .signOut()
  .then(async () => {  dispatch(clearUser()); 

    await AsyncStorage.removeItem('@DevOneAppUser');
  	console.log('User signed out!'); navigation.navigate('Login');  

  });
} catch (e) {
    // saving error
    console.log('error removing fromto async storage');
  }

}


  return (
    <View style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center',alignSelf:'center' }} >



      <TouchableOpacity style={{borderRadius:20,backgroundColor:'rgb(163 230 53)',width:200,height:60,alignItems:'center',justifyContent:'center'}}
       onPress={() => navigation.navigate('Profile')} >
<Text style={{fontSize:25, fontFamily:'Montserrat-Regular'}}>Profile </Text>
      </TouchableOpacity>

      <TouchableOpacity 
       style={{borderRadius:20,backgroundColor:'rgb(163 230 53)',width:200,height:60,alignItems:'center',justifyContent:'center'}}
        onPress={() => navigation.navigate('VideoChat')} >
<Text style={{fontSize:25, fontFamily:'Montserrat-Regular'}}>Video Chat </Text>

      </TouchableOpacity>

      <TouchableOpacity
       style={{borderRadius:20,backgroundColor:'rgb(163 230 53)',width:200,height:60,alignItems:'center',justifyContent:'center'}}
        onPress={() => logout()} >
<Text style={{fontSize:25, fontFamily:'Montserrat-Regular'}}> Logout</Text>
      </TouchableOpacity>





    </View>
  );
};

export default Dashboard;