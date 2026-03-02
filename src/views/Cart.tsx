import React, { useContext } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>Cart</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>{item.title}</Text>
            <Text>Qty: {item.qty}</Text>
            <Text>Subtotal: ${item.price * item.qty}</Text>
            <Button
              title="Remove"
              onPress={() => removeFromCart(item.id)}
            />
          </View>
        )}
      />

      <Text style={{ fontSize: 18, marginTop: 10 }}>
        Total: ${total.toFixed(2)}
      </Text>

      <Button title="Clear Cart" onPress={clearCart} />
    </View>
  );
};

export default Cart;