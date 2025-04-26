import { Component, Directive, ChangeDetectionStrategy } from '@angular/core';
import { NgbCell, NgbCellDef } from '@ngbase/adk/table';

@Component({
  selector: '[meeCell]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [NgbCell],
  host: {
    class: 'px-4 py-2 align-middle bg-foreground',
  },
  template: `<ng-content />`,
})
export class Cell {}

@Directive({
  selector: '[meeCellDef]',
  hostDirectives: [NgbCellDef],
})
export class CellDef {}
