import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { ThemedText } from '@/components/ThemedText';
import { Link } from 'expo-router';
import { mdiCircleDouble } from '@mdi/js';
import Slider from "../screens/Slider";
import Product from "../screens/Product";
import Category from "../screens/Category";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width: windowWidth } = Dimensions.get('window');

const sliderImages = [
  { id: 1, source: require('@/assets/images/banner1.jpg') },
  { id: 2, source: require('@/assets/images/banner2.jpg') },
  { id: 3, source: require('@/assets/images/banner1.jpg') },
];

const products = [
  { id: 1, name: 'Ontario Lotus Helios Black Silver', image: require('@/assets/images/nhan1.jpg')},
  { id: 2, name: 'Free Helios earing Silver', image: require('@/assets/images/khuyen1.jpg') },
  { id: 3, name: 'Freedom Helios Silver', image: require('@/assets/images/daychuyen1.jpg') },
  { id: 4, name: 'Freedom Bracelet Helios Silver', image: require('@/assets/images/vtay1.jpg')},
];

const categories = [
  { id: 1, name: 'Nhẫn', icon: 'ring' },
  { id: 2, name: 'Khuyên tai', icon: 'ear-hearing' },
  { id: 3, name: 'Vòng cổ', icon: 'necklace' },
  { id: 4, name: 'Vòng tay', icon: 'circle-double' },
];

const HomeScreen: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCategoryPress = (categoryName: string) => {
    console.log(`Selected category: ${categoryName}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Tìm kiếm . . ." />
        <TouchableOpacity style={styles.searchButton}>
          <ThemedText type="default">Search</ThemedText>
        </TouchableOpacity>
        <Link href="../cart">
          <Icon name="cart" size={30} color="#fff" style={styles.cartIcon} />
        </Link>
      </View>
<Slider/>
      

      <Category/>

   <Product/>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: 'black',
    padding: 0,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',

  },
  logo: {
    width: windowWidth - 80,
    height: 100,
    resizeMode: 'contain',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
  cartIcon: {
    paddingLeft: 5,
    color:'black',
  },
  searchButton: {
    marginLeft: 8,
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderContainer: {
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
 
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
  },
  
});

export default HomeScreen;
