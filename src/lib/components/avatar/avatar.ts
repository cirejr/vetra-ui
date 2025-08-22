import { Component, computed, Directive, input } from '@angular/core';
import { cn } from '@lib/utils/cn';
import { NgpAvatar, NgpAvatarImage, NgpAvatarFallback } from 'ng-primitives/avatar';

@Component({
  selector: 'ui-avatar',
  hostDirectives: [NgpAvatar],
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
  template: ` <ng-content /> `,
  styleUrl: './avatar.css',
})
class Avatar {
  readonly class = input<string>('');
  readonly slot = input<string>('avatar');

  readonly className = computed(() =>
    cn('relative flex size-8 shrink-0 overflow-hidden rounded-full', this.class())
  );
}

@Component({
  selector: 'img[ui-avatar-image]',
  imports: [NgpAvatarImage],
  hostDirectives: [NgpAvatarImage],
  standalone: true,
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
    '[src]': 'src()',
    '[alt]': 'alt()',
  },
  template: ``,
})
class AvatarImage {
  readonly src = input<string>();
  readonly alt = input<string>();
  readonly class = input<string>('');
  readonly slot = input<string>('avatar-image');

  readonly className = computed(() => cn('aspect-square size-full', this.class()));
}

@Component({
  selector: 'span[ui-avatar-fallback]',
  hostDirectives: [
    {
      directive: NgpAvatarFallback,
      inputs: ['ngpAvatarFallbackDelay:delay'],
    },
  ],
  standalone: true,
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
  template: `<ng-content>{{ fallback() }}</ng-content>`,
})
class AvatarFallback {
  readonly fallback = input<Required<string>>('');
  readonly delay = input<number>();
  readonly class = input<string>('');
  readonly slot = input<string>('avatar-fallback');

  readonly className = computed(() =>
    cn(
      'bg-muted flex size-full items-center justify-center rounded-full text-sm font-medium',
      this.class()
    )
  );
}

export { Avatar, AvatarImage, AvatarFallback };
