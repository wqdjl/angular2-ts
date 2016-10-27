import { Component } from '@angular/core';
import { AuthServer } from '../share/auth.server';

@Component({
    moduleId:module.id,
    selector:'login',
    templateUrl:'login.component.html'
})
export class LoginComponent {
    constructor(
        private authServer: AuthServer
    ) {

    }

    onLogin() {
        this.authServer.login();
     }
}

