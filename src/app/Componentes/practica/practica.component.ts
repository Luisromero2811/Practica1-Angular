import { Component, OnInit } from '@angular/core';
import {Persona} from '../../Modelos/persona';
@Component({
  selector: 'app-practica',
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css']
})
export class PracticaComponent implements OnInit {
  public Nombre:string; public Edad:number; public Sexo:string;  public Apellido:string;
  Personas = new Persona();
  constructor() { 
    this.Personas.setNombre("Luis");
    this.Personas.setApellido("Romero");
    this.Personas.setEdad(21);
    this.Personas.setSexo("Masculino");
  }

  ngOnInit(): void {
  }

}
