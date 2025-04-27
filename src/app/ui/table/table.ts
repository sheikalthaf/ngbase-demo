import { ChangeDetectionStrategy, Component, Directive } from '@angular/core';
import {
  NgbBodyRow,
  NgbBodyRowDef,
  NgbCell,
  NgbCellDef,
  NgbColumn,
  NgbHead,
  NgbHeadDef,
  NgbHeadRow,
  NgbHeadRowDef,
  NgbTable,
} from '@ngbase/adk/table';

@Component({
  selector: 'table[meeTable]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NgbTable, useExisting: Table }],
  template: `
    <thead>
      <ng-container #thead />
    </thead>
    <tbody>
      <ng-container #tbody />
    </tbody>
  `,
  host: {
    class: 'w-full text-sm',
  },
})
export class Table<T> extends NgbTable<T> {}

// Cell
@Component({
  selector: '[meeCell]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [NgbCell],
  template: `<ng-content />`,
  host: {
    class: 'px-4 py-2 align-middle bg-background',
  },
})
export class Cell {}

@Directive({
  selector: '[meeCellDef]',
  hostDirectives: [NgbCellDef],
})
export class CellDef {}

// Body

@Directive({
  selector: '[meeBodyRowDef]',
  hostDirectives: [
    { directive: NgbBodyRowDef, inputs: ['ngbBodyRowDefColumns: meeBodyRowDefColumns'] },
  ],
})
export class BodyRowDef {}

@Component({
  selector: '[meeBodyRow]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NgbBodyRow, useExisting: BodyRow }],
  template: `<ng-container #container />`,
  host: {
    class: '[&:not(:last-child)]:border-b hover:bg-muted h-12',
  },
})
export class BodyRow extends NgbBodyRow {}

// Column

@Directive({
  selector: '[meeColumn]',
  hostDirectives: [{ directive: NgbColumn, inputs: ['ngbColumn: meeColumn', 'sticky'] }],
})
export class Column {}

// Head Cell

@Component({
  selector: '[meeHead]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [NgbHead],
  template: `<ng-content />`,
  host: {
    class:
      'px-4 py-2 text-left align-middle font-medium text-muted-foreground border-b bg-background',
  },
})
export class Head {}

@Directive({
  selector: '[meeHeadDef]',
  hostDirectives: [NgbHeadDef],
})
export class HeadDef {}

// Head Row

@Component({
  selector: '[meeHeadRow]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NgbHeadRow, useExisting: HeadRow }],
  template: `<ng-container #container />`,
  host: {
    class: `h-10 [&[data-sticky=true]]:sticky [&[data-sticky=true]]:top-0 [&[data-sticky=true]]:bg-background`,
  },
})
export class HeadRow extends NgbHeadRow {}

@Directive({
  selector: '[meeHeadRowDef]',
  hostDirectives: [
    {
      directive: NgbHeadRowDef,
      inputs: ['ngbHeadRowDef: meeHeadRowDef', 'ngbHeadRowDefSticky: meeHeadRowDefSticky'],
    },
  ],
})
export class HeadRowDef {}
