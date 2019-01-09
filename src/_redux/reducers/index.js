import {createNavigationReducer} from 'react-navigation-redux-helpers';
import AppNavigator from '../../_navigators';
import {combineReducers} from 'redux';

const navReducer = createNavigationReducer(AppNavigator);
const reducers = combineReducers({
    nav: navReducer,
});

export default reducers