import {Home, Login, TodoList, TodoAdd, Signin1, Signup1, Profile2} from '../screens'
import {createStackNavigator} from 'react-navigation'

const initialRouteName = "Profile2"

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
  Signup1: {
    screen: Signup1
  },
  Profile2: {
    screen: Profile2    
  },
  TodoList: {
    screen: TodoList    
  },
  TodoAdd: {
    screen: TodoAdd
  },
}, {
  initialRouteName
});

export default AppNavigator
