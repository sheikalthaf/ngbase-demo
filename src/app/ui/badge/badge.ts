import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'mee-badge, [meeBadge]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  host: {
    class: 'flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold',
    '[class]': `variant() === 'success' ? 'bg-green-100 text-green-700' : variant() === 'warning' ? 'bg-yellow-100 text-yellow-700' : variant() === 'danger' ? 'bg-red-100 text-red-700' : 'bg-muted'`,
  },
})
export class Badge {
  readonly variant = input<'info' | 'success' | 'warning' | 'danger'>('info');
}
