
import { View, Text, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Button } from 'react-native';
import React, { useContext, useState} from 'react';
import { CartContext } from '../context/CartContext';


const ProductDetail = () => {
  const route = useRoute<any>();
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Image
        source={{ uri: product.image }}
        style={{ width: '100%', height: 200, resizeMode: 'contain' }}
      />

      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
        {product.title}
      </Text>

      <Text style={{ fontSize: 18, marginVertical: 10 }}>
        ${product.price}
      </Text>

      <Text>{product.description}</Text>

      <Text style={{ marginTop: 10 }}>
        Category: {product.category}
      </Text>

      <Text>
        Rating: {product.rating?.rate} ({product.rating?.count} reviews)
      </Text>

      <Button
  title={added ? 'Added ✅' : 'Add to Cart'}
  onPress={() => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  }}
/>
    </ScrollView>
  );
};

export default ProductDetail;