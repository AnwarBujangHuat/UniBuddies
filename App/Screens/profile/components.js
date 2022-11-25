import {
  SafeAreaView,
  Text,
  StyleSheet,

  TouchableOpacity,
  View
} from 'react-native';
import { routes } from '../../Navigation/routes';
import { Colors } from '../../Colors';

export const ProfileComponents=props=>{
  const {userInfo}=props
  return(
    <SafeAreaView style={styles.screen}>


    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backGroundColor
  },
  header:{
    color: Colors.primaryColor,
    fontSize: 16,
  }
});
