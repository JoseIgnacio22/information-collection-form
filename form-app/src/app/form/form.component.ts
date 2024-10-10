import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
/* Waiting for fix on DatePicker
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';
*/
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-form',
  standalone: true,
  /*providers: [{provide: MAT_DATE_LOCALE, useValue: 'es-ES'}, provideNativeDateAdapter()], */
  imports: [MatProgressBarModule, MatRadioModule, FormsModule, CalendarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() page = 0;
  answers: string[] = ['Respuesta 1', 'Respuesta 2', 'Respuesta 3'];
  questions = [
    {
      question: 'Pregunta 1',
      result: '',
    },
    {
      question: 'Pregunta 2',
      result: '',
      other: '',
    },
    {
      question: 'Pregunta 3',
      result: '',
    }
  ];

  nextPage() {
    this.page++;
  }

  getPercentage() {
    return ((this.page-1) * 100 / 3) | 0;
  }

  getFormattedDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0'); 
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear();  
  
    return `Día/Mes/Año: ${day}/${month}/${year}`;
  }

  lastPageForm() {
    return this.page === 3;
  }
} 
