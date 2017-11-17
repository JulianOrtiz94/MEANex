import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer.form.component.html',
  styleUrls: ['./answer-form.component.css']
})

export class AnswerFormComponent {
  onSubmit (form: NgForm) { // Enviar datos de formulario
    console.log(form.value.description);
  }
}
