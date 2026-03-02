import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { loginUser } from '../services/api';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();

  const handleLogin = async () => {
    try {
      const data = await loginUser(username, password);
      console.log('Login success:', data);
      Alert.alert('Success', 'Login successful');
      navigation.navigate('Products');
    } catch (error) {
      console.log('Login error:', error);
      Alert.alert('Error', 'Invalid username or password');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>Fake Store Login</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{
          borderWidth: 1,
          marginBottom: 10,
          padding: 8,
        }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={{
          borderWidth: 1,
          marginBottom: 10,
          padding: 8,
        }}
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;