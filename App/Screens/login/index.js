import { LoginComponents } from './components';
import { routes } from '../../Navigation/routes';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../Redux/User/selector';

export const Login = ({ navigation }) => {
  const [isRememberMe,setRememberMe]=useState(false)
  const [isPassword,setPassword]=useState('')
  const [isEmail,setEmail]=useState('')
  const onClickRememberMe=()=>setRememberMe(!isRememberMe)
  const onLogin = () => {
    navigation.navigate(routes.BOTTOM_NAVIGATION);
  };
  const onChangeTextPassword=(text)=>setPassword(text)
  const onGoogleButtonPress=()=>console.log("Remember")
  const onChangeTextEmail=(text)=>setEmail(text)

  const props = {
    onLogin,
    isRememberMe,
    onClickRememberMe,
    onChangeTextPassword,
    onChangeTextEmail,
    onGoogleButtonPress
  };
  return (
    <LoginComponents {...props} />
  );
};
