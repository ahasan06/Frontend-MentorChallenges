import {
    configureStore
} from '@reduxjs/toolkit'
import jobListReducer from './reducers/jobListReducer'

const rootReducer ={
    jobList : jobListReducer
}
export const ourStore = configureStore({
    reducer:rootReducer
})