import {InjectionToken, Provider} from '@angular/core';

const config = {
  PREFIX: 'api'
};

export const configProviderToken = new InjectionToken('apiConfig');

export const configProvider: Provider = {
  provide: configProviderToken,
  useValue: config,
};
