import MyButton from '@components/MyButton';
import MyTextInput from '@components/MyTextInput';
import SocialMedia from '@components/SocialMedia';
import React, { useEffect, useState } from 'react';
import {
  View,
  Platform,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Alert,
  Button,
} from 'react-native';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
} from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '573784872365-tcb0mhopm065eb88o8uj680otjkn2j8m.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      // Get the users ID token
      const signInResult = await GoogleSignin.signIn();

      // Try the new style of google-sign in result, from v13+ of that module
      const idToken = signInResult.data?.idToken;

      console.log(signInResult.data?.user);
      Alert.alert('Success login');

      if (!idToken) {
        throw new Error('No ID token found');
      }

      // Create a Google credential with the token
      const googleCredential = GoogleAuthProvider.credential(
        signInResult.data?.idToken,
      );

      // Sign-in the user with the credential
      return signInWithCredential(getAuth(), googleCredential);
    } catch (error) {
      console.log(error);
    }
  }

  const loginWithEmailAndPassword = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Enter email and password');
      return;
    }

    signInWithEmailAndPassword(getAuth(), email, password)
      .then(res => {
        console.log(res);
        Alert.alert('Logged In');
        navigation.navigate('Home');
      })
      .catch(err => {
        const code = err?.code ?? 'unknown';
        const message = err?.message ?? 'Unknown error';
        Alert.alert(code, message);
      });
  };

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
          <MyTextInput
            placeholder="Enter E-mail or User Name"
            value={email}
            onChangeText={setEmail}
          />
          <MyTextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Text style={styles.textDontHave}>Dont have an account yet?</Text>
          <MyButton title={'Login'} onPress={loginWithEmailAndPassword} />

          <Button title="Login with google" onPress={onGoogleButtonPress} />

          <Text style={styles.text}>OR</Text>
          <SocialMedia />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

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
