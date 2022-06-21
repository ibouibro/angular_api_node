export class User {
    
    id!: String;
    name!: String;
    email!: String;
    password!: String;

    constructor(id:string, name : string, email : string)
    {
        this.id =id
        this.name = name
        this.email =email
    }
  }