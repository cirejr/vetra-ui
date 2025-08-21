import { Component } from '@angular/core';
import { Textarea } from '@lib/components/textarea/textarea';
import { Label } from '@lib/components/label/label';

@Component({
  selector: 'app-textarea-demo',
  imports: [Textarea, Label],
  template: `
    <section class="flex flex-col gap-1.5 w-full">
      <div class="grid max-w-sm gap-3">
        <label ui-label htmlFor="message">Your message</label>
        <textarea ui-textarea placeholder="Type your message here." id="message"></textarea>
      </div>
    </section>
  `,
  styleUrl: './textarea-demo.css',
})
export class TextareaDemo {}
