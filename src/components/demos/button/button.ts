import { Component } from '@angular/core';
import { Button } from '@lib/components/button/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixMailAddLine } from '@ng-icons/remixicon';

@Component({
  selector: 'app-button',
  imports: [NgIcon, Button],
  viewProviders: [provideIcons({ remixMailAddLine })],
  template: `
    <section class="flex items-center gap-1.5">
      <button ui-button size="lg">primary lg</button>
      <button ui-button variant="secondary">secondary</button>
      <button ui-button variant="ghost" size="lg">ghost</button>
      <button ui-button variant="destructive" size="sm">destructive sm</button>
      <button ui-button variant="link" size="lg" class="underline">link</button>
      <button ui-button variant="outline">outline</button>
      <button ui-button variant="outline">
        with icon
        <ng-icon name="remixMailAddLine" />
      </button>
      <a ui-button href="" variant="link">This is a link</a>
    </section>
  `,
  styleUrl: './button.css',
})
export class ButtonDemo {}
