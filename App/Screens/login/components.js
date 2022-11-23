import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const LoginComponents=props=>{
  const {
    onLogin
  }=props
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <TouchableOpacity onPress={onLogin}>
      <Text style={styles.text}>Login</Text>
    </TouchableOpacity>
    </View>
  )
}
const styles=EStyleSheet.create({
  text:{
    color: '$primaryTextColor',
    fontSize: 16,
  }
})
