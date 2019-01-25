import {
	Home,
	Login,
	TodoList,
	TodoAdd,
	Signin1,
	Signin2,
	ForgotPassword
} from '../screens';
import { createStackNavigator } from 'react-navigation';

const initialRouteName = 'Signin1';

const AppNavigator = createStackNavigator(
	{
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
);

export default AppNavigator;
