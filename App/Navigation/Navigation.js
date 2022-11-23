import {Login,Home} from '../Screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from './routes';
const Stack = createNativeStackNavigator();
export const Navigator=()=>{
  return(
    <Stack.Navigator
      initialRouteName={routes.LOGIN}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name={routes.HOME} component={Home} />
      <Stack.Screen name={routes.LOGIN} component={Login} />
    </Stack.Navigator>
  )
}
