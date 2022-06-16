import { Component, OnInit } from '@angular/core';
import { CardStore } from '../CardStore';
import { ListSchema } from '../ListSchema';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  cardStore: CardStore;
  lists: ListSchema[];
  constructor() { }
  setMockData(): void {
    this.cardStore = new CardStore();
    
    const lists1: ListSchema[] = [
      {
        name: 'Open',
        cards: [ 
          this.cardStore.newCard(871, 'Auris TR345', 'Ahmed', '+91 9999999999', 'GP-LCVUZK-683', 'VIDYUT', new Date(), 799.05, 299, 'Open'),
          this.cardStore.newCard(870, 'Abarth OTHERS PETROL 1234ASDVVIUY', 'Nader', '+91 9999999999', 'GP-LCVUZK-683', 'VIDYUT', new Date(), 799.05, 142.49, 'Open'),
          this.cardStore.newCard(869, 'Abarth OTHERS PETROL 1234ASDVVIUY', 'Nader', '+91 9999999999', 'GP-LCVUZK-683', 'VIDYUT', new Date(), 799.05, 142.49, 'Open'),
        ]
      },
      {
        name: 'WIP',
        cards: [ this.cardStore.newCard(868, 'Abarth OTHERS PETROL 1234ASDVVIUY', 'Nader', '+91 9999999999', 'GP-LCVUZK-683', 'VIDYUT', new Date(), 799.05, 142.49, 'WIP'),]
      },
      {
        name: 'Ready',
        cards: [ this.cardStore.newCard(867, 'Abarth OTHERS PETROL 1234ASDVVIUY', 'Nader', '+91 9999999999', 'GP-LCVUZK-683', 'VIDYUT', new Date(), 799.05, 142.49, 'Ready'),
        this.cardStore.newCard(866, 'Abarth OTHERS PETROL 1234ASDVVIUY', 'Nader', '+91 9999999999', 'GP-LCVUZK-683', 'VIDYUT', new Date(), 799.05, 142.49, 'Ready'),]
      },
      {
        name: 'Payment Due',
        cards: [ 
          this.cardStore.newCard(865, 'Abarth OTHERS PETROL 1234ASDVVIUY', 'Nader', '+91 9999999999', 'GP-LCVUZK-683', 'VIDYUT', new Date(), 799.05, 142.49, 'Payment Due'),
          this.cardStore.newCard(864, 'Abarth OTHERS PETROL 1234ASDVVIUY', 'Nader', '+91 9999999999', 'GP-LCVUZK-683', 'VIDYUT', new Date(), 799.05, 142.49, 'Payment Due'),]
      }
    ]
    this.lists = lists1;
  }

  ngOnInit() {
    this.setMockData();
  }

}