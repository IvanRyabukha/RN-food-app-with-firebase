import '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import MyStack from '@navigation/MyStack';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;
