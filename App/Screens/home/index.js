import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { routes } from '../../Navigation/routes';

export const Home=({navigation})=>{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={()=>navigation.navigate(routes.LOGIN)}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
