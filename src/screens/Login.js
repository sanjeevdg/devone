import React, { useState, useEffect } from 'react';
import { ActivityIndicator,StyleSheet,Text,Button, TextInput,View,TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import {save_appuser_to_async_storage} from '../utils/utils';


export default function Login({navigation}) {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState('');

  const [loading,setLoading] = useState(false);
  const [phno, setPhno]  = useState('');

  const [loading2,setLoading2] = useState(false);


  const dispatch = useDispatch();


useEffect(() => {

 try {
    
    AsyncStorage.getItem('@DevOneAppUser').then((res) => {


      console.log('resval=',res);





    });
   // console.log('async contains-->',jsonValue);
    
  } catch(e) {
    // error reading value
    console.log('error reading from async storage');

  }



}, [] );




async function saveUser(ph) {

console.log('going to save ph',ph);

 try {
   
    AsyncStorage.setItem('@DevOneAppUser', JSON.stringify({phone:ph})).then((resp) =>
{

  console.log('asyc-resp=',resp);
  console.log('saved to async');
}
      );



  } catch (e) {
    // saving error
    console.log('error saving to async storage',e);
  }

      
}



  // Handle login
  function onAuthStateChanged(user) {
    if (user) {
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.

console.log('fbuser==',user);



dispatch(setUser({ phone:user.phoneNumber }));
saveUser(user.phoneNumber);
      navigation.navigate('Dashboard');


    }
  }


/*






*/



  useEffect(() => {


    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);



    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode(mc) {
    try {
      await confirm.confirm(mc);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <>
        <View style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center',alignSelf:'center' }} >
          <Text style={{fontSize:25, fontFamily:'Montserrat-SemiBold'}} >Enter phone number</Text>
      <TextInput placeholder="enter phone number" maxLength={10}  value={phno} onChangeText={text => setPhno(text)} />

      <TouchableOpacity
        style={{borderRadius:20,backgroundColor:'rgb(163 230 53)',width:150,height:60,alignItems:'center',justifyContent:'center'}}
        onPress={() => { signInWithPhoneNumber('+91'+phno); setLoading(true);  }}
      ><Text style={{fontSize:25, fontFamily:'Montserrat-SemiBold'}} >Sign In</Text>
      {loading &&  <ActivityIndicator color="white" size='small' />}
    </TouchableOpacity>
    </View>
      </>
    );
  }

  return (
    <>
    <View style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center',alignSelf:'center' }} >
         <Text style={{fontSize:25, fontFamily:'Montserrat-SemiBold'}} >Enter Otp</Text>
 <OTPInputView 
   autoFocusOnLoad
   style={{width: '80%', height: 200}}
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
onCodeFilled={(mycode) => {
  setCode(mycode);setLoading2(true); confirmCode(mycode);
        console.log(`Code is ${code}, you are good to go!`);
    }}
  pinCount={6} />


      <TouchableOpacity 
style={{borderRadius:20,backgroundColor:'rgb(163 230 53)',width:200,height:60,alignItems:'center',justifyContent:'center'}}
       onPress={() => confirmCode()} >
<Text style={{fontSize:25, fontFamily:'Montserrat-SemiBold'}}>Confirm Otp</Text>

      </TouchableOpacity>
    </View>
    </>
  );
}



const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});