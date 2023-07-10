import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})


/*
purtroppo ho avuto problemi nel far funzionare il servizio di angular per le chiamate http
e ho provato ad arrangiarmi al volo utilizzando il metodo Fetch API classico
peró anche qui ci sono dei problemi non avendolo mai utilizzato, le chiamate partono peró
non riesco a prendere la response del body in questo momento dove sto quasi per sforare il limite di tempo.

Purtroppo mi tocca consegnare la parte di frontend senza le chiamate POST correttamente eseguite,
quindi senza la possibilitá di giocare sulla visualizzazione dell'email dell'utente, sui tasti
login, register e logout
*/


export class AuthService {
    private baseUrl = 'http://localhost:3000/auth';
    user!: any;
    msgRegister!: string;
    errorMsgLogin!: string;

    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    register(user: User): Observable<any> {
        const url = `${this.baseUrl}/register`
        const result = this.http.post(url, user);
        result.subscribe( (res:any) => {
            if(res.email) {
                this.user = {
                    email: res.email
                }
                this.router.navigateByUrl('/login');
            }
            this.msgRegister = res.msg
        })
        return result;
    }

    login(user: User): Observable<any> {
        const url = `${this.baseUrl}/login`;
        const result = this.http.post(url, user);
        result.subscribe( (res:any) => {
            console.log(res)
            if(res.token) {
                this.user = {
                    email: res.email,
                    token: res.token
                }
                localStorage.setItem('user', JSON.stringify(this.user));
                this.router.navigateByUrl('/home');
            } else {
                this.errorMsgLogin = res.msg;
            }
        })
        return result;
    }

    logout(): void {
        this.user = null;
        localStorage.removeItem('user');
        this.router.navigateByUrl('/login');
    }

    isAuthenticated(): any {
        let user = localStorage.getItem('user');
        if (user) return true
        else return false
    }
}