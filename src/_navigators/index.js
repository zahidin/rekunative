import {Home, Login} from '../screens'
import {createStackNavigator} from 'react-navigation'

const initialRouteName = "Home"

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home    
  },
  Login: {
    screen: Login    
  },
}, {
  initialRouteName
});

export default AppNavigator
