import React, {useState,useCallback,useEffect} from "react"
import {View,Text,TextInput,TouchableOpacity,TouchableWithoutFeedback,ScrollView} from "react-native"  
import styles from "./styles"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import DatePicker from "react-native-datepicker"
import AddTransactionBtn from "../../components/AddTransactionBtn"
import FontAwesome from "react-native-vector-icons/FontAwesome"

const greenType = {
    name:"green",
    type:"Receita",
    backgroundColor:"#2ecc71",
    initialTag:"Salário",
    initialIcon:<FontAwesome5 name="money-bill-alt" size={18}/>
}

const redType = {
    name:"red",
    type:"Despesa",
    backgroundColor:"#c0392b",
    initialTag:"Alimentação",
    initialIcon:<Ionicons name="fast-food-outline" size={18}/>
}

const AddTransaction = ({navigation,route}) => {
    const [type,setType] = useState(greenType)
    const [form,setForm] = useState({
        value:"0,00",
        tag:"Selecione uma Tag"
    })

    useEffect(() => {
        if(route.params?.tagName) setForm({...form,tag:route.params?.tagName})
    },[route.params?.tagName])

    return(
        <>
            <View style={{
                backgroundColor:type.backgroundColor,
                alignItems:"center",
                paddingTop:10,
                height:145
            }}>
                <View style={styles.containerHeader}>
                    <TouchableOpacity onPress={() => {setType(greenType)}} style={{alignItems:"center"}}>
                        <Text style={styles.text}>Receitas</Text>
                        {type.name==="green" && <View style={styles.point}></View>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setType(redType)}}  style={{alignItems:"center"}}>
                        <Text style={styles.text}>Despesas</Text>
                        {type.name==="red" && <View style={styles.point}></View>}
                    </TouchableOpacity>
                </View>

                <View style={styles.containerInput}>
                    <TextInput
                        keyboardType="numeric"
                        onChangeText={(text) => {setForm({...form,value:text})}} 
                        style={styles.input} 
                        value={form.value} 
                        onFocus={() => {setForm({...form,value:""})}}
                    />
                </View>

            </View>

            <ScrollView style={styles.containerForm}>
                <View>
                    <Text style={styles.textType}>Categoria</Text>
                    <TouchableWithoutFeedback onPress={() => {
                            navigation.navigate(type.name==="green"?"ReceiveTags":"ExpenseTags",{goBack:"Adicionar Transação"})
                        }}>
                        <View style={styles.Tag}>
                            {type.initialIcon}
                            <Text style={{paddingLeft:15}}>{form.tag}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <View style={styles.hr}/>

                <View>
                    <Text style={styles.textType}>Descrição</Text>
                    <View>
                        <View style={styles.Tag}>
                            <FontAwesome name="pencil" size={23}/>     
                            <TextInput 
                                name="description" 
                                onChangeText={(text) => {setForm({...form,description:text})}} 
                                placeholder="Adicione a descrição" 
                                style={{paddingLeft:15}}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.hr}/>

                <View>
                    <Text style={styles.textType}>Data</Text>
                    <View>
                        <View style={styles.Tag}>
                            <AntDesign name="calendar" size={23}/>
                            <DatePicker
                                format="DD/MM/YYYY"
                                customStyles={{
                                    dateInput:{
                                        borderWidth:0
                                    }
                                }}
                                showIcon={false}
                                date={form.date}
                                onDateChange={(value) => {setForm({...form,date:value})}}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.hr}/>

                <View style={styles.containerBtn}>
                    <AddTransactionBtn 
                        navigation={navigation} 
                        form={form} 
                        type={type.name === "green" ? "Receita" : "Despesa"}
                    />
                </View>

            </ScrollView>
        </>
    )
}

export default AddTransaction