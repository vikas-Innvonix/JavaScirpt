let num1=10,num2=20;

function add(a){
    return function(b){
        return a+b;
    }
}
console.log(add(num1)(num2));

//Infinit Curring

function infinte(a){
    return function(b){
        if(b){
            return infinte(a+b);
        }
        else{
            return a;
        }
    }
}
console.log(infinte(10)(20)(30)())