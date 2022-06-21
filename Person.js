class Person{
    constructor(details){
        this._name=  details.name;
        this._age = details.age;
    }
    get details(){
        return {
            name : this._name,
            age :this._age,
        }
    }
    set details(details){
        this._name = details.name;
        this._age = details.age;
    }

    printDetails(){
        console.log("Name: "+this._name);
        console.log("Age: "+this._age);
    }
}

class Login extends Person{
    constructor(details){
        super(details);
        this._mailId = details.mailId;
        this._password=  details.password
    }

    get data(){
        return {
            name:this.details.name,
            age:this.details.age,
            mailId:this._mailId,
            password:this._password,
        }
    }
    set data(data){
        this.details = {name:data.name,age:data.age},
        this._mailId = data.mailId;
        this._password = data.password;
    }

    printDetails(){
        super.printDetails();
        console.log("MailId: "+this._mailId);
        console.log("Password: "+this._password);
    }
}

let arr = [
    {name:'vikcy',age:20,mailId:'vikas.innvonix@com',password:'*****'},
    {name:'vikas',age:20,mailId:'vikas.innvonix1@com',password:'*****'},
];

//create new Logins from an Array
let Logins = new Set();
arr.forEach((element,index)=>{
    Logins.add(new Login(element));
});
//printing Logins
Logins.forEach((element,index)=>{
    console.log(element.data)
    console.log(element.printDetails())

});