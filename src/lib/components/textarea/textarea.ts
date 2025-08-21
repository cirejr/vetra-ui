import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { cn } from '@lib/utils/cn';

@Component({
  selector: 'textarea[ui-textarea]',
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  styleUrl: './textarea.css',
})
export class Textarea {
  class = input<string>('');
  slot = input<string>('textarea');

  className = computed(() =>
    cn(
      'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      this.class()
    )
  );
}
