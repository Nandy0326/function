/*let num=new Array(1,2,3,4,5);
function array(x){
    for(var i = 0 ; i< num.length ; i++){
          if(num[i]%2!=0){
             console.log(num[i]);
          } 
     }
  }
array(num);
*/
/*
let num=new Array(1,2,3,4,5);
let oddnumber=x =>
{
    for(var i = 0 ; i< num.length ; i++){
        if(num[i]%2!=0){
           console.log(num[i]);
        } 
   }
}
oddnumber(num);
*/
/*
let num=new Array(1,2,3,4,5);
function array(x){
    let sum=0;
    for(let i=0;i<num.length;i++)
    {
        sum=sum+num[i];
        console.log(sum);

    }
}
array();
*/
/*
let num=new Array(1,2,3,4,5);
let sumnumber=x =>
{
    let sum=0;
    for(let i=0;i<num.length;i++)
    {
        sum=sum+num[i];
        console.log(sum);

    }
}
array();
*/
/*
let num=new Array(1,2,3,4,5);
let prime=[];
function primenumber(x)
{
    var value =x/2;
    for (var i = 2; i <= value; i++) {
          if ((x% i )=== 0) 
          {
          return false;
          }
        }

        return true;
        
}
for (let index=0;index<num.length;index++)
{
    if(primenumber(num[index]))
    {
        prime.push(num[index]);

    }

}
console.log(prime);
  
primenumber(num);
*/