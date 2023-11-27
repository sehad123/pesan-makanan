/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
// import PreparingOrderScreen from './screens/PreparingOrderScreen';
import PreparingOrderScreen from './screens/PreparingOderScreen';
import DeliveryScreen from './screens/DeliveryScreen';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen} />
        <Stack.Screen name="Delivery" component={DeliveryScreen} />
        {/* <Stack.Screen
          name="Cart"
          options={{presentation: 'modal', headerShown: false}}
          component={CartScreen}
        />
        <Stack.Screen
          name="PreparingOrder"
          options={{presentation: 'fullScreenModal', headerShown: false}}
          component={PreparingOrderScreen}
        />
        <Stack.Screen
          name="Delivery"
          options={{presentation: 'fullScreenModal', headerShown: false}}
          component={DeliveryScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
