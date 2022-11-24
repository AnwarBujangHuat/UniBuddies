import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login,Home} from '../Screens'
import { routes } from './routes';

const Tab = createBottomTabNavigator();
const TabNavigator=()=>(
  <Tab.Navigator
    screenOptions={{headerShown:false}}>
    <Tab.Screen name={routes.HOME} component={Home} />
  </Tab.Navigator>
)

export  default TabNavigator
