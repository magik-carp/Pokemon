import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-places-info',
  templateUrl: './places-info.component.html',
  styleUrls: ['./places-info.component.scss'],
})
export class PlacesInfoComponent implements OnInit {
  constructor(public dataService: DataService) {}

  ngOnInit(): void {}
}
