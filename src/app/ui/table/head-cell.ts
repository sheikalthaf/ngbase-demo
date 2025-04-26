import { Component, Directive, ChangeDetectionStrategy } from '@angular/core';
import { NgbHead, NgbHeadDef } from '@ngbase/adk/table';

@Component({
  selector: '[meeHead]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'px-4 py-2 text-left align-middle font-medium text-muted border-b bg-foreground',
  },
  hostDirectives: [NgbHead],
  template: `<ng-content />`,
})
export class Head {}

@Directive({
  selector: '[meeHeadDef]',
  hostDirectives: [NgbHeadDef],
})
export class HeadDef {}
