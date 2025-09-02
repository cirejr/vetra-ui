import { Component } from '@angular/core';
import { Listbox, ListboxOption, ListboxHeader } from '@lib/components/listbox/listbox';

@Component({
  selector: 'app-listbox-demo',
  imports: [Listbox, ListboxOption, ListboxHeader],
  template: `
    <ui-listbox aria-label="Select a country" mode="multiple">
      <header ui-listbox-header>Numbers</header>
      <ui-listbox-option value="One">One</ui-listbox-option>
      <ui-listbox-option value="Two" disabled="true">Two</ui-listbox-option>
      <ui-listbox-option value="Three">Three</ui-listbox-option>
    </ui-listbox>
  `,
})
export default class ListboxDemo {}
