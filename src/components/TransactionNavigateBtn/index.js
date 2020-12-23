import React from "react"
import {View,Text} from "react-native"
import styles from "./styles"

const TransactionNavigateBtn = () => {
    return(
        <View style={styles.container}>
            <View style={styles.button}>
                <Text style={styles.text}>+</Text>
            </View>
        </View>
    )
}

export default TransactionNavigateBtn