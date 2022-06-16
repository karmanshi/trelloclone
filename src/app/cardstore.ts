import { CardSchema } from "./cardschema";
export class CardStore {
  static cards: any[] = [];
  lastid = -1;
  _addCard(card: CardSchema) {
    card.id = String(++this.lastid);
    CardStore.cards[card.id] = card;
    return card.id;
  }
  _updateCard(id: string, status: string) {    
    CardStore.cards[id].status = status;    
  }
  getCard(cardId: string) {
    return CardStore.cards[cardId];
  }
  getCards() {
    return CardStore.cards;
  }
  newCard(OrderNo: number,
    CarModel: string,
    CustomerName: string,
    PhoneNo: string,
    InvoiceNo: string,
    CreatedBy: string,
    CompletionDate: Date,
    TotalAmount: number,
    DueAmount: number,
    status: string): string {
    const card = new CardSchema();
    card.OrderNo = OrderNo;
    card.CarModel = CarModel;
    card.CustomerName = CustomerName;
    card.PhoneNo = PhoneNo;
    card.InvoiceNo = InvoiceNo;
    card.CreatedBy = CreatedBy;
    card.CompletionDate = CompletionDate;
    card.TotalAmount = TotalAmount;
    card.DueAmount = DueAmount;
    card.status = status;
    return this._addCard(card);
  }
}
