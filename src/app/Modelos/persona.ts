export class Persona {
Nombre:string;
Apellido:string;
Edad:Number;
Sexo:string;

public setNombre(Nombre: string){
    this.Nombre=Nombre;
}
public setApellido(Apellido: string){
    this.Apellido=Apellido;
}
public setEdad(Edad:number){
    this.Edad=Edad;
}
public setSexo(Sexo:string){
    this.Sexo=Sexo;
}
public getNombre(){
    return this.Nombre;
}
public getApellido(){
    return this.Apellido;
}
public getEdad(){
    return this.Edad;
}
public getSexo(){
    return this.Sexo;
}
}
