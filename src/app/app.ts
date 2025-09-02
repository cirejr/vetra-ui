import { Component, model, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridContainer } from 'src/directives/grid-container';
import { CardDemo } from 'src/components/demos/card-demo/card-demo';
import { TableDemo } from 'src/components/demos/table-demo/table-demo';
import { ButtonDemo } from 'src/components/demos/button/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@lib/components/accordion/accordion';
import { AvatarDemo } from 'src/components/demos/avatar-demo/avatar-demo';
import { SelectDemo } from 'src/components/demos/select-demo/select-demo';
import { DefaultSelectDemo } from 'src/components/demos/default-select-demo/default-select-demo';
import { DefaultSelect } from '@lib/components/default-select/default-select';
import ListboxDemo from 'src/components/demos/listbox-demo/listbox-demo';
import { PopoverDemo } from 'src/components/demos/popover-demo/popover-demo';

@Component({
  selector: 'app-root',
  imports: [
    GridContainer,
    ButtonDemo,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    AvatarDemo,
    SelectDemo,
    DefaultSelect,
    ListboxDemo,
    PopoverDemo,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('vetra-ui');

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
