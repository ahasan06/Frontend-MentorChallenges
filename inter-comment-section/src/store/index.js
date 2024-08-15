import {
    configureStore
} from '@reduxjs/toolkit'

import commentReducer from './reducers/commentReducer'

const rootReducer = {
    comments : commentReducer
}

export const ourStore = configureStore({
    reducer:rootReducer
})