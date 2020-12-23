import React, { useContext, useEffect ,useState} from "react"
import {View,Text,ScrollView,TouchableOpacity} from "react-native"
import styles from "./styles"
import {MonthSelectedContext} from "../../context/MonthSelected"
import {Tags,receiveTags} from "../../context/Tags"

const ShowTransactions = ({transactions,navigation}) => {
    const [dates,setDates] = useState([])
    const {month} = useContext(MonthSelectedContext)
    let numberMonth = ""

    useEffect(() => {
        let transactionsDates = transactions.map((item) => item.date.substr(0,10))
        transactionsDates = [...new Set(transactionsDates)]
        const formatDatesToIso = transactionsDates.map((item) => {
            const splitDate = item.split("/")
            const correctDate = splitDate[1]+"/"+splitDate[0]+"/"+splitDate[2]
            return correctDate
        })
        const miliSecondsDate = formatDatesToIso.map((item) => Date.parse(item))
        const sortMiliSecondsDate = miliSecondsDate.sort((a,b) => a-b)
        const correctDate = sortMiliSecondsDate.reverse().map((item) => new Date(item))
        const dateEnToBr = correctDate.map((item) => {
            const m = Number(item.getMonth()+1) < 10 ? "0"+Number(item.getMonth()+1) : Number(item.getMonth()+1)
            const d = item.getDate() < 10 ? "0"+item.getDate() : item.getDate()
            return d+"/"+m+"/"+item.getFullYear()
        })
        if(!month){
            numberMonth = new Date().getMonth()+1+"/"+new Date().getFullYear()
        }else{
            numberMonth = month
        }

        const filterPerMonth = dateEnToBr.filter((item) => {
            if(item.substr(3) === numberMonth) return true
        })
        setDates(filterPerMonth)

    },[transactions,month])


    const searchReceiveIcons = (tag) => {
        let icon = ""
        receiveTags.forEach((item) => {
            if(item.name === tag) 
                icon = <View style={{backgroundColor:item.color,padding:5,borderRadius:20}}>{item.icon}</View>
        }) 
        return icon
    }

    const searchExpenseIcons = (tag) => {
        let icon = ""
        Tags.forEach((item) => {
            if(item.name === tag) 
                icon = <View style={{backgroundColor:item.color,padding:5,borderRadius:20}}>{item.icon}</View>
        }) 
        return icon
    }

    const formatValueTransaction = (value) => {
        if(value.substr(-3,1) != "." && value.substr(-3,1) != ",") value = value + ",00"
        return value
    }       

    return(
        <View style={styles.container}>
            <ScrollView>
                {
                    dates.map((date,id) => {
                        return(
                            <View key={id}>
                                <Text style={styles.date}>{date}</Text>
                                <View>
                                    {
                                        transactions.map((item,index) => {
                                            if(item.date.substr(0,10) === date)
                                                return(
                                                    <TouchableOpacity 
                                                        onPress={() => {
                                                            navigation.navigate("EditTransaction",{
                                                                type:item.type==="Receita"?"Receita":"Despesa",
                                                                data:item
                                                            })
                                                        }}
                                                        key={index} 
                                                        style={styles.containerTransaction}
                                                    >
                                                        <View style={styles.containerTag}>
                                                            {item.type === "Receita" ? 
                                                                searchReceiveIcons(item.tag) :
                                                                searchExpenseIcons(item.tag)    
                                                            }
                                                            <Text style={{paddingLeft:10}}>{item.tag}</Text>
                                                        </View>
                                                        <Text style={item.type==="Receita" ? {
                                                            color:"#2ECC71"
                                                        } : {
                                                            color:"#C0392B"
                                                        }}>R$ {formatValueTransaction(item.value)}</Text>
                                                    </TouchableOpacity>
                                                )
                                        })
                                    }
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default ShowTransactions