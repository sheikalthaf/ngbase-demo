import { ChangeDetectionStrategy, Component, Directive } from '@angular/core';
import {
  aliasPopover,
  NgbPopover,
  NgbPopoverArrow,
  NgbPopoverBackdrop,
  NgbPopoverClose,
  NgbPopoverMain,
  ngbPopoverPortal,
  NgbPopoverTrigger,
  registerNgbPopover,
} from '@ngbase/adk/popover';

@Component({
  selector: 'mee-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [aliasPopover(Popover)],
  imports: [NgbPopoverBackdrop, NgbPopoverMain, NgbPopoverArrow],
  template: ` <div
      ngbPopoverMain
      [@slideInOutAnimation]
      class="menu-container pointer-events-auto fixed z-10 flex flex-col rounded-lg border bg-foreground shadow-md"
    >
      <div class="flex flex-1 flex-col overflow-auto" ngbPopoverArrow>
        <ng-container #myDialog />
      </div>
    </div>
    @if (options().backdrop) {
      <div ngbPopoverBackdrop class="pointer-events-auto fixed top-0 h-full w-full"></div>
    }`,
  host: {
    class:
      'fixed top-0 left-0 w-full h-full pointer-events-none z-p flex items-center justify-center',
  },
})
class Popover extends NgbPopover {}

export function registerPopover() {
  return registerNgbPopover(Popover);
}

export const popoverPortal = ngbPopoverPortal;

@Directive({
  selector: '[meePopoverTrigger]',
  hostDirectives: [
    {
      directive: NgbPopoverTrigger,
      inputs: [
        'ngbPopoverTrigger: meePopoverTrigger',
        'ngbPopoverTriggerData: meePopoverTriggerData',
        'options',
      ],
    },
  ],
  providers: [registerPopover()],
})
export class PopoverTrigger {}

@Directive({
  selector: '[meePopoverClose]',
  hostDirectives: [NgbPopoverClose],
})
export class PopoverClose {}
