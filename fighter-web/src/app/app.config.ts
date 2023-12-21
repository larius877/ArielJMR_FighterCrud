import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations, } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { fighterReducer } from '../ngrx-store/reducers/fighter.reducer';
import { FighterEffects } from '../ngrx-store/effects/fighter.effects';
import { provideHttpClient, withFetch } from '@angular/common/http';

const reducers = {
  fighters: fighterReducer,
}

const effects = [
  FighterEffects
]

/**
 * Configuración del redux devtools.
 * https://github.com/reduxjs/redux-devtools
 */
const storeDevtoolsConfig = {
  maxAge: 25,
  autoPause: true
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideStore(reducers, {}),
    provideEffects(effects),
    provideStoreDevtools(storeDevtoolsConfig),
    provideHttpClient(withFetch()),
  ]
};
