import { Component } from '@angular/core';
import { Avatar, AvatarImage, AvatarFallback } from '@lib/components/avatar/avatar';

@Component({
  selector: 'app-avatar-demo',
  imports: [Avatar, AvatarImage, AvatarFallback],
  template: `
    <div class="flex flex-row flex-wrap items-center gap-12">
      <ui-avatar>
        <img
          ui-avatar-image
          src="https://github.com/shadcn.png"
          alt="@shadcn"
          class="size-8"
          size="lg"
        />
        <span ui-avatar-fallback>CN</span>
      </ui-avatar>
      <ui-avatar class="rounded-lg">
        <img ui-avatar-image src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
        <span ui-avatar>ER</span>
      </ui-avatar>
      <div
        class="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale"
      >
        <ui-avatar>
          <img ui-avatar-image src="https://github.com/shadcn.png" alt="@shadcn" />
          <span ui-avatar-fallback>CN</span>
        </ui-avatar>
        <ui-avatar>
          <img ui-avatar-image src="https://github.com/leerob.png" alt="@leerob" />
          <span ui-avatar-fallback>LR</span>
        </ui-avatar>
        <ui-avatar>
          <img ui-avatar-image src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
          <span ui-avatar-fallback>ER</span>
        </ui-avatar>
      </div>
    </div>
  `,
  styleUrl: './avatar-demo.css',
})
export class AvatarDemo {}
