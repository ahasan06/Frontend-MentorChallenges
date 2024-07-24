import {
    configureStore
} from '@reduxjs/toolkit'
import noteReducer from './reducers/noteReducer'
import {
    rootApi
} from './features/apiSlice'



const rootReducer = {
    notes: noteReducer,
    [rootApi.reducerPath]: rootApi.reducer
}

export const ourStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rootApi.middleware)
})