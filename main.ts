import {Ok,Result,Err,Error,println,format,i32} from "./mod";
function test_result(value:String[],index:number):Result<String,Error>{
    var _index=0;
    for(var i of value){
        if(_index==index){
            return new Ok(i)
        }
        _index+=1;
    }
    return new Err(new Error("index not find!"))
}

let vec=["java","javascript","rust","c"];
let index:i32=2;
let result:Result<String,Error>=test_result(vec,index);
let test_string=format("{}-{}-{}","hello","from",result.unwrap());
println(test_string)