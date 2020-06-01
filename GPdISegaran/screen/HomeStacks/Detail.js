import React, { useEffect, useState } from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import { Text } from 'react-native-elements';
import axios from 'axios'
import {url} from '../../config/variables'
import styles from '../../styles'

export default function Detail({route}){
  const articleId = route.params.articleId
  const [content, setContent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [paragraph, setParagraph] = useState(null)

  async function fetchData(){
    let result = await axios(`${url}/articles/${articleId}`)
    setContent(result.data)
    setParagraph(result.data.text.split('<enter>'))
    setIsLoading(false)
  }
  
  
  useEffect(() => {
    fetchData()
  },[])

  return(
    <View style={styles.container}>
      {
        !isLoading &&
        <View>
          <Text h4>{content.title}</Text>
          <ScrollView>
            { paragraph &&
              paragraph.map((element,idx) => {
                return <Text style={styles.paragraf} key={idx}> {element} </Text>
              })
            }
          </ScrollView>
          {/* <Text>{ paragraf[1] }</Text> */}
        </View>
      
      }
    </View>
  )
}