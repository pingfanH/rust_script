import { println } from "../fn";
import { bool } from "../type";

/** 
*Ok Result
**/
export class Ok<T>{
    private _value:T;
    constructor(value:T){
        this._value=value;
    }
    /** 
    *结果如果是Ok,获取T,如果是Err会结束线程并打印Err
    **/
    unwrap():T{
        return this._value;
    }
    is_ok():bool{return true;}
    is_err():bool{return false;}
    /** 
    结果如果是Ok,获取T,如果是Err会返回传入的数值
    @example
        result.unwrap_or(5);
        Ok//T
        Err//5
    **/
    unwrap_or(value:T):T{
        return this._value;
    }
    /** 
    *结果如果是Ok,返回T,Err则返回闭包的返回值
    *@example
        result.unwrap_or_else(
            ()=>{
                var num=5;
                return num;
            }
        )
        Ok//T
        Err//5
    **/
    unwrap_or_else(fn:() => T):T{
        return this._value;
    }
    match<E>(fns:{
        Ok:(v:T) => T,
        Err:(e:E) => T
    }):T
    {
        return fns.Ok(this._value);
    }
}
/**
*Err Result
**/
export class Err<E>{
    private _error:E;
    constructor(value:E){
        this._error=value;
    }
    /** 
    *结果如果是Ok,获取T,如果是Err会结束线程并打印Err
    **/
    unwrap(): never{
        console.log("panic!")
        throw this._error
    }
    is_ok():bool{return false;}
    is_err():bool{return true;}
    unwrap_or<T>(value: T): T {
    return value;
  }
    unwrap_or_else<T>(fn: () => T): T {
        return fn();
    }
    match<T>(fns:{
        Ok:(v:T)=>T,
        Err:(e:E)=>T
    }):T
    {
        return fns.Err(this._error);
    }
}
/** 
*   返回Ok或Err
**/
export type Result<T,E> = Ok<T> | Err<E>;
export class Error{
    content:String;
      constructor(content: String) {
          this.content = content;
    }
}
