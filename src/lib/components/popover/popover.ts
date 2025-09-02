import { Component, computed } from '@angular/core';
import { injectPopoverContext, NgpPopover } from 'ng-primitives/popover';

import { Directive, input } from '@angular/core';
import { injectPopoverTriggerState } from 'ng-primitives/popover';
import { NgpPopoverTrigger } from 'ng-primitives/popover';
import { cn } from '@lib/utils/cn';

@Directive({
  selector: '[ui-popover-trigger]',
  hostDirectives: [
    {
      directive: NgpPopoverTrigger,
      inputs: [
        'ngpPopoverTriggerDisabled:uiPopoverTriggerDisabled',
        'ngpPopoverTriggerPlacement:uiPopoverTriggerPlacement',
        'ngpPopoverTriggerOffset:uiPopoverTriggerOffset',
        'ngpPopoverTriggerShowDelay:uiPopoverTriggerShowDelay',
        'ngpPopoverTriggerHideDelay:uiPopoverTriggerHideDelay',
        'ngpPopoverTriggerFlip:uiPopoverTriggerFlip',
        'ngpPopoverTriggerContainer:uiPopoverTriggerContainer',
        'ngpPopoverTriggerCloseOnOutsideClick:uiPopoverTriggerCloseOnOutsideClick',
        'ngpPopoverTriggerCloseOnEscape:uiPopoverTriggerCloseOnEscape',
        'ngpPopoverTriggerScrollBehavior:uiPopoverTriggerScrollBehavior',
        'ngpPopoverTriggerContext:ui-popover-trigger',
      ],
    },
  ],
})
export class PopoverTrigger {
  /** Access the popover trigger */
  private readonly popoverTrigger = injectPopoverTriggerState();

  constructor() {
    this.popoverTrigger().popover.set(Popover);
  }
}

@Component({
  selector: 'ui-popover',
  hostDirectives: [NgpPopover],
  host: {
    '[class]': 'className()',
  },
  template: `{{ content() }} `,
  styles: `
/* These styles rely on CSS variables that can be imported from ng-primitives/example-theme/index.css in your global styles */

    :host {
      position: absolute;
      max-width: 16rem;
      border-radius: 0.5rem;
      background-color: var(--popover);
      padding: 0.5rem 0.75rem;
      border: none;
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--ngp-text);
      transform-origin: var(--ngp-popover-transform-origin);
    }

    :host[data-enter] {
      animation: popover-show 200ms ease-in-out;
    }

    :host[data-exit] {
      animation: popover-hide 200ms ease-in-out;
    }

    @keyframes popover-show {
      0% {
        opacity: 0;
        transform: scale(0.5);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes popover-hide {
      0% {
        opacity: 1;
        transform: scale(1);
      }
      100% {
        opacity: 0;
        transform: scale(0.5);
      }
    }
  `,
})
export class Popover {
  readonly content = injectPopoverContext();
  class = input<string>('');
  className = computed(() =>
    cn(
      'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden',
      this.class()
    )
  );
}
