import { LoginComponents } from './components';
import { routes } from '../../Navigation/routes';

export const Login = ({ navigation }) => {
  const onLogin = () => {
    //Validation
    navigation.navigate(routes.HOME);
  };
  const props = {
    onLogin
  };
  return (
    <LoginComponents {...props} />
  );
};
