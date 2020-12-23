import React, { useCallback, useEffect , useState} from "react"
import {Text,View} from "react-native"
import {useFocusEffect} from "@react-navigation/native"
import styles from "./styles"

const DashboardHome = ({transactionsPerMonth,transactions}) => {
    const [data,setData] = useState({})

    useEffect(() => {
        let receives = 0
        let expenses = 0
        transactions.forEach((item) => {
            let accumulattor = item.value.replace(",",".")
            if(item.type === "Receita") receives+=Number(accumulattor)
            if(item.type === "Despesa") expenses+=Number(accumulattor)
        })
        const totalMoney = Math.round((receives-expenses)*100)/100

        receives=0,expenses=0
        transactionsPerMonth.forEach((item) => {
            let accumulattor = item.value.replace(",",".")
            if(item.type === "Receita") receives+=Number(accumulattor)
            if(item.type === "Despesa") expenses+=Number(accumulattor)
        })
        setData({totalMoney:totalMoney,receives:receives,expenses:expenses})

    },[transactions,transactionsPerMonth])

    return(
        <View style={styles.container}>
            <View style={styles.containerSaldo}>
                <Text style={{fontSize:16}}>Saldo Total</Text>
                <Text style={{fontSize:20}}>R$ {data.totalMoney}</Text>
            </View>
            <View style={styles.containerTransactions}>
                <View>
                    <Text style={styles.textType}>Receitas</Text>
                    <Text style={styles.textReceive}>R$ {data.receives}</Text>
                </View>
                <View>
                    <Text style={styles.textType}>Despesas</Text>
                    <Text style={styles.textExpense}>R$ {data.expenses}</Text>
                </View>
            </View>
        </View>
    )
}

export default DashboardHome