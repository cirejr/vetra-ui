import { computed, Directive, input, signal } from '@angular/core';
import { cn } from '@lib/utils/cn';

@Directive({
  selector: '[gridContainer]',
  host: {
    '[class]': 'className()',
  },
})
export class GridContainer {
  class = input<string>('');
  direction = input<'full' | 'to-left' | 'to-right'>('full');

  private topDirectionClass = computed(() => {
    switch (this.direction()) {
      case 'full':
        return 'before:-left-[100vw]';
      case 'to-left':
        return 'before:right-0';
      case 'to-right':
        return 'before:left-0';
      default:
        return '';
    }
  });

  private bottomDirectionClass = computed(() => {
    switch (this.direction()) {
      case 'full':
        return 'after:-left-[100vw]';
      case 'to-left':
        return 'after:right-0';
      case 'to-right':
        return 'after:left-0';
      default:
        return '';
    }
  });

  className = computed(() =>
    cn(
      this.class(),
      'relative',
      'before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10',
      this.topDirectionClass(),
      'after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10',
      this.bottomDirectionClass()
    )
  );

  constructor() {}
}
