import {
    createReactNavigationReduxMiddleware,
    createNavigationReducer
} from 'react-navigation-redux-helpers';
import AppNavigator from '../_navigators/navigators';
import { combineReducers } from 'redux';

const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
    nav: navReducer,
});

export default appReducer