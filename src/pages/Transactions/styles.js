import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#5552E8",
        justifyContent:"space-around",
        alignItems:"center"
    },
    filterContainer:{
        width:360,
        height:85,
        borderRadius:5,
        backgroundColor:"white",
        alignItems:"center",
        paddingTop:8,
        paddingBottom:12,
        justifyContent:"space-between"
    },
    filterTitle:{
        fontSize:16,
        textAlign:"center"
    },
    filter:{
        width:320,
        justifyContent:"space-between",
        flexDirection:"row"
    },
    point:{
        width:8,
        height:8,
        borderRadius:8,
        backgroundColor:"#375544"
    },
    filterType:{
        flexDirection:"row",
        alignItems:"center"
    }
})

export default styles