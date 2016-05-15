import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {from} from 'rxjs/observable/from';

@Injectable()
export class MemberService {
    constructor(private http: Http) {}

    getMembers() {
        return this.makeRequest();
    }

    private makeRequest(): Observable<any> {
        return from([[
            {name: "Peter"},
            {name: "Christina"}
        ]]);
        // return Observable.create([
        //     {name: "Peter"},
        //     {name: "Christina"}
        // ]);
        //
        // let params = new URLSearchParams();
        // params.set('per_page', '100');
        //
        // let url = `/members`;
        // return this.http.get(url, {search: params})
        //     .map((res) => res.json());
    }
}
