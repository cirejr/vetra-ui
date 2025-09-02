import { BooleanInput } from '@angular/cdk/coercion';
import { booleanAttribute, Component, computed, input, model } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixArrowDownSLine, remixCheckLine } from '@ng-icons/remixicon';
import { NgpSelectionMode } from 'ng-primitives/common';
import {
  injectListboxState,
  NgpListbox,
  provideListboxState,
  NgpListboxHeader,
} from 'ng-primitives/listbox';
import { ChangeFn, provideValueAccessor, TouchedFn } from 'ng-primitives/utils';
import { NgpListboxOption } from 'ng-primitives/listbox';
import { cn } from '@lib/utils/cn';

@Component({
  selector: 'header[ui-listbox-header]',
  hostDirectives: [
    {
      directive: NgpListboxHeader,
    },
  ],
  host: {
    '[class]': 'className()',
  },
  imports: [NgpListboxHeader],
  providers: [provideIcons({ remixCheckLine })],
  template: ` <ng-content /> `,
})
export class ListboxHeader {
  class = input<string>('');
  className = computed(() => cn('text-muted-foreground px-2 py-1.5 text-xs', this.class()));
}

@Component({
  selector: 'ui-listbox-option',
  hostDirectives: [
    {
      directive: NgpListboxOption,
      inputs: ['id', 'ngpListboxOptionValue:value', 'ngpListboxOptionDisabled:disabled'],
    },
  ],
  host: {
    '[class]': 'className()',
  },
  imports: [NgIcon],
  providers: [provideIcons({ remixCheckLine })],
  template: `
    <span className="absolute right-2 flex size-3.5 items-center justify-center">
      <ng-icon name="remixCheckLine" class="size-4" />
    </span>
    <ng-content />
  `,
  styles: `
/* These styles rely on CSS variables that can be imported from ng-primitives/example-theme/index.css in your global styles */

    :host {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.375rem 0.75rem;
      cursor: pointer;
      border-radius: 0.5rem;
      width: 100%;
      height: 36px;
      box-sizing: border-box;
    }

    :host[data-hover] {
      background-color: var(--ngp-background-hover);
    }

    :host[data-press] {
      background-color: var(--ngp-background-active);
    }

    :host[data-active] {
      background-color: var(--ngp-background-active);
    }

    :host ng-icon {
      visibility: hidden;
    }

    :host[data-selected] ng-icon {
      visibility: visible;
    }
  `,
})
export class ListboxOption {
  class = input<string>('');
  className = computed(() =>
    cn(
      "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
      this.class()
    )
  );
}

@Component({
  selector: 'ui-listbox',
  providers: [
    provideIcons({ remixArrowDownSLine }),
    provideListboxState(),
    provideValueAccessor(Listbox),
  ],
  imports: [NgpListbox],
  template: `
    <div
      [(ngpListboxValue)]="value"
      [ngpListboxMode]="mode()"
      [ngpListboxDisabled]="disabled()"
      [ngpListboxCompareWith]="compareWith()"
      [attr.aria-label]="ariaLabel()"
      (ngpListboxValueChange)="onListboxValueChange($event)"
      ngpListbox
    >
      <ng-content />
    </div>
  `,
  styles: `
/* These styles rely on CSS variables that can be imported from ng-primitives/example-theme/index.css in your global styles */

    [ngpListbox] {
      background-color: var(--ngp-background);
      border: 1px solid var(--ngp-border);
      padding: 0.25rem;
      border-radius: 0.75rem;
      outline: none;
      width: var(--ngp-popover-trigger-width);
      box-sizing: border-box;
    }
  `,
  host: {
    '[attr.aria-label]': 'null',
  },
})
export class Listbox implements ControlValueAccessor {
  /**
   * Access the listbox state
   */
  protected readonly state = injectListboxState<NgpListbox<string>>();

  /**
   * The listbox mode.
   */
  readonly mode = input<NgpSelectionMode>('single');

  /**
   * The listbox value.
   */
  readonly value = model<string[]>([]);

  /**
   * The listbox disabled state.
   */
  readonly disabled = input<boolean, BooleanInput>(false, {
    transform: booleanAttribute,
  });

  /**
   * The comparator function to use when comparing values.
   */
  readonly compareWith = input<(a: string, b: string) => boolean>((a, b) => a === b);

  /**
   * The placeholder text.
   */
  readonly placeholder = input<string>('Select an option');

  /**
   * The aria-label attribute for the listbox.
   */
  readonly ariaLabel = input<string>('Listbox', {
    alias: 'aria-label',
  });

  /**
   * The onChange callback.
   */
  protected onChange?: ChangeFn<string[]>;

  /**
   * The onTouch callback.
   */
  protected onTouch?: TouchedFn;

  writeValue(value: string[]): void {
    this.state()?.value.set(value);
  }

  registerOnChange(fn: ChangeFn<string[]>): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: TouchedFn): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.state()?.disabled.set(isDisabled);
  }

  onListboxValueChange(value: string[]): void {
    this.value.set(value);
    if (this.onChange) this.onChange(value);
  }
}
