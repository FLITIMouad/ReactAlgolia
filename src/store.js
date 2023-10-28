import { configureStore } from '@reduxjs/toolkit'
import { productListReducer } from './reducers/ProductReducer'
const reducers ={
    products:productListReducer

}
export default configureStore({
    reducer: reducers
})