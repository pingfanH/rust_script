
/**
 * println from args
 * @param first 可以包含{}的字符串
 * @param args 会被补充到{}中
 * @example
 * println("{}-{}","hello","world");
 * //输出:hello-world
 */
export function println(...args:any[]){
    if(args.length==1){
        console.log(args[0])
        return;
    }
    let string_args:[string]=args.shift().split(/({})/);
    let index:number=0;
    for(var i of string_args){
        if(i=="{}"){
            string_args[index]=args.shift()
        }
        index+=1;
    }
    console.log(string_args.join(""))
}
/**
 * format from args
 * @param first 可以包含{}的字符串
 * @param args 会被补充到{}中
 * @example
 * format("{}-{}","hello","world");
 * //返回:hello-world
 */
export function format(...args:any[]):String{
    let string_args:[string]=args.shift().split(/({})/);
    let index:number=0;
    for(var i of string_args){
        if(i=="{}"){
            string_args[index]=args.shift()
        }
        index+=1;
    }
    return string_args.join("");
}