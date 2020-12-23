import React,{useEffect,useContext, useState} from "react"
import {View} from "react-native"
import SelectMonth from "../../components/SelectMonth"
import AsyncStorage from "@react-native-async-storage/async-storage"
import styles from "./styles"
import {MonthSelectedContext} from "../../context/MonthSelected"
import DashboardHome from "../../components/DashboardHome"
import ExpensesPerCategory from "../../components/ExpensesPerCategory"

const Home = () => {
    const {month} = useContext(MonthSelectedContext)
    const [transactions,setTransactions] = useState([])
    const [allTransactions,setAllTransactions] = useState([])

    useEffect(() => {
        const getTransactions = async () => {
            const jsonTransactions = await AsyncStorage.getItem("@transactions")
            const Transactions = jsonTransactions ? JSON.parse(jsonTransactions) : []
            let numberMonth = ""
            if(!month) numberMonth = new Date().getMonth()+1+"/"+new Date().getFullYear()
            else{numberMonth = month}
            
            const filterPerMonth = Transactions.filter((item) => {
                if(item.date.substr(3,7) === numberMonth) return true
            })
    
            const transformMonthToMiliSeconds = Date.parse(numberMonth.substr(0,3)+"01/"+numberMonth.substr(3,4))

            const correctDateTransactions = Transactions.filter((item) => {
                const substrDate = item.date.substr(3,7) 
                const firstDayOfMonth = "01/"+substrDate
                const splitDate = firstDayOfMonth.split("/")
                const correctDate = Date.parse(splitDate[1]+"/"+splitDate[0]+"/"+splitDate[2])
                if(correctDate <= transformMonthToMiliSeconds) return true
            })
            setTransactions(filterPerMonth)
            setAllTransactions(correctDateTransactions)
        }
        getTransactions()
    },[month])

    return(
        <>
            <SelectMonth/>
            <View style={styles.container}>
                <DashboardHome transactions={allTransactions} transactionsPerMonth={transactions}/>
                <ExpensesPerCategory transactionsPerMonth={transactions}/>
            </View>
        </>
    )
}

export default Home