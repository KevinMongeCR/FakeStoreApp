import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { getProducts } from '../services/api';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<any>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.log('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
     renderItem={({ item }) => (
  <TouchableOpacity
    style={{ width: '48%', margin: '1%' }}
    onPress={() =>
      navigation.navigate('ProductDetail', { product: item })
    }
  >
    <View
      style={{
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
      }}
    >
      <Text style={{ fontWeight: 'bold' }} numberOfLines={2}>
        {item.title}
      </Text>
      <Text>${item.price}</Text>
    </View>
  </TouchableOpacity>
)}
    />
  );
};

export default Products;