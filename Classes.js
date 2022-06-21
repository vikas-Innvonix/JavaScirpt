class User{
    constructor(fname,lname){
        this._fname = fname;
        this._lname = lname;
    }
    get fullName(){
        return this._fname+" "+this._lname;
    }
    set name(name){
        this._fname = name.fname;
        this._lname = name.lname;
    }
}

let obj = new User('John',"D");
console.log(obj);
console.log(obj.fullName)
obj.name = {fname:"D",lname:"John"};
console.log(obj.fullName)