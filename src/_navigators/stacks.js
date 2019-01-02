import { createStackNavigator, createAppContainer } from 'react-navigation'
import { HomeScreen } from './module';

export const HomeStack = createStackNavigator(
    {
      Home: HomeScreen,
    },
  );
