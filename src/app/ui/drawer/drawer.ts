import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  ViewContainerRef,
  afterNextRender,
  viewChild,
} from '@angular/core';
import { FocusTrap } from '@ngbase/adk/a11y';
import { BaseDialog, basePortal, DialogInput, DialogOptions } from '@ngbase/adk/portal';
import { createHostAnimation, fadeAnimation } from '@ngbase/adk/utils';

@Component({
  selector: 'mee-drawer',
  template: `
    <div class="pointer-events-none flex h-full flex-col justify-end">
      <div
        class="pointer-events-auto flex max-h-[90vh] flex-col overflow-hidden rounded-tl-2xl rounded-tr-2xl border-t bg-foreground p-4 shadow-2xl"
        [@bottomAnimation]
      >
        <button class="mx-auto h-2 w-20 rounded-full bg-muted"></button>
        @if (!isHideHeader) {
          <div class="flex h-8 items-center">
            <h2 class="flex-1 font-bold">{{ options.title }}</h2>
            <!-- <button meeButton (click)="close()" class="mr-1"></button> -->
          </div>
        }
        <div class="h-full overflow-auto">
          <ng-container #myDialog />
        </div>
      </div>
    </div>
    @if (backdropColor) {
      <div
        class="absolute top-0 -z-10 h-full w-full bg-black bg-opacity-30"
        [@fadeAnimation]
        (click)="close()"
      ></div>
    }
  `,
  host: {
    class: 'fixed block top-0 bottom-0 left-0 right-0 overflow-hidden z-p',
    '[@parentAnimation]': '',
    '(@parentAnimation.done)': 'animationDone()',
  },
  hostDirectives: [FocusTrap],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    createHostAnimation(['@bottomAnimation', '@fadeAnimation']),
    trigger('bottomAnimation', [
      state('1', style({ transform: 'none' })),
      state('void', style({ transform: 'translate3d(0, 100%, 0)' })),
      state('0', style({ transform: 'translate3d(0, 100%, 0)' })),
      transition('* => *', animate('200ms ease')),
    ]),
    fadeAnimation('200ms'),
  ],
})
export class DrawerContainer extends BaseDialog {
  myDialog = viewChild('myDialog', { read: ViewContainerRef });
  backdropColor = true;
  options!: DialogOptions;
  classNames = '';
  isHideHeader = false;

  constructor() {
    super();
    afterNextRender(() => {
      this._afterViewSource.next(this.myDialog()!);
    });
  }

  override setOptions(options: DialogOptions): void {
    this.options = options;
    this.classNames = this.options.classNames?.join(' ') || '';
    this.isHideHeader = this.options.header || false;
    this.backdropColor = this.options.backdropColor || true;
  }
}

export function drawerPortal() {
  const NAME = 'sheet';
  const base = basePortal(NAME, DrawerContainer);

  function open<T>(component: DialogInput<T>, opt?: DialogOptions) {
    const { diaRef } = base.open(
      component,
      (comp, options) => {
        comp.instance.setOptions(options);
      },
      opt,
    );

    const { afterClosed } = diaRef;
    return { afterClosed };
  }

  function closeAll() {
    base.closeAll();
  }
  return { open, closeAll };
}

export type Drawer = ReturnType<typeof drawerPortal>;
