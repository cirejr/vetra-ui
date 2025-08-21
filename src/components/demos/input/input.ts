import { Component } from '@angular/core';
import { Button } from '@lib/components/button/button';
import { Input } from '@lib/components/input/input';
import { Label } from '@lib/components/label/label';

@Component({
  selector: 'app-input',
  imports: [Input, Label, Button],
  template: `<section class="flex flex-col gap-1.5 w-full">
    <input ui-input placeholder="Email" class="max-w-sm" />
    <div class="flex w-full max-w-3xl items-center gap-2">
      <input ui-input type="email" placeholder="Email" class="max-w-sm" />
      <button ui-button type="submit" variant="outline">Subscribe</button>
    </div>
    <div class="grid w-full max-w-sm items-center gap-3">
      <label ui-label htmlFor="picture">Picture</label>
      <input ui-input id="picture" type="file" />
    </div>
  </section> `,
  styleUrl: './input.css',
})
export class InputDemo {}
