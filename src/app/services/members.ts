import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {from} from 'rxjs/observable/from';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {merge} from 'rxjs/operator/merge';

export interface Member {
    name: string;
}

@Injectable()
export class MemberService {

    members$:BehaviorSubject<Member[]> = new BehaviorSubject<Member[]>([]);
    private members:Member[] = [];

    constructor(private http:Http) {
        this.members$.next([]);
    }

    getMembers() {
        return this.makeRequest();
    }

    addMember(member) {
        this.members.push(member);
    }

    private makeRequest():Observable<Member[]> {
        return merge(from(
            [[
                {name: "Peter"},
                {name: "Christina"}
            ]])
            .map(this._save)
        );
        //
        // let params = new URLSearchParams();
        // params.set('per_page', '100');
        //
        // let url = `/members`;
        // return this.http.get(url, {search: params})
        //     .map((res) => res.json());
    }

    _save = (members: Member[]): Member[] => {
        this.members = members;
        return members;
    }
}
