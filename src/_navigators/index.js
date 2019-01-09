import {Home, Login, TodoList} from '../screens'
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
}, {
  initialRouteName
});

export default AppNavigator
