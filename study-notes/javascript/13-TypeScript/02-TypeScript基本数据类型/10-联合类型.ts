/**
 * Created by liujun on 2018/3/1.
 */
/**1.ts语法*/
var a:boolean=true;

/*定义一个联合类型的变量*/
var b:number|string;
b=a?100:'不及格';


/*定义一个联合类型的参数*/
function show(str:number|string){
    console.log('show=>'+str);
}

show(100);
show('sdfd');
// show(true);






