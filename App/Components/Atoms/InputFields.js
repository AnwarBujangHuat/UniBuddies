import {
  TextInput,
  View,
  StyleSheet,
  Image
} from 'react-native';
import FastImage from 'react-native-fast-image';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Icons } from '../../Icons';
import { Colors } from '../../Colors';

export const InputFields = ({ onChangeText, defValue, source, secret,hint }) => {
  return (
    <View style={styles.section}>
      <Image style={styles.icons} source={source} />
      <TextInput
        style={styles.input}
        placeholder={hint}
        value={defValue}
        clearButtonMode={'always'}
        onChangeText={onChangeText}
        overflow="hidden"
        placeholderTextColor={Colors.primaryTextColor}
        keyboardAppearance="dark"
        secureTextEntry={secret}
        color={Colors.primaryTextColor}
        autoCorrect={false} />
    </View>

  );
};
const styles = StyleSheet.create({
  section: {
    backgroundColor: Colors.secondaryBackGroundColor,
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical:10,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: Colors.secondaryColor,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  input: {
    fontSize: 14,
    fontWeight: 'normal',
    marginHorizontal: 10,
    textAlignVertical: 'center',
    marginVertical: 2,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 0,
    width: '80%'
  },
  icons: {
    flexDirection: 'row',
    alignSelf: 'center',
    tintColor: Colors.primaryColor,
    height: 25,
    width: 25,
    margin: 10,
  },
});
