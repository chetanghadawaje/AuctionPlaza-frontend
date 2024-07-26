import { inject } from '@angular/core';
import {  CanActivateFn, Router } from '@angular/router';

export const authGuard : CanActivateFn = (route, state)=> {
  const _router = inject(Router)
  let isLoggedIn = !!localStorage.getItem('email');
  if(!isLoggedIn){
    _router.navigate(['/'])
  }
  return isLoggedIn;
}
