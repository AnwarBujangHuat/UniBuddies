import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { routes } from '../../Navigation/routes';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../Themes';

export const HomeComponents=props=>{
  const {userInfo}=props
  return(
    <SafeAreaView style={styles.screen}>


    </SafeAreaView>
  )
}
const styles = EStyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backGroundColor
  },
  header:{
    color: Colors.primaryColor,
    fontSize: 16,
  }
});
