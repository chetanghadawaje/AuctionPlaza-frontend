import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BidlistComponent } from '../../components/bidlist/bidlist.component';

@Component({
  selector: 'app-live-bid',
  standalone: true,
  imports: [HeaderComponent, BidlistComponent],
  templateUrl: './live-bid.component.html',
  styleUrl: './live-bid.component.css'
})
export class LiveBidComponent {

}
