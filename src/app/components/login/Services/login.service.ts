// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import { AppConfig } from './_config/app.config';
// import { Login, Player } from './app.model';

// @Injectable()
// export class AppService {

//     public apiUrl: string;

//   constructor(private _http: Http, private _Route: Router) {
//       this.apiUrl = new AppConfig().apiUrl;
//   }

// public AddPlayer(PlayerModel: Player) {
//   const headers = new Headers({'Content-Type': 'application/json'});
//   const options = new RequestOptions({headers: headers});

//   return this._http.post(this.apiUrl + 'player', PlayerModel, options)
//   .map((res: Response) => res.json())
//   .catch(response => {
//    if (response.status === 401) {
//        this._Route.navigate(['Login']);
//        }
//        return response;
//     });
// }

//   // public GetAllAdmin(): Observable<any> {
//   //   // return this._http.get<any>(this.apiUrl + 'admin');
//   // }

//   // public ValidateAdmin(LoginModel: Login): Observable<any> {
//   //   // return this._http.get<any>(this.apiUrl + 'login/' + LoginModel.email + '/' + LoginModel.passwordHash);
//   // }

// public ValidatePlayer(PlayerModel: Player) {
//     const headers = new Headers({'Content-Type': 'application/json'});
//     const options = new RequestOptions({headers: headers});

//     return this._http.post(this.apiUrl + 'Player/Login', PlayerModel, options)
//     .map((res: Response) => {
//     const webresponse = res.json() && res.json();
//       if (webresponse !== null) {
//         if (webresponse.playerId != null) {
//           // tslint:disable-next-line:max-line-length
//           localStorage.setItem('HousieGame', JSON.stringify({PlayerId: webresponse.playerId, Name: webresponse.name, Email: webresponse.email, Mobile: webresponse.mobileNumber}));
//         }
//         return webresponse;
//       } else {
//         return null;
//       }
//     })
//     .catch(response => {
//     if (response.status === 401) {
//          this._Route.navigate(['Login']);
//        }
//        return response;
//     });
// }

// }

//   //   public GetAllAdmin = (): Observable<any> => {
//     //   const headers = new Headers({'Content-Type': 'application/json'});


//     //   const options = new RequestOptions({headers: headers});

//     // return this._http.get(this.apiUrl + 'Admin', )
//     // .pipe((reponse: Response) => <any>reponse.json, options)
//     // .catch(response => {
//     //     if (response.status === 401) {
//     //         this._Route.navigate(['Login']);
//     //     }
//     //     return response;
//     // });
// //   }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }
}

