import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ProductDetail = () => {
  const route = useRoute<any>();
  const { product } = route.params;

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
    </ScrollView>
  );
};

export default ProductDetail;