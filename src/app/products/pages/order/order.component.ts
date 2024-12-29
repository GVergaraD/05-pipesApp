import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  public isUppercase: boolean = false;
  public sortBy: keyof Hero | null = 'name';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },{
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },{
      name: 'Robin',
      canFly: false,
      color: Color.red
    },{
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    }
  ];

  toogleUpperCase(): void {
    this.isUppercase = !this.isUppercase;
  }

  changeOrder(value: keyof Hero): void {
    this.sortBy = value;
  }

}
