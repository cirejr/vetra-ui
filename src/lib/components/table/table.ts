import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { cn } from '@lib/utils/cn';

@Component({
  selector: 'ui-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div data-slot="table-container" class="relative w-full overflow-x-auto ">
      <table data-slot="table" [class]="className()">
        <ng-content />
      </table>
    </div>
  `,
  styleUrl: './table.css',
})
class Table {
  class = input<string>('');

  className = computed(() => cn('w-full caption-bottom text-sm', this.class()));
}

@Component({
  selector: 'thead[ui-table-header]',
  host: {
    '[attr.data-slot]': 'slot()',
    '[class]': 'className()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  styleUrl: './table.css',
})
class TableHeader {
  class = input<string>('');
  slot = input<string>('table-header');

  className = computed(() => cn('[&_tr]:border-b', this.class()));
}

@Component({
  selector: 'tbody[ui-table-body]',
  host: {
    '[class]': 'className()',
    '[attr.data-slot]': 'slot()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  styleUrl: './table.css',
})
class TableBody {
  class = input<string>('');
  slot = input<string>('table-body');

  className = computed(() => cn('[&_tr:last-child]:border-0', this.class()));
}

@Component({
  selector: 'tfoot[ui-table-footer]',
  host: {
    '[attr.data-slot]': 'slot()',
    '[class]': 'className()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <ng-content /> `,
  styleUrl: './table.css',
})
class TableFooter {
  class = input<string>('');
  slot = input<string>('table-footer');

  className = computed(() =>
    cn('bg-muted/50 border-t font-medium [&>tr]:last:border-b-0 w-full', this.class())
  );
}

@Component({
  selector: 'tr[ui-table-row]',
  host: {
    '[attr.data-slot]': 'slot()',
    '[class]': 'className()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  styleUrl: './table.css',
})
class TableRow {
  class = input<string>('');
  slot = input<string>('table-row');

  className = computed(() =>
    cn('hover:bg-muted/50 data-[selected]:bg-muted border-b transition-colors', this.class())
  );
}

@Component({
  selector: 'th[ui-table-head]',
  host: {
    '[attr.data-slot]': 'slot()',
    '[class]': 'className()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  styleUrl: './table.css',
})
class TableHead {
  class = input<string>('');
  slot = input<string>('table-head');

  className = computed(() =>
    cn(
      'text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
      this.class()
    )
  );
}

@Component({
  selector: 'td[ui-table-cell]',
  host: {
    '[attr.data-slot]': 'slot()',
    '[class]': 'className()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  styleUrl: './table.css',
})
class TableCell {
  class = input<string>('');
  slot = input<string>('table-cell');

  className = computed(() =>
    cn(
      'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
      this.class()
    )
  );
}

@Component({
  selector: 'caption[ui-table-caption]',
  host: {
    '[attr.data-slot]': 'slot()',
    '[class]': 'className()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  styleUrl: './table.css',
})
class TableCaption {
  class = input<string>('');
  slot = input<string>('table-caption');

  className = computed(() => cn('text-muted-foreground mt-4 text-sm', this.class()));
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
