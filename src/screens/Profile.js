// screens/Profile.js
import React, { useState, useEffect } from 'react';
import { renderToString } from 'react-dom/server';
import { View, Text,Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { WebView } from 'react-native-webview';



const Profile = () => {
  const userInfo = useSelector((state) => state.user.userInfo);

const [htmlstr,setHtmlStr] = useState(''); 



useEffect(()=> {

const MyComponent = () => {
  return (

 <View>
      <Text style={{fontSize:25, fontFamily:'Montserrat-Regular'}}>Profile</Text>
      <Text  style={{fontSize:15, fontFamily:'Montserrat-Regular'}}>Phone Number: {userInfo?.phone}</Text>
    </View>

  	);
};

let htmlstr = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the  folder during the build.
      Only files inside the  folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running .
    -->
    <title>React App</title>
  </head>
  <body>
    <pre>You need to enable JavaScript to run this app.</pre>
    <div id="root">`

+

renderToString(<MyComponent/>)

+


    `</div>
    
  </body>
</html>`;

setHtmlStr(htmlstr);


}, [] );



console.log('myuserinfo',userInfo);

  return (
  	<>
   
    <View style={{flex:1,width:Dimensions.get('window').width,height:300}} >

     <WebView
        source={{ html: htmlstr }}
        style={{ marginTop: 20 }}
      />

      </View>
      </>
  );
};

export default Profile;