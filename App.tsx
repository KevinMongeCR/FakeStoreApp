import React from 'react';
import { SafeAreaView } from 'react-native';
import Login from './src/views/Login';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Login />
    </SafeAreaView>
  );
};

export default App;