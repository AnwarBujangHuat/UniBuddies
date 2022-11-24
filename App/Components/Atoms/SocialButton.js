import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../Themes';
import { Icons } from '../../Icons';
// import {  GoogleSigninButton } from '@react-native-google-signin/google-signin';
const { width } = Dimensions.get('window');

export const SocialButton = ({ onPress, icon }) => {
  return (
    <View>
      <TouchableOpacity style={{
        flexDirection: 'row',
        borderRadius: 20,
        marginTop: 15,
        alignContent:'center',
        alignSelf:'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: EStyleSheet.value(Colors.secondaryBackGroundColor),
        shadowOffset: { width: -2, height: 3 },
        shadowColor: EStyleSheet.value(Colors.primaryColor),
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
      }} onPress={onPress}>
        <Image source={Icons[icon]} style={styles.icon}></Image>
        <Text style={{
          marginStart:10,
          alignSelf:'center',
          color:  EStyleSheet.value('$secondaryTextColor'),
          fontWeight: 'bold',
        }}>{'Sign in With Google'}</Text>
      </TouchableOpacity>
    </View>

  );
};
const styles = EStyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  }
});
