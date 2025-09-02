import { BooleanInput } from '@angular/cdk/coercion';
import { booleanAttribute, Component, input, model, signal } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixArrowDownSLine } from '@ng-icons/remixicon';
import {
  NgpSelect,
  NgpSelectDropdown,
  NgpSelectOption,
  NgpSelectPortal,
} from 'ng-primitives/select';
import { ChangeFn, provideValueAccessor, TouchedFn } from 'ng-primitives/utils';

@Component({
  selector: 'app-default-select',
  imports: [NgpSelect, NgpSelectDropdown, NgpSelectOption, NgpSelectPortal, NgIcon],
  providers: [provideIcons({ remixArrowDownSLine }), provideValueAccessor(DefaultSelect)],
  template: `
    <div
      [(ngpSelectValue)]="value"
      [ngpSelectDisabled]="disabled() || formDisabled()"
      (ngpSelectValueChange)="onValueChange($event)"
      ngpSelect
    >
      @if (value(); as value) {
      <span class="select-value">{{ value }}</span>
      } @else {
      <span class="select-placeholder">{{ placeholder() }}</span>
      }

      <ng-icon name="remixArrowDownSLine" />

      <div *ngpSelectPortal ngpSelectDropdown>
        @for (option of options(); track option) {
        <div [ngpSelectOptionValue]="option" ngpSelectOption>
          {{ option }}
        </div>
        } @empty {
        <div class="empty-message">No options found</div>
        }
      </div>
    </div>
  `,
  styleUrl: './default-select.css',
})
export class DefaultSelect implements ControlValueAccessor {
  /** The options for the select. */
  readonly options = input<string[]>([]);

  /** The selected value. */
  readonly value = model<string | undefined>();

  /** The placeholder for the input. */
  readonly placeholder = input<string>('');

  /** The disabled state of the select. */
  readonly disabled = input<boolean, BooleanInput>(false, {
    transform: booleanAttribute,
  });

  /** Store the form disabled state */
  protected readonly formDisabled = signal(false);

  /** The on change callback */
  private onChange?: ChangeFn<string>;

  /** The on touch callback */
  protected onTouched?: TouchedFn;

  writeValue(value: string | undefined): void {
    this.value.set(value);
  }

  registerOnChange(fn: ChangeFn<string | undefined>): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: TouchedFn): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.formDisabled.set(isDisabled);
  }

  protected onValueChange(value: string): void {
    this.onChange?.(value);
  }
}
