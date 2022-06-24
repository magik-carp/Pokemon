import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gyms',
  templateUrl: './gyms.component.html',
  styleUrls: ['./gyms.component.scss'],
})
export class GymsComponent implements OnInit {
  constructor(public gymdata: DataService) {}

  ngOnInit(): void {}
}
