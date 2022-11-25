import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import LottieView from 'lottie-react-native';
import icon from '../../Assets/stud.json';
import password from '../../Assets/password.png';
import email from '../../Assets/email.png';
import CheckBox from '@react-native-community/checkbox';
import { InputFields } from '../../Components/Atoms/InputFields';
import { SocialButton } from '../../Components/Atoms/SocialButton';
import { String } from '../../Strings';
import { Colors } from '../../Colors';

const { width, height } = Dimensions.get('window');
export const LoginComponents = props => {
  const {
    onLogin,
    isRememberMe,
    onClickRememberMe,
    onChangeTextPassword,
    onChangeTextEmail,
    onGoogleButtonPress
  } = props;
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.logoContainer}>
        <LottieView style={styles.lottieButton} source={icon} autoPlay={true} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Log In</Text>
        <InputFields source={email} hint={'Enter Registered Email'} onChangeText={onChangeTextEmail} />
        <InputFields source={password} hint={'Enter Password'} onChangeText={onChangeTextPassword} secret={true}/>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isRememberMe}
            onCheckColor={Colors.primaryColor}
            tintColor={Colors.primaryColor}
            onTintColor={Colors.primaryColor}
            boxType={'square'}
            tintColors={Colors.primaryColor}
            onValueChange={onClickRememberMe}
            style={{ height: 15, width: 15 }}
          />
          <Text style={{ color: Colors.secondaryTextColor, textAlign: 'center', marginStart: 10, }}>Remember
            Me</Text>
        </View>
      </View>
      <View style={{
        alignItems: 'center',
      }}>
        <TouchableOpacity style={styles.buttonSignIn} onPress={onLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonForget}>
          <Text style={{ color: Colors.primaryTextColor, textAlign: 'center' }}>Forget
            Password</Text>
        </TouchableOpacity>
        <SocialButton onPress={onGoogleButtonPress} icon={String.GOOGLE} />
      </View>
      <Text style={styles.info}>
        New Project
      </Text>

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backGroundColor
  },
  text: {
    color: Colors.primaryColor,
    fontSize: 16,
  },
  logoContainer: {
    width: width,
    alignItems: 'center',
    alignSelf: 'center'
  },
  lottieButton: {
    width: width * .5,
    height: width * .5,
  },
  inputContainer: {
    marginHorizontal: 20,
  },
  title: {
    fontWeight: 'normal',
    fontSize: 25,
    color: Colors.primaryTextColor,
    marginVertical: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
  buttonSignIn: {
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    alignSelf: 'center',
    width: width * .9,
    padding: 15,
    marginTop: 20,
  },
  buttonForget: {
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  info: {
    fontWeight: 'normal',
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
    fontSize: 12,
    fontStyle: 'italic',
    color: Colors.primaryTextColor,
  },
  loginText:
    { color: 'white',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'normal'
    },
});
