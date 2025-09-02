import { Component, signal } from '@angular/core';
import { Label } from '@lib/components/label/label';
import { NgpDescription } from 'ng-primitives/form-field';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@lib/components/select/select';

@Component({
  selector: 'app-select-demo',
  imports: [NgpDescription, Label, SelectContent, SelectItem, SelectTrigger, Select],
  template: ` <ui-select #select>
      <ui-select-trigger [dropdown]="select.dropdown"> Choose </ui-select-trigger>
      <ui-select-content>
        @for (option of options; track option.id) {
        <ui-select-item [option]="option">{{ option.name }}</ui-select-item>
        }
      </ui-select-content>
    </ui-select>

    >`,
})
export class SelectDemo {
  readonly options: Option[] = [
    { id: 1, name: 'Marty McFly' },
    { id: 2, name: 'Doc Brown' },
    { id: 3, name: 'Biff Tannen' },
    { id: 4, name: 'Lorraine Baines' },
    { id: 5, name: 'George McFly' },
  ];

  readonly selection = signal<Option[]>([this.options[0]]);
}

interface Option {
  id: number;
  name: string;
}
