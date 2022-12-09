import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {isNumber} from "@ng-bootstrap/ng-bootstrap/util/util";

@Component({
  selector: 'app-data-person-form',
  templateUrl: './data-person-form.component.html',
  styleUrls: ['./data-person-form.component.css']
})
export class DataPersonFormComponent implements OnInit {

  // formulario principal
  // un FormGroup es la parte logica de un formulario (cada entrada de datos)
  // la clase form group hace referencia al formulario completo
  firstsForm: FormGroup;
  secondForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.firstsForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        ege: [, [Validators.required]],
        email: ['', [Validators.email]],
        address: ['', [Validators.required]],
        message: ['', [Validators.required]]
      }
    );
    // @ts-ignore
    this.secondForm = new  FormGroup(
      {
        // dentro de los formgroup se encuentra los FormControl quien hace referencia a cada elemento o campo del formulario.
        // crea una instancia de la clase
        name: new FormControl()
      }
    )
  }

  submit() {
    console.log(this.firstsForm.value);
    console.log(this.firstsForm.valid);
  }

}
