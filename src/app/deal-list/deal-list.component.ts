import { Component, OnInit } from '@angular/core';
import Deal from '../deal';
import { DealService } from '../deal.service';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.css']
})
export class DealListComponent implements OnInit {
  deals: Deal[];
  selectedDeal: Deal;

  constructor(private dealService:DealService) { }

  ngOnInit(): void {
    this.dealService.GetDeals().subscribe(Deals => this.deals = Deals);
  }
  selectDeal(deal:Deal){
    this.selectedDeal = deal;
  }
  private getIndexOfDeal = (dealId : number)=>{
    return this.deals.findIndex((deal)=>{
      return deal.id === dealId;
    })
  }

  createNewDeal():void{
    let date= new Date()
    var deal:Deal = {
      img : "",
      dateDebut : date,
      dateFin : date
    };
    this.selectDeal(deal);
  }

  deleteDeal=(dealId:number)=>{
    var idx=this.getIndexOfDeal(dealId);
    if(idx !== -1){
      this.deals.splice(idx,1);
      this.selectDeal(null);
    }
    return this.deals;
  }

  addDeal = (deal:Deal)=>{
    this.deals.push(deal);
    this.selectDeal(deal);
    return this.deals;
  }
  
  updateDeal = (deal:Deal)=>{
    var idx=this.getIndexOfDeal(deal.id);
    if (idx !== -1){
      this.deals[idx]=deal;
      this.selectDeal(deal);
    }
    return this.deals;
  }

}
