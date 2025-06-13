
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Register from './screens/Register'
import Login  from './screens/Login'
import SplashScreen from './SplashScreen'
import CreatePost from './screens/CreatePost'
import { RootStackParamList } from './types/RootStackParamList'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
  return(
      <Stack.Navigator initialRouteName='SplashScreen' >
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="CreatePost" component={CreatePost} options={{presentation: 'modal'}}/>
      </Stack.Navigator>
  )
}