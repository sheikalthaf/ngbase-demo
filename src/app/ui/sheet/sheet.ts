import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button } from '@/ui/button';
import { Icon } from '@/ui/icon';
import { provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { sideAnimation } from '@ngbase/adk/dialog';
import { NgbSheet, NgbSheetContainer, ngbSheetPortal } from '@ngbase/adk/sheet';
import { aliasSheet } from '@ngbase/adk/sheet';
import { createHostAnimation, fadeAnimation } from '@ngbase/adk/utils';

@Component({
  selector: 'mee-sheet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [aliasSheet(SheetContainer)],
  viewProviders: [provideIcons({ lucideX })],
  imports: [NgStyle, Button, Icon],
  template: `
    <div
      class="pointer-events-none flex h-full"
      [class]="options.position === 'left' ? 'justify-start' : 'justify-end'"
    >
      <div
        class="pointer-events-auto m-2 flex flex-col overflow-hidden rounded-lg border-l bg-foreground shadow-2xl will-change-transform"
        [@sideAnimation]="position()"
        [ngStyle]="{
          width: options.width,
          minWidth: options.minWidth,
          maxWidth: options.maxWidth,
        }"
      >
        @if (!isHideHeader) {
          <div class="flex items-center border-b px-4 py-2">
            <h2 class="flex-1 font-bold">{{ options.title }}</h2>
            <button meeButton="ghost" class="-mr-2 !p-2" (click)="close()">
              <mee-icon name="lucideX" />
            </button>
          </div>
        }
        <div class="h-full overflow-auto p-4">
          <ng-container #myDialog />
        </div>
      </div>
    </div>
    @if (backdropColor) {
      <div
        class="absolute top-0 -z-10 h-full w-full bg-black bg-opacity-30 will-change-transform"
        [@fadeAnimation]
        (click)="close()"
      ></div>
      <!-- [class]="status() ? 'pointer-events-auto' : 'pointer-events-none'" -->
    }
  `,
  host: {
    class: 'fixed block top-0 bottom-0 left-0 right-0  z-p',
  },
  animations: [
    createHostAnimation(['@fadeAnimation', '@sideAnimation']),
    fadeAnimation('300ms'),
    sideAnimation,
  ],
})
export class SheetContainer extends NgbSheetContainer {}

export function sheetPortal() {
  return ngbSheetPortal(SheetContainer);
}

export type Sheet = NgbSheet;
