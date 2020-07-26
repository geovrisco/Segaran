import React, { useState, useEffect, useContext } from "react";
import { Text, View, KeyboardAvoidingView, FlatList, AsyncStorage } from "react-native";
import styles from "../styles";
import { ListItem } from "react-native-elements";
import axios from "axios";
import {url}from '../config/variables'
import {AuthContext} from '../config/context'
// import { login } from "../../Server/controllers/user";

function HomeScreen({ navigation }) {

  const {loginState} = useContext(AuthContext)

  return (
    <>
      <KeyboardAvoidingView style={styles.containerGeo}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          {
            loginState && loginState.name &&
            <Text>Selamat Datang {loginState.name}</Text>
          }
          {
            loginState && !loginState.name &&
            <Text>Selamat Datang</Text>
          }
          {
            !loginState&&
            <Text>Selamat Datang silahkan masuk/daftar</Text>
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
  },[]);

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
