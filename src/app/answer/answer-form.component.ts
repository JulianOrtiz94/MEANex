import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer.form.component.html'
})

export class AnswerFormComponent {
  onSubmit (form: NgForm) { // Enviar datos de formulario
    console.log(form.value.description);
  }
}
