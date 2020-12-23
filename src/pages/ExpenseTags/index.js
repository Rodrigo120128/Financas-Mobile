import React from "react"
import {TouchableOpacity,View,Text,ScrollView} from "react-native"
import {Tags} from "../../context/Tags"
import styles from "./styles"

const ExpenseTags = ({navigation,route}) => {
 
    return(
        <ScrollView>
            {
                Tags.map((item,index) => {
                    return(
                        <View key={index}>
                            <TouchableOpacity style={styles.containerTag} onPress={() => {
                                    navigation.navigate(route.params.goBack,{tagName:item.name})
                                }}>
                                <View style={{
                                    backgroundColor:item.color,
                                    padding:5,
                                    borderRadius:20
                                    }}>{item.icon}</View>
                                <Text style={styles.text}>{item.name}</Text>
                            </TouchableOpacity>
                            <View style={styles.hr}/>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

export default ExpenseTags