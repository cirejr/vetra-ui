import { Component } from '@angular/core';
import { DefaultSelect } from '@lib/components/default-select/default-select';

@Component({
  selector: 'app-default-select-demo',
  imports: [DefaultSelect],
  template: ` <app-default-select [options]="options" placeholder="Select a character" /> `,
})
export class DefaultSelectDemo {
  readonly options: string[] = [
    'Marty McFly',
    'Doc Brown',
    'Biff Tannen',
    'George McFly',
    'Jennifer Parker',
    'Emmett Brown',
    'Einstein',
    'Clara Clayton',
    'Needles',
    'Goldie Wilson',
    'Marvin Berry',
    'Lorraine Baines',
    'Strickland',
  ];
}
