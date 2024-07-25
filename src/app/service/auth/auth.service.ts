import { Injectable } from '@angular/core';
import { LocalstorageService } from '../data/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localStorageService: LocalstorageService) { }

  login(username:string, password:string) : boolean {
    if (username === 'user' && password === 'pass') {
      this.localStorageService.setItem('user', username);
      return true;
    }
    return false;
  }

  user():string {
    return this.localStorageService.getItem('user')!;
  }

  logout(): void {
    this.localStorageService.removeItem('user');
  }

  isAuthenticate(): boolean {
    return this.localStorageService.getItem('user') !== null;
  }
}
