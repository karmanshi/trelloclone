import { Attribute, Component, HostListener, Input, OnInit } from "@angular/core";
import { ListSchema } from "../ListSchema";
import { CardStore } from "../CardStore";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  @Input() list: ListSchema;
  @Input() cardStore: CardStore;
  displayAddCard = false;
  constructor() {}
  toggleDisplayAddCard() {
    this.displayAddCard = !this.displayAddCard;
  }
  ngOnInit(): void {
    //this.initializeData();
  }
  allowDrop($event) {
    $event.preventDefault();
  }
  drop($event) {    
    $event.preventDefault();
    const status = $event.dataTransfer.getData("status");
    const data = $event.dataTransfer.getData("text");
    //alert(data)
    let target = $event.target;
    var targetClassName = target.className;
    //alert(targetClassName)
    let target1 = $event.target;

    while (targetClassName != 'list_title' && target1 && target1.className !== "card shadowed-box rounded") {     
      targetClassName = target1.className;     
      target1 = target1.parentNode;
    }
    //console.log(this.list.class)
   
    while (target.className !== "list") {
      target = target.parentNode;
    }
    //alert(status + ' ' + this.list.name + ' ' + targetClassName)
    target = target.querySelector(".cards");
    if ((status == 'Open' && this.list.name === 'WIP' && targetClassName == 'card shadowed-box rounded') ||(status == 'WIP' && this.list.name === 'Ready' && targetClassName == 'card shadowed-box rounded') ||(status == 'Ready' && this.list.name === 'Payment Due' && targetClassName == 'card shadowed-box rounded')){
      target1.parentNode.insertBefore(
        document.getElementById(data),
        target1
      );
      this.cardStore._updateCard(data, this.list.name);
    } else if ((status == 'Open' && this.list.name === 'WIP' && (targetClassName == 'list_title' || targetClassName == 'list')) ||(status == 'WIP' && this.list.name === 'Ready' && (targetClassName == 'list_title' || targetClassName == 'list')) ||(status == 'Ready' && this.list.name === 'Payment Due' && (targetClassName == 'list_title' || targetClassName == 'list'))){
      //alert('2')
      if (target.children.length) {
        target.insertBefore(document.getElementById(data), target.children[0]);
        this.cardStore._updateCard(data, this.list.name);
      } else {
        target.appendChild(document.getElementById(data)+ '<br>');
        this.cardStore._updateCard(data, this.list.name);
      }
    } 
    else if ((status == 'Open' && this.list.name === 'WIP') ||(status == 'WIP' && this.list.name === 'Ready') ||(status == 'Ready' && this.list.name === 'Payment Due')){
      //alert('3')
      target.appendChild(document.getElementById(data));
      this.cardStore._updateCard(data, this.list.name);
    }
    
  }
  onEnter(value: string) {
    //const cardId = this.cardStore.newCard(value);

    //this.list.cards.push(cardId);
  }
  initializeData() {
    var cardId = '';
    cardId = this.cardStore.newCard(871, 'Auris TR345', 'Ahmed', '+91 9999999999', 'GP-LCVUZK-683', 'VIDYUT', new Date(), 799.05, 299, 'Open');
    
    this.list.cards.push(cardId);
  }
}
