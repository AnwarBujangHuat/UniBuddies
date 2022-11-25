import {
  Image,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import { SearchBar } from '../../Components/Atoms/SearchBar';
import { Colors } from '../../Colors';
import { Icons } from '../../Icons';
import { String } from '../../Strings';

export const HomeComponents = props => {
  const { userInfo } = props;
  return (
    <SafeAreaView style={styles.screen}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <SearchBar></SearchBar>
          <Image style={styles.userIcon} source={Icons[String.GOOGLE]} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backGroundColor,
  },
  header: {
    color: Colors.primaryColor,
    fontSize: 16,
  },
  userIcon:{ position:'absolute',
    right:10,
    width: 40, height: 40, }
});
