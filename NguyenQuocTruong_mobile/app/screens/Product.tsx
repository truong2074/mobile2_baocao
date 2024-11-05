import { Link } from 'expo-router';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { fetchProducts } from './../api/product';

interface Product {
  id: number;
  name: string;
  category_id: string;
  description: string;
  image: string;
  price: number;
}

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]); // Khởi tạo Products là mảng rỗng
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchProducts();
        console.log(products); // Kiểm tra phản hồi API
        if (products) {
          setProducts(products); // Kiểm tra xem data.Products có phải là mảng không
        } else {
          console.error("Products data is not an array");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#FF4081" />;
  }

  return (
    <>
    <Text style={styles.title}>
        Sản Phẩm
      </Text>

      <View style={styles.productsContainer}>
        {products.map((product) => (
          <View key={product.id} style={styles.productCard}>
            <Link href="../productdetail">
            <Image
              source={{
                uri: `http://localhost/fashion-backend/public/images/products/${product.image}`,
              }}
              style={styles.productImage}
            ></Image>
            </Link>
            <Link href="../productdetail">
              <Text style={styles.productName}>
                {product.name}
              </Text>
            </Link>
            <TouchableOpacity style={styles.addButton}>
              <Text>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </>
  )
}

export default Product

const styles = StyleSheet.create({
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    elevation: 6,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
  },
  productImage: {
    height: 120,
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  }, title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
})