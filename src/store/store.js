import { configureStore } from "@reduxjs/toolkit";
import comidasReducer from "../store/reducers/comidasReducer"

export const storeRestaurant = configureStore({
    reducer: {
        menuComidasReducer: comidasReducer
    }
})