import {
  Image,
  View,
  StyleSheet,
  TextInput,
  Dimensions
} from 'react-native';
import { Colors } from '../../Colors';
import SearchIcon from '../../Assets/search.png'
const { width, height } = Dimensions.get('window');

export const SearchBar=({onChangeText})=>{
  return(
    <View style={styles.searchbar}>
      <Image style={styles.icons} source={SearchIcon} />
      <TextInput
        style={styles.input}
        placeholder={"Search"}
        clearButtonMode={'always'}
        onChangeText={onChangeText}
        overflow="hidden"
        placeholderTextColor={Colors.primaryTextColor}
        keyboardAppearance="dark"
        color={Colors.primaryTextColor}
        autoCorrect={false} />
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    fontWeight: 'normal',
    marginVertical: 5,
    textAlignVertical: 'center',
    paddingVertical: 15,
    paddingLeft: 5,
    width: '90%'
  },
  icons: {
    tintColor: Colors.primaryColor,
    height: 25,
    width: 25,
  },
  searchbar:{
    flexDirection:'row',
    width: width*.80,
    paddingHorizontal:10,
    alignItems:'center',
    marginHorizontal:10,
    borderRadius:5,
    backgroundColor:Colors.secondaryBackGroundColor,
    shadowColor:Colors.primaryColor,
    shadowRadius:3,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity:.3,
  }
});
