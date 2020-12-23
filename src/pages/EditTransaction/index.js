import React,{useEffect, useState} from "react"
import {View,Text,TouchableWithoutFeedback,TextInput,ScrollView} from "react-native"
import styles from "../AddTransaction/styles"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import DatePicker from "react-native-datepicker"
import EditTransactionBtn from "../../components/EditTransactionBtn"
import DeleteTransactionBtn from "../../components/DeleteTransactionBtn"

const EditTransaction = ({route,navigation}) => {
    const [form,setForm] = useState({
        value:route.params.data.value,
        tag:route.params.data.tag,
        description:route.params.data.description,
        date:route.params.data.date,
        oldDate:route.params.data.date
    })

    useEffect(() => {
        if(route.params?.tagName) setForm({...form,tag:route.params?.tagName})
    },[route.params?.tagName])
    
    return(
        <>
            <View style={{
                backgroundColor:route.params.type==="Receita"?"#2ECC71":"#C0392B",
                alignItems:"flex-end",
                paddingTop:10,
                height:145
            }}>
                <View style={{
                    width:260,
                    flexDirection:"row",
                    justifyContent:"space-between",
                    paddingRight:15
                }}>
                    <Text style={{color:"white",fontSize:16}}>Editar {
                        route.params.type==="Receita"?"Receita":"Despesa"
                    }</Text>
                    <DeleteTransactionBtn navigation={navigation} form={form}/>
                </View>

                <View style={styles.containerInput}>
                    <TextInput
                        value={form.value}
                        onChangeText={(text) => {setForm({...form,value:text})}} 
                        keyboardType="numeric"
                        style={styles.input} 
                        onFocus={() => {setForm({...form,value:""})}}
                    />
                </View>

            </View>

            <ScrollView style={styles.containerForm}>
                <View>
                    <Text style={styles.textType}>Categoria</Text>
                    <TouchableWithoutFeedback onPress={() => {
                            navigation.navigate(route.params.type==="Receita"?"ReceiveTags":"ExpenseTags",
                            {goBack:"EditTransaction"})
                        }}>
                        <View style={styles.Tag}>
                            {route.params.type==="Receita" ?
                             <FontAwesome5 name="money-bill-alt" size={18}/> : 
                             <Ionicons name="fast-food-outline" size={18}/>
                             }
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
                                value={form.description}
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
                    <EditTransactionBtn form={form} navigation={navigation}/>
                </View>

            </ScrollView>
        </>
    )
}

export default EditTransaction