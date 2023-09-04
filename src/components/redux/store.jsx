import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './slice.jsx'


const store = configureStore ({
    reducer : {
        alldata : dataSlice
    }
})

export default store