import {createSlice} from "@reduxjs/toolkit";
//  slice is just like a slice of a pizza

const initialState = {
    cars: ["Model X", "Model 3", "Model S", "Model Y", "Solar Roof", "Solar Panel"]
}

const CarSlice = createSlice({
    name: "car",
    initialState,
    reducers:{}
})

export const selectCars = state => state.car.cars; // this statement is directly mapping to line no. 5

export default CarSlice.reducer;