import React,{useEffect, useState} from "react"
import {View,Text,TouchableOpacity} from "react-native"
import SelectMonth from "../../components/SelectMonth"
import styles from "./styles"
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import ShowTransactions from "../../components/ShowTransactions"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Transactions = ({navigation,route}) => {
    const [filter,setFilter] = useState({
        type:"Todos",
        tag:"Todos"
    })
    const [transactions,setTransactions] = useState([])

    useEffect(() => {
        if(route.params?.type){
            if(route.params?.type==="Todos") setFilter({tag:"Todos",type:"Todos"})
            else setFilter({...filter,type:route.params?.type})
        }
    },[route.params?.type])
    
    useEffect(() => {
        if(route.params?.type) setFilter({...filter,tag:route.params?.tagName})
    },[route.params?.tagName])

    useEffect(() => {
        const getTransactions = async() => {
            const jsonData = await AsyncStorage.getItem("@transactions")
            let data = jsonData ? JSON.parse(jsonData) : []
            
            if(filter.type==="Todos") setTransactions(data)
            else{
                data = data.filter((item) => {
                    if(item.type+"s"===filter.type) return true
                })
                if(filter.tag==="Todos") setTransactions(data)
                else{
                    data = data.filter((item) => {
                        if(item.tag === filter.tag) return true
                    })
                    setTransactions(data)
                }
            }   
        }

        getTransactions()

    },[filter])

    return(
        <>
            <SelectMonth/>

            <View style={styles.container}>
                <View style={styles.filterContainer}>
                    <Text style={styles.filterTitle}>Filtrar por</Text>
                    <View style={styles.filter}>
                        <TouchableOpacity 
                            style={styles.filterType}
                            onPress={() => {navigation.navigate("FilterTypes")}}
                        >
                            <View style={styles.point}/>
                            <Text style={{paddingLeft:7}}>{filter.type}</Text>
                            <Icon style={{paddingLeft:7}} name="arrow-down" size={16}/>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.filterType}
                            onPress={() => {
                                if(filter.type === "Despesas") navigation.navigate("ExpenseTags",{goBack:"Transações"})
                                if(filter.type === "Receitas") navigation.navigate("ReceiveTags",{goBack:"Transações"})
                            }}
                        >
                            <View style={styles.point}/>
                            <Text style={{paddingLeft:7}}>{filter.tag}</Text>
                            <Icon style={{paddingLeft:7}} name="arrow-down" size={16}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <ShowTransactions navigation={navigation} transactions={transactions}/>
            </View>
        </>
    )
}

export default Transactions