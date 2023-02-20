import { createReducer, on } from '@ngrx/store';
import { User } from '../interfaces/user.model';
import {
  authenticateFailed,
  authenticateSuccess,
  startLogin,
} from './auth.actions';

export interface State {
  user: User;
  error: string;
  loading: boolean;
}

export interface AppState {
  auth: State;
}

const initialState: State = {
  user: null,
  error: null,
  loading: false,
};

export const authReducer = createReducer(
  initialState,
  on(startLogin, (state, { payload }) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(authenticateSuccess, (state, { payload }) => ({
    ...state,
    loading: false,
    error: null,
    user: payload,
  })),
  on(authenticateFailed, (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  }))
);
