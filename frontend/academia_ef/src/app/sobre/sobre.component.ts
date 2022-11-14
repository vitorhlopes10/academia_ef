import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html'
})
export class SobreComponent implements OnInit {

  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Sobre' }];
  
  constructor() { }

  ngOnInit(): void {
  }
}
