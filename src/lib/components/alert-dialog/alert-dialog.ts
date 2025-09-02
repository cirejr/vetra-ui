import { computed, Directive, input } from '@angular/core';
import { cn } from '@lib/utils/cn';
import * as AlertDialogPrimitive from 'ng-primitives/dialog';

@Directive({
  selector: '[ui-alert-dialog]',
  exportAs: 'ui-alert-dialog',
  hostDirectives: [
    {
      directive: AlertDialogPrimitive.NgpDialog,
      inputs: ['ngpDialogRole: role', 'ngpDialogModal: modal'],
    },
  ],
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
})
class AlertDialog {
  class = input<string>('');
  slot = input<string>('alert-dialog');

  className = computed(() =>
    cn(
      'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',
      this.class()
    )
  );
  constructor() {}
}

@Directive({
  selector: '[ui-alert-dialog-header]',
  exportAs: 'ui-alert-dialog-header',
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
})
class AlertDialogHeader {
  class = input<string>('');
  slot = input<string>('alert-dialog-header');

  className = computed(() => cn('flex flex-col gap-2 text-center sm:text-left', this.class()));
  constructor() {}
}

@Directive({
  selector: '[ui-alert-dialog-title]',
  exportAs: 'ui-alert-dialog-title',
  hostDirectives: [
    {
      directive: AlertDialogPrimitive.NgpDialogTitle,
    },
  ],
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
})
class AlertDialogTitle {
  class = input<string>('');
  slot = input<string>('alert-dialog-title');

  className = computed(() => cn('text-lg font-semibold', this.class()));
  constructor() {}
}

@Directive({
  selector: '[ui-alert-dialog-description]',
  exportAs: 'ui-alert-dialog-description',
  hostDirectives: [
    {
      directive: AlertDialogPrimitive.NgpDialogDescription,
    },
  ],
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
})
class AlertDialogDescription {
  class = input<string>('');
  slot = input<string>('alert-dialog-description');

  className = computed(() => cn('text-muted-foreground text-sm', this.class()));
  constructor() {}
}

@Directive({
  selector: '[ui-alert-dialog-footer]',
  exportAs: 'ui-alert-dialog-footer',
  hostDirectives: [
    {
      directive: AlertDialogPrimitive.NgpDialogDescription,
    },
  ],
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
})
class AlertDialogFooter {
  class = input<string>('');
  slot = input<string>('alert-dialog-footer');

  className = computed(() =>
    cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', this.class())
  );
  constructor() {}
}

@Directive({
  selector: '[ui-alert-dialog-trigger]',
  exportAs: 'ui-alert-dialog-trigger',
  hostDirectives: [
    {
      directive: AlertDialogPrimitive.NgpDialogTrigger,
      inputs: ['ngpDialogTrigger: dialogTrigger', 'ngpDialogTriggerCloseOnEscape: closeOnEscape'],
    },
  ],
  host: {
    '[attr.data-slot]': 'slot()',
  },
})
class AlertDialogTrigger {
  slot = input<string>('alert-dialog-trigger');

  constructor() {}
}

@Directive({
  selector: '[ui-alert-dialog-overlay]',
  exportAs: 'ui-alert-dialog-overlay',
  hostDirectives: [
    {
      directive: AlertDialogPrimitive.NgpDialogOverlay,
      inputs: ['ngpDialogOverlayCloseOnClick: closeOnClick'],
    },
  ],
  host: {
    '[attr.data-slot]': 'slot()',
    '[class]': 'className()',
  },
})
class AlertDialogOverlay {
  class = input<string>('');
  slot = input<string>('alert-dialog-overlay');
  className = computed(() =>
    cn(
      'data-[enter]:animate-slide-in data-[exit]:animate-slide-out data-[exit]:animate-fade-out data-[enter]:animate-fade-in fixed inset-0 z-50 bg-black/50',
      this.class()
    )
  );

  constructor() {}
}

export {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
};
