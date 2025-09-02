import { computed, Directive, input } from '@angular/core';
import { cn } from '@lib/utils/cn';
import * as SheetPrimitive from 'ng-primitives/dialog';

@Directive({
  selector: '[ui-sheet]',
  exportAs: 'ui-sheet',
  hostDirectives: [
    {
      directive: SheetPrimitive.NgpDialog,
      inputs: ['ngpDialogRole: role', 'ngpDialogModal: modal'],
    },
  ],
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
    '[attr.side]': 'side()',
  },
})
class Sheet {
  class = input<string>('');
  slot = input<string>('sheet');
  side = input<'top' | 'right' | 'bottom' | 'left'>('right');

  className = computed(() =>
    cn(
      `bg-background data-[enter]:animate-in data-[exit]:animate-out 
      fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out 
      data-[exit]:duration-300 data-[enter]:duration-500`,
      this.side() === 'right' &&
        `data-[exit]:slide-out-to-right data-[enter]:slide-in-from-right 
        inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm`,
      this.side() === 'left' &&
        `data-[exit]:slide-out-to-left data-[enter]:slide-in-from-left 
        inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm`,
      this.side() === 'top' &&
        `data-[exit]:slide-out-to-top data-[enter]:slide-in-from-top 
        inset-x-0 top-0 h-auto border-b`,
      this.side() === 'bottom' &&
        `data-[exit]:slide-out-to-bottom data-[enter]:slide-in-from-bottom 
        inset-x-0 bottom-0 h-auto border-t`,
      this.class()
    )
  );

  constructor() {}
}

@Directive({
  selector: '[ui-sheet-header]',
  exportAs: 'ui-sheet-header',
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
})
class SheetHeader {
  class = input<string>('');
  slot = input<string>('sheet-header');

  className = computed(() => cn('flex flex-col gap-1.5 p-4', this.class()));
  constructor() {}
}

@Directive({
  selector: '[ui-sheet-title]',
  exportAs: 'ui-sheet-title',
  hostDirectives: [
    {
      directive: SheetPrimitive.NgpDialogTitle,
    },
  ],
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
})
class SheetTitle {
  class = input<string>('');
  slot = input<string>('sheet-title');

  className = computed(() => cn('text-foreground font-semibold', this.class()));
  constructor() {}
}

@Directive({
  selector: '[ui-sheet-description]',
  exportAs: 'ui-sheet-description',
  hostDirectives: [
    {
      directive: SheetPrimitive.NgpDialogDescription,
    },
  ],
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
})
class SheetDescription {
  class = input<string>('');
  slot = input<string>('sheet-description');

  className = computed(() => cn('text-muted-foreground text-sm', this.class()));
  constructor() {}
}

@Directive({
  selector: '[ui-sheet-footer]',
  exportAs: 'ui-sheet-footer',
  hostDirectives: [
    {
      directive: SheetPrimitive.NgpDialogDescription,
    },
  ],
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
})
class SheetFooter {
  class = input<string>('');
  slot = input<string>('sheet-footer');

  className = computed(() => cn('mt-auto flex flex-col gap-2 p-4', this.class()));
  constructor() {}
}

@Directive({
  selector: '[ui-sheet-trigger]',
  exportAs: 'ui-sheet-trigger',
  hostDirectives: [
    {
      directive: SheetPrimitive.NgpDialogTrigger,
      inputs: ['ngpDialogTrigger: sheetTrigger', 'ngpDialogTriggerCloseOnEscape: closeOnEscape'],
    },
  ],
  host: {
    '[attr.data-slot]': 'slot()',
  },
})
class SheetTrigger {
  slot = input<string>('sheet-trigger');

  constructor() {}
}

@Directive({
  selector: '[ui-sheet-overlay]',
  exportAs: 'ui-sheet-overlay',
  hostDirectives: [
    {
      directive: SheetPrimitive.NgpDialogOverlay,
      inputs: ['ngpDialogOverlayCloseOnClick: closeOnClick'],
    },
  ],
  host: {
    '[attr.data-slot]': 'slot()',
    '[class]': 'className()',
  },
})
class SheetOverlay {
  class = input<string>('');
  slot = input<string>('sheet-overlay');
  className = computed(() =>
    cn(
      'data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
      this.class()
    )
  );

  constructor() {}
}

export {
  Sheet,
  SheetOverlay,
  SheetTrigger,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
