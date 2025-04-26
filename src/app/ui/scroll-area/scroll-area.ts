import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NgbScrollArea, NgbScrollBar, ScrollBarOrientation } from '@ngbase/adk/scroll-area';

@Component({
  selector: 'mee-scroll-area',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgbScrollBar, NgbScrollArea],
  template: `
    <div
      ngbScrollArea
      [alwaysShow]="alwaysShow()"
      [orientation]="orientation()"
      [hideDelay]="hideDelay()"
      class="flex-1"
    >
      <ng-content></ng-content>

      <div
        ngbScrollBar="vertical"
        class="!right-0.5 rounded bg-black/10 opacity-0 transition-colors duration-150 hover:bg-black/50 data-[active=true]:bg-black/50 data-[visible=true]:opacity-100"
      ></div>

      <div
        ngbScrollBar="horizontal"
        class="!bottom-0.5 rounded bg-black/10 opacity-0 transition-colors duration-150 hover:bg-black/50 data-[active=true]:bg-black/50 data-[visible=true]:opacity-100"
      ></div>

      <!-- Corner piece when both scrollbars are visible -->
      <div class="scroll-area-corner absolute bottom-0 right-0 h-2 w-2 rounded bg-black/10"></div>
    </div>
  `,
  host: {
    class: 'flex flex-col w-full',
  },
})
export class ScrollArea {
  readonly alwaysShow = input<boolean>(false);
  readonly orientation = input<ScrollBarOrientation>('both');
  readonly hideDelay = input(1000);
}
