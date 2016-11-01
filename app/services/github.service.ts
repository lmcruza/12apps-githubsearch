import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

    private username: string;
    private client_id = "a5eed15de02b763102e0";
    private client_secret = "e0a7549621925a2268df535826ef734f46fe5f6c";

    constructor(private _http: Http) {
        console.log('Github Service Ready...');
        this.username = 'lmcruza';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    updateUser(username:string) {
        this.username = username;
    }
}