import { ImageBackground, Platform, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import MyTextInput from '@components/MyTextInput';
import MyButton from '@components/MyButton';
import SocialMedia from '@components/SocialMedia';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/img/background.png')}
        style={styles.imageBackground}
      >
        <Image
          source={require('../../assets/img/food/food.png')}
          style={styles.foodImage}
        />

        <Text style={styles.title}>Fatmore</Text>

        <View style={styles.inputsContainer}>
          <MyTextInput placeholder="Enter E-mail or User Name" />
          <MyTextInput placeholder="Password" secureTextEntry />
          <MyTextInput placeholder="Confirm Password" secureTextEntry />

          <MyButton title={'Sign Up'} />

          <Text style={styles.text}>OR</Text>
          <SocialMedia />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  foodImage: {
    height: 50,
    width: 90,
    resizeMode: 'stretch',
    position: 'absolute',
    right: 20,
    top: Platform.OS === 'android' ? 20 : 60,
  },
  title: {
    fontSize: 40,
    color: '#ffffff',
    marginTop: Platform.OS === 'android' ? 60 : 110,
    fontFamily: 'Audiowide-Regular',
  },
  inputsContainer: {
    height: 450,
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },
  textDontHave: {
    alignSelf: 'flex-end',
    marginRight: 10,
    color: '#000000',
    marginBottom: 15,
    fontFamily: 'NovaFlat-Regular',
  },
  text: {
    fontSize: 20,
    color: 'gray',
    marginTop: 20,
    fontFamily: 'Audiowide-Regular',
  },
});
