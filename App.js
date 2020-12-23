import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import TabNavigator from "./src/components/TabNavigator"
import {MonthSelectedProvider} from "./src/context/MonthSelected"
import ExpenseTags from "./src/pages/ExpenseTags"
import ReceiveTags from "./src/pages/ReceiveTags"
import FilterTypes from "./src/pages/FilterTypes"
import EditTransaction from "./src/pages/EditTransaction"

const Stack = createStackNavigator()

const App = () => {
  return (
    <>
      <MonthSelectedProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Home" component={TabNavigator}/>
            <Stack.Screen options={{headerShown: false}} name="ExpenseTags" component={ExpenseTags}/>
            <Stack.Screen options={{headerShown: false}} name="ReceiveTags" component={ReceiveTags}/>
            <Stack.Screen options={{headerShown: false}} name="FilterTypes" component={FilterTypes}/>
            <Stack.Screen options={{headerShown: false}} name="EditTransaction" component={EditTransaction}/>
          </Stack.Navigator>
        </NavigationContainer>
      </MonthSelectedProvider>
    </>
  )
}

export default App;
