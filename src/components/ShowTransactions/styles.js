import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        width:350,
        height:420,
        padding:20,
        borderRadius:5
    },
    date:{
        fontSize:17,
        paddingBottom:5,
        paddingTop:10
    },
    containerTransaction:{
        flexDirection:"row",
        paddingTop:5,
        paddingBottom:10,
        justifyContent:"space-between",
        alignItems:"center"
    },
    containerTag:{
        flexDirection:"row",
        alignItems:"center"
    }
})

export default styles