import {Ok,Result,Err,Error,println,format,i32} from "./index";
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
{
    let vec=["java","javascript","rust","c"];
    let index:i32=6;
    let result:Result<String,Error>=test_result(vec,index);
    let str=result.match({
        Ok: (v:String)=>{
           println(v);
            return v;
        },
        Err: (e)=> {
            println(e);
            return "other-lang"
        }
    })
    let test_string=format("{}-{}-{}","hello","from",str);
    println(test_string)
}


