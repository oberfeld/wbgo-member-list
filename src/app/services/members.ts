import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export interface Member {
    name: string;
}

@Injectable()
export class MemberService {

    members$:BehaviorSubject<Member[]> = new BehaviorSubject<Member[]>([]);


    constructor(private http:Http) {
        this.members$.next([
            {name: "Peter"},
            {name: "Christina"}
        ]);
    }

    getMembers():Observable<Member[]> {
        return this.members$;
    }


    addMember(member) {
        this.members$.next(this.members$.getValue().concat([member]));
    }

    // private makeRequest():Observable<Member[]> {
    //     return merge(from(
    //         [])
    //         .map(this._save)
    //     );
    //     //
    //     // let params = new URLSearchParams();
    //     // params.set('per_page', '100');
    //     //
    //     // let url = `/members`;
    //     // return this.http.get(url, {search: params})
    //     //     .map((res) => res.json());
    // }
    //
    // _save = (members: Member[]): Member[] => {
    //     this.members = members;
    //     return members;
    // }
}
