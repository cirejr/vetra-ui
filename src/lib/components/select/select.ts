import { Component, Input, input, Optional, signal, TemplateRef, ViewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixCheckLine, remixArrowDownSLine } from '@ng-icons/remixicon';
import { NgpButton } from 'ng-primitives/button';
import { NgpDescription, NgpFormField, NgpLabel } from 'ng-primitives/form-field';
import { NgpListbox, NgpListboxOption, NgpListboxTrigger } from 'ng-primitives/listbox';
import { NgpPopover, NgpPopoverTrigger } from 'ng-primitives/popover';

@Component({
  selector: 'ui-select-item',
  imports: [NgpPopover, NgpListboxOption, NgIcon],
  providers: [provideIcons({ remixCheckLine })],
  template: `<div
    class="flex h-9 w-full cursor-pointer items-center gap-2 rounded-lg px-3 text-[14px] text-gray-600 transition-colors hover:bg-gray-50 data-[active]:bg-gray-100 data-[press]:bg-gray-100 dark:text-gray-100 dark:text-gray-300 dark:hover:bg-white/5 dark:data-[active]:bg-white/10 dark:data-[press]:bg-white/10"
    #listboxOption="ngpListboxOption"
    [ngpListboxOptionValue]="option"
    ngpListboxOption
  >
    <ng-icon
      class="opacity-0 transition-opacity"
      [class.opacity-100]="listboxOption.selected()"
      name="remixCheckLine"
      size="16px"
    />
    <ng-content />
  </div>`,
})
export class SelectItem {
  option = input<any>();
}
@Component({
  selector: 'ui-select-content',
  imports: [NgpPopover, NgpListbox],
  template: `
    <div
      class="absolute z-[1001] mt-1 w-[300px] rounded-xl border border-gray-200 bg-white p-1 outline-none dark:border-gray-700 dark:bg-black"
      [ngpListboxValue]="selection()"
      ngpPopover
      ngpListbox
      aria-label="Characters"
    >
      <ng-content></ng-content>
    </div>
  `,
})
export class SelectContent {
  readonly selection = input<unknown[]>([]);
}

@Component({
  selector: 'ui-select-trigger',
  imports: [NgpPopoverTrigger],
  template: `
    <button [ngpPopoverTrigger]="dropdown" ngpButton ngpListboxTrigger>
      <ng-content />
    </button>
  `,
})
export class SelectTrigger {
  @Input() dropdown!: TemplateRef<any>;
}

@Component({
  selector: 'ui-select',
  template: `
    <ng-content select="ui-select-trigger"></ng-content>
    <ng-template #dropdown>
      <ng-content select="ui-select-content"></ng-content>
    </ng-template>
  `,
})
export class Select {
  @ViewChild('dropdown', { static: true }) dropdown!: TemplateRef<any>;
}
