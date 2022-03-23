import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import {AppDispatch} from './index';

import {RootState} from './reducers';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
