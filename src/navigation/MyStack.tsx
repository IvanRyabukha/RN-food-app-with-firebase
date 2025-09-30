import { createStackNavigator } from '@react-navigation/stack';
import AddFoodOrCategory from '@screens/AddFoodOrCategory';
import HomeScreen from '@screens/HomeScreen';
import LoginScreen from '@screens/LoginScreen';
import SignUpScreen from '@screens/SignUpScreen';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddFoodOrCategory" component={AddFoodOrCategory} />
    </Stack.Navigator>
  );
}
