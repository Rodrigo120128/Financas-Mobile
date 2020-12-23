import React,{useEffect,useState} from "react"
import {View,Text,ScrollView} from "react-native"
import styles from "./styles"
import {Tags} from "../../context/Tags"
import {PieChart} from "react-native-svg-charts"

const ExpensesPerCategory = ({transactionsPerMonth}) => {
    const [expenses,setExpenses] = useState([])
    const [totalExpenses,setTotalExpenses] = useState("")
    const [pieData,setPieData]  = useState([])
    let TotalExpenses = 0

    useEffect(() => {
        const Expenses = transactionsPerMonth.filter((item) => item.type === "Despesa")
        const expensesPerCategoryArray = Expenses.map((item) => [item.tag,item.value])
        const expensesPerCategoryObject = Object.fromEntries(expensesPerCategoryArray)
        Object.keys(expensesPerCategoryObject).forEach((item) => {
            let value = Expenses.map((element) => {
                const val = element.value.replace(",",".")
                if(element.tag === item) return val
            })
            value = value.filter((item) => item)
            value = value.reduce((acc,val) => Number(acc)+Number(val))
            expensesPerCategoryObject[item]=value
        })
        const data = Object.keys(expensesPerCategoryObject).map((item) => Number(expensesPerCategoryObject[item]))

        const PieData = data.map((value,index) => ({
            value,
            svg:{
                fill:Tags[index].color
            },
            key:`${index}-${value}`
        }))

        Object.keys(expensesPerCategoryObject).forEach((item) => {
            TotalExpenses += Number(expensesPerCategoryObject[item])
        })

        setTotalExpenses(TotalExpenses)
        setPieData(PieData)
        setExpenses(expensesPerCategoryObject)
    },[transactionsPerMonth])

    return(
        <View style={styles.container}> 
            <ScrollView>
                <Text style={styles.title}>Despesas por Categoria</Text>

                <View style={styles.containerInfo}>
                    <View>
                        <PieChart style={{ height: 190 ,width:190}} data={pieData} />
                    </View>
                    <View style={styles.containerExpenses}>
                        {
                            Object.keys(expenses).map((item,index) => {
                                const floatPercentage = (expenses[item]/totalExpenses)*100
                                const percentage = floatPercentage.toFixed(1)+"%"
                                
                                return(
                                    <View style={styles.info} key={index}>
                                        <View style={styles.containerTags}>
                                            <View style={{
                                                width:9,
                                                height:9,
                                                backgroundColor:Tags[index].color,
                                                borderRadius:9
                                            }}/>
                                            <Text style={styles.titleTag}>{item} : </Text>  
                                        </View>
                                        <View style={styles.containerValues}>
                                            
                                            <Text style={styles.percentage}> {percentage} </Text>
                                            <Text>R$ {expenses[item]}</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ExpensesPerCategory