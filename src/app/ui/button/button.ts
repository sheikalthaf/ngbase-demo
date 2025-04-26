import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ɵFocusStyle as FocusStyle } from '@/ui/checkbox';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'icon';

@Component({
  selector: '[meeButton]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [FocusStyle],
  template: `<ng-content />`,
  host: {
    type: 'button',
    class:
      'inline-flex items-center justify-center rounded-lg px-4 py-2 border disabled:text-muted disabled:cursor-not-allowed',
    '[class]': `variant() === 'primary'
          ? 'bg-primary text-foreground disabled:bg-background disabled:border-background border-primary'
          : variant() === 'secondary'
          ? 'bg-muted-background disabled:bg-muted-background border-muted-background'
          : variant() === 'ghost' || variant() === 'icon'
            ? '[&:not(:disabled)]:hover:bg-muted-background [&:not(:disabled)]:active:bg-muted-background/50 border-transparent'
              : ' text-primary [&:not(:disabled)]:hover:bg-background [&:not(:disabled)]:active:bg-background/50'`,
  },
})
export class Button {
  variant = input('primary', {
    alias: 'meeButton',
    transform: (value: ButtonVariant | '') => value || 'primary',
  });
}
