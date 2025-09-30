import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useRoute } from '@react-navigation/native';

const AddFoodOrCategory = ({ navigation }) => {
  const {params} = useRoute();
  console.log(params);

  const IS_EDIT = params?.isEdit;

  const [categoryName, setCategoryName] = useState('');
  const [categoryImgURL, setCategoryImgURL] = useState('');

  const [foodTitle, setFoodTitle] = useState(IS_EDIT ? params.title : '');
  const [foodImgURL, setFoodImgURL] = useState(IS_EDIT ? params.image : '');
  const [foodPrice, setFoodPrice] = useState(IS_EDIT? params.price.toString() : '');

  const addCategory = () => {
    firestore().collection('categories').add({
      title: categoryName,
      image_url: categoryImgURL,
    });

    navigation.goBack();
  };

  const addFood = () => {
    firestore()
      .collection('foods')
      .add({
        image_url: foodImgURL,
        price: +foodPrice,
        title: foodTitle,
      })
      .then(res => {
        Alert.alert('Food added');
        navigation.goBack();
      })
      .catch(err => {
        Alert.alert('Error Happen');
        console.log(err);
      });
  };

  const editFood = () => {
    firestore()
      .collection('foods')
      .doc(params?.itemKey)
      .update({
        image_url: foodImgURL,
        price: +foodPrice,
        title: foodTitle,
      })
      .then(res => {
        Alert.alert('Food updated');
        navigation.goBack();
      })
      .catch(err => {
        Alert.alert('Error Happen');
        console.log(err);
      });
  };

   

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <TextInput
        placeholder="Category Name"
        value={categoryName}
        onChangeText={setCategoryName}
      />
      <TextInput
        placeholder="Category Image URL"
        value={categoryImgURL}
        onChangeText={setCategoryImgURL}
      />
      <Button title="Add Category" onPress={addCategory} />

      <TextInput
        style={{marginTop: 50}}
        placeholder="Food Name"
        value={foodTitle}
        onChangeText={setFoodTitle}
      />
      <TextInput
        placeholder="Food Image URL"
        value={foodImgURL}
        onChangeText={setFoodImgURL}
      />
      <TextInput
        placeholder="Food price"
        value={foodPrice}
        onChangeText={setFoodPrice}
      />

      {
        IS_EDIT ? <Button title="Edit Food" onPress={editFood} /> : <Button title="Add Food" onPress={addFood} />
      }
      
    </View>
  );
};

export default AddFoodOrCategory;

const styles = StyleSheet.create({});
