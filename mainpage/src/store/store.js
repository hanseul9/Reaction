import { configureStore} from '@reduxjs/toolkit';
import setIdReducer from '../redux/setId';

export const store = configureStore({
    reducer: setIdReducer,
    
});

