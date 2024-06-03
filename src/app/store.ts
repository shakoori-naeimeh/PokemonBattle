import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import pokemonApi from '../features/pokemon/pokemoneApiSlice';
import { battleGroundSlice } from "../features/battleGround/battleGroundSlice"

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    battleGround: battleGroundSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

// Optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch