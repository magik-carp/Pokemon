import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gym-leaders',
  templateUrl: './gym-leaders.component.html',
  styleUrls: ['./gym-leaders.component.scss'],
})
export class GymLeadersComponent implements OnInit {
  constructor(public gyminfo: DataService) {}

  ngOnInit(): void {}
}
