import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatProgressBarModule, MatRadioModule, FormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() page = 0;
  answers: string[] = ['Respuesta 1', 'Respuesta 2', 'Respuesta 3'];
  questions = [
    {
      question: 'Question 1',
      result: '',
    },
    {
      question: 'Question 2',
      result: '',
      other: '',
    },
    {
      question: 'Question 3',
      result: '',
    }
  ];

  nextPage() {
    this.page++;
  }

  getPercentage() {
    return ((this.page-1) * 100 / 3) | 0;
  }

  lastPageForm() {
    return this.page === 3;
  }
} 
