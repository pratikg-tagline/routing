import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginservicesService {

  constructor() { }

  isUserRight(){
    return !!localStorage.getItem('username');
  }
}
