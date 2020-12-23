import React from "react"
import {View,Text,TouchableOpacity,ScrollView} from "react-native"
import {receiveTags} from "../../context/Tags"
import styles from "../ExpenseTags/styles"

const ReceiveTags = ({navigation,route}) => {

    return(
        <ScrollView>
            {
                receiveTags.map((item,index) => {
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

export default ReceiveTags