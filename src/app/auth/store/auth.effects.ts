import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, of, catchError } from 'rxjs';

import { AuthService } from '../auth-service.service';
import * as fromApp from './auth.reducer';
import * as AuthActions from './auth.actions';
import { User } from '../interfaces/user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthEffects {
  handleSuccess = (response) => {
    const loadedUser = new User(
      response.email,
      response.localId,
      response.idToken,
      +response.expiresIn
    );
    return AuthActions.authenticateSuccess({
      payload: {
        email: response.email,
        id: response.idToken,
        _token: response.idToken,
        _tokenExpirationDate: +response.expiresIn,
      },
    });
  };

  handleError = (error) => {
    let errorMessage = 'An error occured during authentication';
    if (!error.error || !error.error.error.message) {
      return of(AuthActions.authenticateFailed({ payload: errorMessage }));
    }
    switch (error.error.error.message) {
      case 'EMAIL_NOT_FOUND':
        return (errorMessage = 'Email not found');
      case 'INVALID_PASSWORD':
        return (errorMessage = 'Invalid password');
      case 'EMAIL_EXISTS':
        errorMessage = 'Email already registered';
    }
    return of(AuthActions.authenticateFailed({ payload: errorMessage }));
  };

  login$ = createEffect(() => {});

  constructor(private actions$: Actions, private authService: AuthService) {}
}
