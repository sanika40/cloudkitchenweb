import { CanActivateFn } from '@angular/router';

export const newAuthGuard: CanActivateFn = (route, state) => {

  let userProfile = localStorage.getItem('userProfile')
  if(userProfile == "admin"){
    return true
  }
  else if(userProfile == "" || userProfile == "users"){
    return false
  }
  else{
    return false
  }
};
