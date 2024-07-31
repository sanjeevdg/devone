import React,{useState,useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const save_appuser_to_async_storage = async (value) => {
  try {
   
    await AsyncStorage.setItem('@DevOneAppUser', JSON.stringify(value));

  } catch (e) {
    // saving error
    console.log('error saving to async storage',e);
  }
  console.log('SAVE-SUCCESS');


}
 
export const get_appuser_from_async_storage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@DevOneAppUser');
   // console.log('async contains-->',jsonValue);
    return jsonValue != null ? jsonValue : null;
  } catch(e) {
    // error reading value
    console.log('error reading from async storage');

  }
}

export const get_count_of_history_items_from_async_storage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@XDashQueryHistory');
    console.log('async contains-->',jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue).length : 0;
  } catch(e) {
    // error reading value
    console.log('error reading from async storage');

  }
}

export const getAsyncStoreData = async () => {

try {
AsyncStorage.getAllKeys((err, keys) => {
  AsyncStorage.multiGet(keys, (error, stores) => {
    stores.map((result, i, store) => {
      console.log({ [store[i][0]]: store[i][1] });
      return true;
    });
  });
});

}
catch(e) {console.log('error gettig async data',e)}

}

export const remove_appuser_from_async_storage = async () => {
  try {
    await AsyncStorage.removeItem('@DevOneAppUser')
  } catch (e) {
    // saving error
    console.log('error removing fromto async storage');
  }
}