export class User {
    public id_user:number;
    public name:string;
    public last_name: string;
    public email: string;
    public photo: string;
    public password: string

    constructor(
        // name:string, last_name:string, email:string, photo:string
        ){
        this.id_user 
        this.name 
        this.last_name 
        this.email 
        this.photo 
        this.password

    }

    nombreCompleto(){
        return `${this.name} ${this.last_name}`; 
    }

    mostrarNombre(){
        console.log(this.name);
        
    }

}
