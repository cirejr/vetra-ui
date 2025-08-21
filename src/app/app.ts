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

@Component({
  selector: 'app-root',
  imports: [
    GridContainer,
    CardDemo,
    TableDemo,
    ButtonDemo,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('vetra-ui');
}
