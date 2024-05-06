import { Component, OnInit } from '@angular/core';
import { Calendar } from './calendar/calendar';
import { MONTHS } from './calendar/calendar-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedMonth: Calendar | null = MONTHS[0]; // Initialiser avec le mois de janvier

  ngOnInit() {
    // Autres initialisations si nécessaires
  }

  onMonthSelected(month: Calendar | null) {
    this.selectedMonth = month; // Met à jour le mois sélectionné
  }

}
