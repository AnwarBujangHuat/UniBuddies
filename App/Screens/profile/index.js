import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { routes } from '../../Navigation/routes';
import { useSelector } from 'react-redux';
import { getUser } from '../../Redux/User/selector';
import { ProfileComponents } from './components';
import MyTabs from '../../Navigation/BottomNavigation';

export const Profile=({navigation})=>{
  const userInfo =useSelector(getUser)

  const props={
    userInfo
  }
  return (
  <ProfileComponents {...props}/>
  );
}
