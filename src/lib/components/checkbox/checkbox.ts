import { Component, computed, input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { cn } from '@lib/utils/cn';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixCheckLine, remixSubtractLine } from '@ng-icons/remixicon';
import { injectCheckboxState, NgpCheckbox } from 'ng-primitives/checkbox';
import { ChangeFn, provideValueAccessor, TouchedFn } from 'ng-primitives/utils';

@Component({
  selector: 'app-checkbox',
  hostDirectives: [
    {
      directive: NgpCheckbox,
      inputs: [
        'ngpCheckboxChecked:checked',
        'ngpCheckboxIndeterminate:indeterminate',
        'ngpCheckboxDisabled:disabled',
      ],
      outputs: [
        'ngpCheckboxCheckedChange:checkedChange',
        'ngpCheckboxIndeterminateChange:indeterminateChange',
      ],
    },
  ],
  providers: [
    provideValueAccessor(UICheckbox),
    provideIcons({ remixCheckLine, remixSubtractLine }),
  ],
  imports: [NgIcon],
  template: `
    @if(state().checked()) {
    <ng-icon name="remixCheckLine" />
    }
  `,
  host: {
    '(focusout)': 'onTouchedFn?.()',
    '[class]': 'className()',
  },
})
export class UICheckbox implements ControlValueAccessor {
  class = input<string>('');

  className = computed(() =>
    cn(
      'flex w-5 h-5 pointer items-center justify-center radius-xs border hover:bg-accent peer border-input dark:bg-input/30 data-[checked]:bg-primary data-[checked]:text-primary-foreground dark:data-[checked]:bg-primary data-[checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
      this.class()
    )
  );
  /**
   * The checked state of the checkbox.
   */
  protected readonly state = injectCheckboxState();

  /**
   * The onChange function for the checkbox.
   */
  protected onChangeFn?: ChangeFn<boolean>;

  /**
   * The onTouched function for the checkbox.
   */
  protected onTouchedFn?: TouchedFn;

  constructor() {
    // Whenever the user interacts with the checkbox, call the onChange function with the new value.
    this.state().checkedChange.subscribe((checked) => this.onChangeFn?.(checked));
  }

  writeValue(checked: boolean): void {
    this.state().checked.set(checked);
  }

  registerOnChange(fn: ChangeFn<boolean>): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: TouchedFn): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.state().disabled.set(isDisabled);
  }
}
