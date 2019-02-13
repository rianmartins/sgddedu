import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

const USER_KEY = 'user';

@Injectable()
export class AuthService {

    constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {
 
    }

    public getUser(): any {
        return this.storage.get(USER_KEY);
    }

    public setUser(user: any) {
        this.storage.set(USER_KEY, user);
    }

    public isGuest(){
        return null === this.getUser();
    }

    public clearUser(){
        this.storage.remove(USER_KEY);
    }

}