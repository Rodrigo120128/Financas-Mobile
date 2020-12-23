import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container:{
        width:360,
        backgroundColor:"white",
        alignItems:"center",
        padding:15,
        borderRadius:10
    },
    containerSaldo:{
        width:130,
        alignItems:"center",
        paddingBottom:20
    },
    containerTransactions:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:260,
        paddingBottom:10
    },
    textType:{
        textAlign:"center"
    },
    textReceive:{
        fontSize:18,
        color:"#2ECC71"
    },
    textExpense:{
        fontSize:18,
        color:"#C0392B"
    }
})

export default styles