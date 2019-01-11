import {Home, Login, TodoList, TodoAdd} from '../screens'
import {createStackNavigator} from 'react-navigation'

const initialRouteName = "TodoList"

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home    
  },
  Login: {
    screen: Login    
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
