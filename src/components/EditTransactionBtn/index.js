import React from "react"
import {TouchableOpacity,Text} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import styles from "../AddTransactionBtn/styles" 

const EditTransactionBtn = ({form,navigation}) => {

    const handleSubmit = async () => {
        const transactions = JSON.parse(await AsyncStorage.getItem("@transactions"))
        
        transactions.forEach((item,index,array) => {
            if(item.date === form.oldDate) 
                array[index]={
                    date:form.date,
                    name:"Transação",
                    tag:form.tag,
                    type:item.type,
                    value:form.value,
                    description:form.description
                }
        })

        AsyncStorage.setItem("@transactions",JSON.stringify(transactions))
        navigation.navigate("Principal")
    }

    return(
        <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
            <Text style={styles.icon}>✓</Text>
        </TouchableOpacity>
    )
}

export default  EditTransactionBtn