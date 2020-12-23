import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container:{
        height:300,
        width:340,
        backgroundColor:"white",
        padding:15,
        borderRadius:10,
    },
    title:{
        fontSize:17,
        textAlign:"center"
    },
    info:{
        flexDirection:"row",
        alignItems:"center",
        paddingTop:10,
        padding:5,
        justifyContent:"space-between"
    },
    containerInfo:{
        marginTop:15,
        width:320,
        alignItems:"center"
    },
    containerExpenses:{
        paddingTop:10,
        width:310
    },
    titleTag:{
        paddingLeft:10,
        fontSize:14
    },
    percentage:{
        color:"rgba(0, 0, 0, 0.4)",
        paddingRight:8
    },
    containerTags:{
        flexDirection:"row",
        alignItems:"center"
    },
    containerValues:{
        flexDirection:"row",
        alignItems:"center"
    }
})

export default styles