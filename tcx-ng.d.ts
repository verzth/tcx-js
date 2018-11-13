declare module TCX {
    export interface TcxNg {
        getAppID():string;
        getAppPass(o:object):string;
        getToken(c:any):string;
        getRefreshToken(c:any):string;
        clearToken();
        getMasterToken():string;
        getTime():string;
        appendTime(o:object):object;
        new(o:object):TcxNg;
    }
}

declare var TcxNg:TCX.TcxNg;