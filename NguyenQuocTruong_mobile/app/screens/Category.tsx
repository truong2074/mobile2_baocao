import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { ThemedText } from '@/components/ThemedText';
import { fetchCategories } from "../api/category";


interface Category {
  id: number;
  name: string;
  description: string;
}

const Category = () => {
  const [categories, setCategories] = useState<Category[]>([]); // Khởi tạo Products là mảng rỗng
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchCategories();
        console.log(products); // Kiểm tra phản hồi API
        if (products) {
          setCategories(products); // Kiểm tra xem data.Products có phải là mảng không
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

  const handleCategoryPress = (categoryName: string) => {
    console.log(`Selected category: ${categoryName}`);
  };

  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true} // Change to true for testing visibility
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryCard}
            onPress={() => handleCategoryPress(category.name)}
          >
            <ThemedText type="title" style={styles.categoryText}>
              {category.name}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoriesContainer: {
    paddingVertical: 8,
  },
  categoryCard: {
    width: 100,
    backgroundColor: '#4050f2',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginRight: 16,
  },
  categoryText: {
    fontSize: 14,
    color: '#fff',
    textAlign: "center",
  },
});