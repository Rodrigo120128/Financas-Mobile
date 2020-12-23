import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Home from "../../pages/Home"
import Transactions from "../../pages/Transactions"
import TransactionNavigateBtn from "../TransactionNavigateBtn"
import Icon from 'react-native-vector-icons/FontAwesome'
import AddTransaction from "../../pages/AddTransaction"

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return(
        <Tab.Navigator>

            <Tab.Screen 
                options={{
                    tabBarIcon:({color,size}) => (
                        <Icon name="home" size={28}/>
                    ),
                    tabBarLabel:() => {return null}
                }}
                name="Principal"
                component={Home}
            />

            <Tab.Screen 
                options={{
                    tabBarLabel:() => {return null},
                    tabBarIcon:() => {return <TransactionNavigateBtn/>}
                }}
                name="Adicionar Transação"
                component={AddTransaction}
            />

            <Tab.Screen 
                options={{
                    tabBarIcon:({color,size}) => (
                        <Icon name="list-alt" size={28}/>
                    ),
                    tabBarLabel:() => {return null}
                }}
                name="Transações"
                component={Transactions}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator