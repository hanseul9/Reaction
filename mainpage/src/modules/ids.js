import {Map, List} from 'immutable';
import { handleActions, createAction} from 'redux-actions';

const INSERT = 'ids/INSERT';
const TOGGLE = 'ids/TOGGLE';
const REMOVE = 'ids/REMOVE';

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

const initialState =  List([
    Map({
        userName : "홍길동",
        userImg : "../../public/images/profile.png",
        userEmail : "reaction@hansung.ac.kr",
        userPassword : "qwer123!",
        isLogin : false
    })
]);

export default handleActions({
    [INSERT]: (state, action) => {
        const {userName, userImg, userEmail, userPassword, isLogin} = action.payload;

        return state.push(Map({
            userName,
            userImg,
            userEmail,
            userPassword,
            isLogin
        }));
    },
    [TOGGLE]: (state, action) => {
        const {payload: index} = action;
        return state.updateIn([index, 'done'], done => !done);
    },
    [REMOVE]: (state, action) => {
        const {payload: index} = action;
        return state.delete(index);
    }
}, initialState)