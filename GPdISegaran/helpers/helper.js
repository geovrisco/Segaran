import { AsyncStorage } from "react-native";

export const setAsyncStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(`${key}`, `${value}`);
  } catch (error) {
    console.log(error);
  }
};

export const getAsyncStorage = async (key) => {
  try {
    let AsyncStorageValue = await AsyncStorage.getItem(`${key}`);
    if (AsyncStorageValue === null) {
      throw "data kosong";
    } else {
      console.log(AsyncStorageValue,'ini async storage value untuk :',key)
      return AsyncStorageValue
    }
  } catch (error) {
    console.log(error);
    return null
  }
};

export const removeAsyncStorage = async (key) => {
  try {
    let result = await AsyncStorage.removeItem(`${key}`)
    console.log('remove async', result)
  } catch (error) {
    console.log(error)
  }
};
