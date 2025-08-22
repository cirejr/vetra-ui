import { Component, computed, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixArrowDownSLine } from '@ng-icons/remixicon';
import {
  NgpAccordion,
  NgpAccordionItem,
  NgpAccordionTrigger,
  NgpAccordionContent,
} from 'ng-primitives/accordion';

import { cn } from '@lib/utils/cn';

@Component({
  selector: 'ui-accordion',
  hostDirectives: [
    {
      directive: NgpAccordion,
      inputs: [
        'ngpAccordionValue:value',
        'ngpAccordionType:type',
        'ngpAccordionCollapsible:collapsible',
        'ngpAccordionDisabled:disabled',
        'ngpAccordionOrientation:orientation',
      ],
    },
  ],
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
  template: ` <ng-content /> `,

  styleUrl: './accordion.css',
})
class Accordion {
  class = input<string>('');
  slot = input<string>('accordion');

  className = computed(() => cn('w-md', this.class()));
}

@Component({
  selector: 'ui-accordion-trigger',
  imports: [NgIcon, NgpAccordionTrigger],
  providers: [provideIcons({ remixArrowDownSLine })],
  template: `
    <button ngpAccordionTrigger [class]="className()" [attr.data-slot]="slot()">
      <ng-content />
      <ng-icon
        name="remixArrowDownSLine"
        class="text-muted pointer-events-none text-xl shrink-0 translate-y-0.5 transition-transform duration-200"
      />
    </button>
  `,
})
class AccordionTrigger {
  class = input<string>('');
  slot = input<string>('accordion-trigger');

  className = computed(() =>
    cn(
      'w-full focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-open]>ng-icon]:rotate-180',
      this.class()
    )
  );
}

@Component({
  selector: 'ui-accordion-item',
  hostDirectives: [
    {
      directive: NgpAccordionItem,
      inputs: ['ngpAccordionItemValue:value', 'ngpAccordionItemDisabled:disabled'],
    },
  ],
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
  template: ` <ng-content /> `,

  styleUrl: './accordion.css',
})
class AccordionItem {
  class = input<string>('');
  slot = input<string>('accordion-item');

  className = computed(() => cn('block border-b last:border-b-0', this.class()));
}

@Component({
  selector: 'ui-accordion-content',
  imports: [NgpAccordionContent],
  template: `
    <div ngpAccordionContent [attr.data-slot]="slot()" class="overflow-hidden text-sm">
      <div [class]="className()">
        <ng-content />
      </div>
    </div>
  `,
})
class AccordionContent {
  class = input<string>('');
  slot = input<string>('accordion-item');

  className = computed(() => cn('pt-0 pb-4', this.class()));
}
export { Accordion, AccordionTrigger, AccordionItem, AccordionContent };
