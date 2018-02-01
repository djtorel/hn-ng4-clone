import { Injectable } from '@angular/core';
import { ApiKey, API_KEY } from './api.config';


@Injectable()
export class ApiService {

  constructor() { }

  getKey(): string {
    return API_KEY.key;
  }

}
