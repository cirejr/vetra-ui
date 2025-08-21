import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { cn } from '@lib/utils/cn';

@Component({
  selector: 'ui-card',
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <ng-content></ng-content> `,
  styleUrl: './card.css',
})
class Card {
  class = input<string>('');
  slot = input<string>('card');

  className = computed(() =>
    cn(
      'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
      this.class()
    )
  );
}
@Component({
  selector: 'ui-card-header',
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <ng-content></ng-content> `,
  styleUrl: './card.css',
})
class CardHeader {
  class = input<string>('');
  slot = input<string>('card-header');

  className = computed(() =>
    cn(
      '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
      this.class()
    )
  );
}
@Component({
  selector: 'ui-card-title',
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <ng-content></ng-content> `,
  styleUrl: './card.css',
})
class CardTitle {
  class = input<string>('');
  slot = input<string>('card-title');

  className = computed(() => cn('leading-none font-semibold', this.class()));
}
@Component({
  selector: 'ui-card-description',
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <ng-content></ng-content> `,
  styleUrl: './card.css',
})
class CardDescription {
  class = input<string>('');
  slot = input<string>('card-description');

  className = computed(() => cn('text-muted-foreground text-sm', this.class()));
}
@Component({
  selector: 'ui-card-action',
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <ng-content></ng-content> `,
  styleUrl: './card.css',
})
class CardAction {
  class = input<string>('');
  slot = input<string>('card-action');

  className = computed(() =>
    cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', this.class())
  );
}
@Component({
  selector: 'ui-card-content',
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <ng-content></ng-content> `,
  styleUrl: './card.css',
})
class CardContent {
  class = input<string>('');
  slot = input<string>('card-content');

  className = computed(() => cn('px-6', this.class()));
}

@Component({
  selector: 'ui-card-footer',
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <ng-content></ng-content> `,
  styleUrl: './card.css',
})
class CardFooter {
  class = input<string>('');
  slot = input<string>('card-footer');

  className = computed(() => cn('flex items-center px-6 [.border-t]:pt-6', this.class()));
}

export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
