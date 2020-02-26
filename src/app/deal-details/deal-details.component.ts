import { Component, OnInit, Input } from '@angular/core';
import Deal from '../deal';
import { DealService } from '../deal.service';

@Component({
  selector: 'app-deal-details',
  templateUrl: './deal-details.component.html',
  styleUrls: ['./deal-details.component.css']
})
export class DealDetailsComponent implements OnInit {
  @Input() deal:Deal;
  @Input() createHandler: Function;
  @Input() updateHandler: Function;
  @Input() deleteHandler: Function;

  constructor(private DealService : DealService) { }

  ngOnInit(): void {
  }


  createDeal(deal:Deal){
    this.DealService.CreateDeal(deal).subscribe((NewDeal)=>{
      this.createHandler(NewDeal);
    })
  }

  updateDeal(deal:Deal){
    this.DealService.UpdateDeal(deal).subscribe((UpdateDeal)=>{
      this.updateHandler(UpdateDeal);
    })
  }

  deleteDeal(dealId:number):void{
    this.DealService.DeleteDeal(dealId).subscribe((DeleteDeal)=>{
      this.deleteHandler(DeleteDeal);
    })

  }

}
