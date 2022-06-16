import { supportsPassiveEventListeners } from '@angular/cdk/platform';
import { Component, ViewChild } from '@angular/core';

import { CardStore } from './CardStore';
import { BoardComponent } from './board/board.component';
import { ListSchema } from './ListSchema';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trelloclone';
  FilterText: string = '';  
  TotalDue : number = 0;
  @ViewChild(BoardComponent) board: BoardComponent;
  ngAfterViewInit() {
    const result = CardStore.cards.filter(card => card.CustomerName.toLowerCase().indexOf(this.FilterText.toLowerCase()) > -1 || card.PhoneNo.toString().indexOf(this.FilterText) > -1 || card.OrderNo.toString().indexOf(this.FilterText) > -1);
    this.SetData(result);
  }
  OnKeyPress(event: any){
    if (event.keyCode == 13){      
      console.log(CardStore.cards)
      const result = CardStore.cards.filter(card => card.CustomerName.toLowerCase().indexOf(this.FilterText.toLowerCase()) > -1 || card.PhoneNo.toString().indexOf(this.FilterText) > -1 || card.OrderNo.toString().indexOf(this.FilterText) > -1);
      this.SetData(result);
      
    }
  }
  SetData(result){
    this.TotalDue = 0;
    for (var i = 0; i < result.length; i++)
      {
        this.TotalDue += result[i].DueAmount;
      }
    var myList: ListSchema[] = [];
      var lst = new ListSchema();
      lst.name = 'Open';
      const result1 = result.filter(card => card.status == 'Open' );
      for (var i = 0; i < result1.length; i++)
      {
        lst.cards.push(result1[i].id);
      }
      myList.push(lst);

      var lst1 = new ListSchema();
      lst1.name = 'WIP';
      const result2 = result.filter(card => card.status == 'WIP' );
      for (var i = 0; i < result2.length; i++)
      {
        lst1.cards.push(result2[i].id);
      }
      myList.push(lst1);

      var lst2 = new ListSchema();
      lst2.name = 'Ready';
      const result3 = result.filter(card => card.status == 'Ready' );
      for (var i = 0; i < result3.length; i++)
      {
        lst2.cards.push(result3[i].id);
      }
      myList.push(lst2);

      var lst3 = new ListSchema();
      lst3.name = 'Payment Due';
      const result4 = result.filter(card => card.status == 'Payment Due' );
      for (var i = 0; i < result4.length; i++)
      {
        lst3.cards.push(result4[i].id);
      }
      myList.push(lst3);
      this.board.lists = myList;
      console.log(this.board.lists)
  }
  Sort(fieldName: string, sortOrder: string){
    if ((fieldName == 'OrderNo') && (sortOrder == 'Asc')){
      var result = CardStore.cards.filter(card => card.CustomerName.toLowerCase().indexOf(this.FilterText.toLowerCase()) > -1 || card.PhoneNo.toString().indexOf(this.FilterText) > -1 || card.OrderNo.toString().indexOf(this.FilterText) > -1);
      result = result.sort(this.compareOrderNo);
      this.SetData(result);
    }
    else if ((fieldName == 'OrderNo') && (sortOrder == 'Desc')){
      var result = CardStore.cards.filter(card => card.CustomerName.toLowerCase().indexOf(this.FilterText.toLowerCase()) > -1 || card.PhoneNo.toString().indexOf(this.FilterText) > -1 || card.OrderNo.toString().indexOf(this.FilterText) > -1);
      result = result.sort(this.compareOrderNoDesc);
      this.SetData(result);
    }
    else if ((fieldName == 'CustomerName') && (sortOrder == 'Asc')){
      var result = CardStore.cards.filter(card => card.CustomerName.toLowerCase().indexOf(this.FilterText.toLowerCase()) > -1 || card.PhoneNo.toString().indexOf(this.FilterText) > -1 || card.OrderNo.toString().indexOf(this.FilterText) > -1);
      result = result.sort(this.compareCustomerName);
      this.SetData(result);
    }
    else if ((fieldName == 'CustomerName') && (sortOrder == 'Desc')){
      var result = CardStore.cards.filter(card => card.CustomerName.toLowerCase().indexOf(this.FilterText.toLowerCase()) > -1 || card.PhoneNo.toString().indexOf(this.FilterText) > -1 || card.OrderNo.toString().indexOf(this.FilterText) > -1);
      result = result.sort(this.compareCustomerNameDesc);
      this.SetData(result);
    }
  }
  compareOrderNo( a, b ) {
    if ( a.OrderNo < b.OrderNo ){
      return -1;
    }
    if ( a.OrderNo > b.OrderNo ){
      return 1;
    }
    return 0;
  }
  compareOrderNoDesc( a, b ) {
    if ( a.OrderNo > b.OrderNo ){
      return -1;
    }
    if ( a.OrderNo < b.OrderNo ){
      return 1;
    }
    return 0;
  }
  compareCustomerName( a, b ) {
    if ( a.CustomerName.toLowerCase() < b.CustomerName.toLowerCase() ){
      return -1;
    }
    if ( a.CustomerName.toLowerCase() > b.CustomerName.toLowerCase() ){
      return 1;
    }
    return 0;
  }
  compareCustomerNameDesc( a, b ) {
    if ( a.CustomerName.toLowerCase() > b.CustomerName.toLowerCase() ){
      return -1;
    }
    if ( a.CustomerName.toLowerCase() < b.CustomerName.toLowerCase() ){
      return 1;
    }
    return 0;
  }  
}
