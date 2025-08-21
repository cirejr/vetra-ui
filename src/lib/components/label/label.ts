import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { cn } from '@lib/utils/cn';

@Component({
  selector: 'label[ui-label]',
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  styleUrl: './label.css',
})
export class Label {
  class = input<string>('');
  slot = input<string>('label');

  className = computed(() =>
    cn(
      'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
      this.class()
    )
  );
}
