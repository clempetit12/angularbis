import { Component, EventEmitter, Output } from '@angular/core';
import { Calendar } from './calendar';
import { MONTHS } from './calendar-list';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
 monthList: Calendar[] = MONTHS;
 selectedMonth: Calendar | null;

 @Output() selectedMonthChange = new EventEmitter<Calendar | null>(); 

  selectMonth(cal : Calendar) {
    this.selectedMonth = cal;
    this.selectedMonthChange.emit(cal); 
  }


  

  toggleMonth(month: Calendar) {
    this.selectedMonth = (this.selectedMonth === month) ? null : month;
    this.selectedMonthChange.emit(this.selectedMonth); // Émet le mois sélectionné ou null
  }
  
  

}
