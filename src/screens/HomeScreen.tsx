import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Button,
  Alert,
} from 'react-native';
import MyView from '../components/MyView';
import MyText from '../components/MyText';
import Search from '../components/Search';
import Category from '../components/Category';
import firestore from '@react-native-firebase/firestore';
import FoodCard from '../components/FoodCard';

function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [categories, setCategories] = useState([]); // Initial empty array of users
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    //import function collection() and onSnapshot()
    const subscriber = firestore()
      .collection('categories')
      .onSnapshot(querySnapshot => {
        const categories = [];

        querySnapshot.forEach(documentSnapshot => {
          categories.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setCategories(categories);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  useEffect(() => {
    const subscriber = firestore()
      .collection('foods')
      .onSnapshot(querySnapshot => {
        const foods = [];

        querySnapshot.forEach(documentSnapshot => {
          foods.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setFoods(foods);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <MyView style={styles.con}>
      <MyText
        style={{ marginTop: 57, marginBottom: 7, marginLeft: 21, fontSize: 19 }}
      >
        Choose the
      </MyText>
      <MyText boldy style={styles.text}>
        Food You Love
      </MyText>
      <Search />
      <MyText style={styles.text}>Catogries</MyText>

      <Button
        title="Add Category Or Foods"
        onPress={() => navigation.navigate('AddFoodOrCategory')}
      />

      <View style={{ height: 150 }}>
        <FlatList
          horizontal
          data={categories}
          renderItem={({ item }) => (
            <Category
              title={item.title}
              itemKey={item.key}
              image={{ uri: item.image_url }}
            />
          )}
        />
      </View>
      <MyText style={styles.text}>Main Dishes</MyText>

      <FlatList
        horizontal
        data={foods}
        renderItem={({ item }) => (
          <FoodCard
            image={item.image_url}
            title={item.title}
            price={item.price}
            itemKey={item.key}
          />
        )}
      />
    </MyView>
  );
}

const styles = StyleSheet.create({
  con: {
    backgroundColor: '#f7f6ff',
  },
  text: {
    marginLeft: 21,
    fontSize: 19,
    marginBottom: 13,
  },
});
export default HomeScreen;
