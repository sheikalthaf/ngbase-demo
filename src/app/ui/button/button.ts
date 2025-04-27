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
      'inline-flex items-center justify-center rounded-lg py-2 border disabled:opacity-50 disabled:pointer-events-none',
    '[class]': `variant() === 'primary'
          ? 'bg-primary text-primary-foreground border-primary'
          : variant() === 'secondary'
          ? 'bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/80'
          : variant() === 'ghost' || variant() === 'icon'
            ? 'hover:bg-accent hover:text-accent-foreground border-transparent'
              : 'bg-background hover:bg-accent hover:text-accent-foreground'`,
    '[class.px-4]': 'variant() !== "icon"',
    '[class.px-2]': 'variant() === "icon"',
  },
})
export class Button {
  variant = input('primary', {
    alias: 'meeButton',
    transform: (value: ButtonVariant | '') => value || 'primary',
  });
}
