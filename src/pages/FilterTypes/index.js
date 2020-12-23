import React from "react"
import {Text,View,TouchableOpacity} from "react-native"
import {Types} from "../../context/Tags"
import styles from "../ExpenseTags/styles"

const FilterTypes = ({navigation}) => {
    return(
        <View>
            {
                Types.map((item,index) => {
                    return(
                        <TouchableOpacity key={index} onPress={() => {navigation.navigate("Transações",{type:item.name})}}>
                            <View style={styles.containerTag}>
                                <View style={{
                                    width:8,
                                    height:8,
                                    borderRadius:8,
                                    backgroundColor:"black"
                                }}/>
                                <Text style={{
                                    fontSize:15,
                                    paddingLeft:15,
                                    fontFamily:"Lato-Regular",
                                    color:item.color
                                }}>{item.name}</Text>
                            </View>
                            <View style={styles.hr}/>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

export default FilterTypes