import React from "react"
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Fontisto from "react-native-vector-icons/Fontisto"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"

export const Tags = [
    {
        name:"Alimentação",
        icon:<Ionicons name="fast-food-outline" size={23}/>,
        color:"#66c2ff"
    },
    {
        name:"Assinaturas e Serviços",
        icon:<AntDesign name="customerservice" size={23}/>,
        color:"#ff1ac6"
    },
    {
        name:"Bares e Restaurantes",
        icon:<Ionicons name="restaurant-outline" size={23}/>,
        color:"#99ff99"
    },
    {
        name:"Casa",
        icon:<AntDesign name="home" size={23}/>,
        color:"#3385ff"
    },
    {
        name:"Compras",
        icon:<AntDesign name="gift" size={23}/>,
        color:"#ff3333"
    },
    {
        name:"Saúde",
        icon:<MaterialIcons name="medical-services" size={23}/>,
        color:"#99ffff"
    },
    {
        name:"Dívidas e Empréstimos",
        icon:<FontAwesome5 name="money-check" size={23}/>,
        color:"#009900"
    },
    {
        name:"Educação",
        icon:<Ionicons name="school-outline" size={23}/>,
        color:"#ffff1a"
    },
    {
        name:"Famílias e Filhos",
        icon:<Fontisto name="persons" size={23}/>,
        color:"#ff6633"
    },
    {
        name:"Investimentos",
        icon:<FontAwesome name="money" size={23}/>,
        color:"#00ff55"
    },
    {
        name:"Lazer e Hobbies",
        icon:<Ionicons name="bicycle-outline" size={23}/>,
        color:"orange"
    },
    {
        name:"Mercado",
        icon:<AntDesign name="shoppingcart" size={23}/>,
        color:"#ff8080"
    },
    {
        name:"Pets",
        icon:<MaterialIcons name="pets" size={23}/>,
        color:"#ffcc00"
    },
    {
        name:"Outros ",
        icon:<Ionicons name="list" size={23}/>,
        color:"#8c8c8c"
    },
]

export const receiveTags = [
    {
        name:"Salário",
        icon:<MaterialIcons name="attach-money" size={23}/>,
        color:"#1aff1a"
    },
    {
        name:"Investimentos",
        icon:<Entypo name="area-graph" size={23}/>,
        color:"#00b33c"
    },
    {
        name:"Empréstimos",
        icon:<FontAwesome5 name="hand-holding-usd" size={23}/>,
        color:"#336600"
    },
    {
        name:"Outros",
        icon:<Ionicons name="list" size={23}/>,
        color:"#8c8c8c"
    },
]

export const Types = [
    {
        name:"Todos",
        color:"black"
    },
    {
        name:"Receitas",
        color:"#2ECC71"
    },
    {
        name:"Despesas",
        color:"#C0392B"
    }
]