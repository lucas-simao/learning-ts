import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Props = {
  open: boolean;
  goToRoute?: string;
  goToRouteLabel?: string;
  text: string;
  style: 'positive' | 'negative' | 'warning' | 'info';
  autoHideDuration: number;
};

const initialState: Props = {
  open: false,
  goToRoute: '',
  goToRouteLabel: '',
  text: '',
  style: 'info',
  autoHideDuration: 3000,
};

export const snackBarSlice = createSlice({
  name: 'snackBar',
  initialState,
  reducers: {
    openAlert(state, action: PayloadAction<Props>) {
      state.open = action.payload.open
      state.goToRoute = action.payload.goToRoute
      state.goToRouteLabel = action.payload.goToRouteLabel
      state.text = action.payload.text
      state.style = action.payload.style
      state.autoHideDuration = action.payload.autoHideDuration
    },
    closeAlert(state) {
      state.open = initialState.open
      state.goToRoute = initialState.goToRoute
      state.goToRouteLabel = initialState.goToRouteLabel
      state.text = initialState.text
      state.style = initialState.style
      state.autoHideDuration = initialState.autoHideDuration
    },
  },
});

export const { openAlert, closeAlert } = snackBarSlice.actions;

export default snackBarSlice.reducer;
