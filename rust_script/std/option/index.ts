import { bool } from '../type/index';

export class None{
    is_some():bool{
        return false
    }
    id_none():bool{
        return true
    }
}
export class Some<T>{
    private _value:T;

    constructor(value:T){
        this._value=value;
    }
    is_some():bool{
        return true
    }
    id_none():bool{
        return false
    }
}
export type Option<T> = Some<T> | None;