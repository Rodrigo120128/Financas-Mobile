import React,{useContext} from "react"
import {View} from "react-native"
import styles from "./styles"
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import DatePicker from "react-native-datepicker"
import {MonthSelectedContext} from "../../context/MonthSelected"

const SelectMonth = () => {
    const {month,setMonth} = useContext(MonthSelectedContext)

    return(
        <View style={styles.header}>
            <View style={styles.container}>
                <DatePicker 
                    style={{width:80}}
                    customStyles={{
                        dateInput:{
                            borderWidth:0
                        }
                    }}
                    showIcon={false}
                    format="MM/YYYY"
                    date={month}
                    onDateChange={(value) => setMonth(value)}
                />
                <Icon style={{paddingTop:5}} name="arrow-down" size={18}/>
            </View>
        </View>
    )
}

export default SelectMonth