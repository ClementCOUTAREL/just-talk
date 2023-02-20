import { createAction, props } from '@ngrx/store';
import { User } from '../interfaces/user.model';

export const START_LOGIN = '[Auth] Start_Login';
export const AUTHENTICATE_SUCCESS = '[Auth] Authenticat_Success';
export const AUTHENTICATE_FAILED = '[Auth] Authenticat_Success';

export const startLogin = createAction(
  START_LOGIN,
  props<{ payload: { email: string; password: string } }>()
);
export const authenticateSuccess = createAction(
  AUTHENTICATE_SUCCESS,
  props<{ payload: User }>()
);
export const authenticateFailed = createAction(
  AUTHENTICATE_FAILED,
  props<{ payload: string }>()
);
