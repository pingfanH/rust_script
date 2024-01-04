import { println } from "./std";

/** 
*Ok Result
**/
export class Ok<T>{
    value:T;
    constructor(_value:T){
        this.value=_value;
    }
    /** 
    *结果如果是Ok,获取T,如果是Err会结束线程并打印Err
    **/
    unwrap():T{
        return this.value;
    }
    /** 
    结果如果是Ok,获取T,如果是Err会返回传入的数值
    @example
        result.unwrap_or(5);
        Ok//T
        Err//5
    **/
    unwrap_or(value:T):T{
        return this.value;
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
        return this.value;
    }
}
/**
*Err Result
**/
export class Err<E>{
    value:E;
    constructor(_value:E){
        this.value=_value;
    }
    /** 
    *结果如果是Ok,获取T,如果是Err会结束线程并打印Err
    **/
    unwrap(): never{
        console.log("panic!")
        throw this.value
    }
    unwrap_or<T>(value: T): T {
    console.log(value);
    return value;
  }
    unwrap_or_else<T>(fn: () => T): T {
        return fn();
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
