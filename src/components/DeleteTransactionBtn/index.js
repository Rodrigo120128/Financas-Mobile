import React from "react"
import {TouchableOpacity} from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import AsyncStorage from "@react-native-async-storage/async-storage"

const DeleteTransactionBtn = ({form,navigation}) => {

    const handlePress = async ()  => {
        const transactions = JSON.parse(await AsyncStorage.getItem("@transactions"))
        const updatedTransactions = transactions.filter((item) => item.date != form.oldDate)
        
        AsyncStorage.setItem("@transactions",JSON.stringify(updatedTransactions))
        navigation.navigate("Principal")
    }

    return(
        <TouchableOpacity onPress={handlePress}>
            <FontAwesome name="trash-o" color="#e6e6e6" size={30}/>
        </TouchableOpacity>
    )
}

export default DeleteTransactionBtn