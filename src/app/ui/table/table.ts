import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbTable } from '@ngbase/adk/table';

@Component({
  selector: 'table[meeTable]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full text-sm',
  },
  providers: [{ provide: NgbTable, useExisting: Table }],
  template: `
    <thead>
      <ng-container #thead />
    </thead>
    <tbody>
      <ng-container #tbody />
    </tbody>
  `,
})
export class Table<T> extends NgbTable<T> {}
