import React, { useState, useEffect } from "react";
import { Text, View, KeyboardAvoidingView, FlatList, AsyncStorage } from "react-native";
import styles from "../styles";
import { ListItem } from "react-native-elements";
import axios from "axios";
import {url}from '../config/variables'
import useLoginData from '../hooks/useLoginData'
import { Button } from "react-native-paper";

function HomeScreen({ navigation }) {
  const {userName,role,token} = useLoginData([])
  // console.log("home",userName,role,token);
   async function logout(){
     console.log('keluar')
    try{
      let keys =['name','role','token']
      const remove = await AsyncStorage.multiRemove(keys)
      console.log(remove,'ini remove')
      const getz = await AsyncStorage.multiGet(keys)
      console.log(getz,'ini get')
    } catch(err){
      console.log(err,'ini error dari logout()')
    }
  }

  return (
    <>
      <KeyboardAvoidingView style={styles.containerGeo}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {
          !userName && 
          <Text>Selamat Datang silahkan masuk/daftar</Text>
        }
        { userName && 
        <>
          <Text>Selamat Datang {userName}</Text>
          <Button
            mode="contained"
            onPress={()=>logout()}
          >Keluar</Button>
        </>
        }
        </View>
        <ListContent navigation={navigation}></ListContent>
      </KeyboardAvoidingView>
    </>
  );
}

function ListContent(navigation) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getArticles = async () => {
    try {
      let result = await axios(`${url}/articles`);
      setArticles(result.data);
      setIsLoading(false);
    } catch (err) {
      console.log('article error============================')
      console.log(err, "error ambil artikel");
    }
  };

  function testId(id,title) {
    // console.log(navigation.navigation.navigate);
    navigation.navigation.navigate("NewsDetail", {
      articleId: id,
      articleTitle:title
    });
  }

  useEffect(() => {
    getArticles();
  }, []);

  // console.log("home_screen");
  return (
    <>
      {!isLoading && (
        <View>
          <FlatList
            data={articles}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                subtitle={item.category}
                bottomDivider
                onPress={() => testId(item.id,item.title)}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}
    </>
  );
}

export default HomeScreen;
