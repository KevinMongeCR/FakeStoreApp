import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetail from './src/views/ProductDetail';

import Login from './src/views/Login';
import Products from './src/views/Products';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;