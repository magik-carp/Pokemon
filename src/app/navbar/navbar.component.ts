import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  navButtons = [
    { link: '/', names: 'Pokémon' },
    { link: '/pallet-town', names: 'Pallet Town' },
    { link: '/Towns-cities', names: 'Towns/Cities' },
    { link: '/special-encounters', names: 'Special Encounters' },
    { link: '/gyms', names: 'Gyms' },
    { link: '/eliet4', names: 'Eliet 4' },
  ];

  ngOnInit(): void {}
}
