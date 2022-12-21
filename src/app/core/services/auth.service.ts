import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {Login, LoginResponse, Register} from "../interfaces/auth";
import {User} from "../interfaces/user";


@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

login(payload:Login):Observable<LoginResponse>{

  return this.post<LoginResponse>('auth/login',payload);
}
register(payload:Register):Observable<User>{
  return this.post<User>('auth/signup',payload);
}}


