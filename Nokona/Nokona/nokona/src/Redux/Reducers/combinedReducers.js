import {combineReducers} from 'redux';
import currentPageState from './MainFormReducer'
import SubNavBar from './SubNavBarReducer'

export default combineReducers({
    currentPageState,
    SubNavBar
})