import {
	Home,
	Login,
	TodoList,
	TodoAdd,
	Signin1,
	Signin2,
  Signup1,
	ForgotPassword,
  Profile2
} from '../screens';
import { createStackNavigator } from 'react-navigation';

const initialRouteName = 'Signin1';

const AppNavigator = createStackNavigator({
		Home: {
			screen: Home
		},
		Login: {
			screen: Login
		},
		Signin1: {
			screen: Signin1
		},
		Signin2: {
			screen: Signin2
		},
    Signup1: {
      screen: Signup1
    },
    Profile2: {
      screen: Profile2    
    },
		ForgotPassword: {
			screen: ForgotPassword
		},
		TodoList: {
			screen: TodoList
		},
		TodoAdd: {
			screen: TodoAdd
		}
	},
	{
		initialRouteName
	}
 })

export default AppNavigator;
