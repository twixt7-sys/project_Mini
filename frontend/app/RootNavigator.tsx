
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/homescreen'
import RegisterScreen from './screens/RegisterScreen'
import Login from './screens/Login'
import SplashScreen from './SplashScreen'

const Stack = createNativeStackNavigator()

export default function RootNavigator() {
  return(
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
  )
}