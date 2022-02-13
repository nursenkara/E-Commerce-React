export interface User{
    id:Number;
    firstName:String;
    lastName:String;
    email:String;
    passwordSalt:String;
    passwordHash:String;
    status:Boolean;
}