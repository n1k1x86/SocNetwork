import { combineReducers, legacy_createStore as createStore} from "redux";
import sideBarReducer from './sidebar-reducer';
import profilePageReducer from './profile-reducer';
import dialogsPageReducer from './dialogs-reducer';

let reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    sideBar: sideBarReducer,
});

const store = createStore(reducers);

export default store;