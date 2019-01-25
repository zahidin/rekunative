import {Home, Login, TodoList, TodoAdd, Signin1, Signup2} from '../screens'
import {createStackNavigator} from 'react-navigation'

const initialRouteName = "Signup2"

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
  Signup2: {
    screen: Signup2    
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
