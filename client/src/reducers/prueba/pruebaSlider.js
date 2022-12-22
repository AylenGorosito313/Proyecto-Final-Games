import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    games: [],
    isLoader: false,
};

export const toolkit_prueba = createSlice({
    name: "redux-toolkit",
    initialState,
    reducers: {
        addUser: (state, actions) => {
            state.users = [...actions.payload];
        },
        getAllGames: (state, actions) => {
            state.games = [...actions.payload];
        },
        getByName: (state, actions) => {
            state.games = [...actions.payload];
        },
        setIloader: (state) => {
            state.isLoader = !state.isLoader;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addUser, getAllGames, getByName, setIloader } =
    toolkit_prueba.actions;

export default toolkit_prueba.reducer;
