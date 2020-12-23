import React from "react"
import {TouchableOpacity,Text} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import styles from "./styles"

const AddTransactionBtn = ({form,type,navigation}) => {
    
    const handleSubmit = async () => {

        const addZero = (i) => {
            if(i<10) i="0"+i
            return i
        }
    
        const newDate = new Date()
        const h = addZero(newDate.getHours())
        const m = addZero(newDate.getMinutes())
        const s = addZero(newDate.getSeconds())
        const hour = (h+":"+m+":"+s)

        const today = () => {
            const d = new Date()
            const day = addZero(d.getDate())
            const month = addZero(d.getMonth()+1)
            const year = addZero(d.getFullYear())
            const date =  day+"/"+month+"/"+year
            
            return date
        }

        const date = form.date ? form.date : today()

        const transaction = {
            name:"Transação",
            type:type,
            value:form.value,
            tag:form.tag,
            description:form.description,
            date: date + " " + hour
        }

        let transactions = await AsyncStorage.getItem("@transactions")
        transactions =  transactions ? JSON.parse(transactions) : []
        transactions.push(transaction)
        console.log(transactions)
        AsyncStorage.setItem("@transactions",JSON.stringify(transactions))

        navigation.navigate("Principal")
    }

    return(
        <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
            <Text style={styles.icon}>✓</Text>
        </TouchableOpacity>
    )
}

export default AddTransactionBtn