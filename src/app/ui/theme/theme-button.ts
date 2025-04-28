import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button } from '@/ui/button';
import { Icon } from '@/ui/icon';
import { provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { injectTheme } from './theme.service';
// import { keyMap } from '@ngbase/adk/keys';

@Component({
  selector: 'mee-theme-button',
  imports: [Icon, Button],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [provideIcons({ lucideMoon, lucideSun })],
  template: `
    <button meeButton="icon" class="tour-mode h-9 w-9" (click)="themeService.toggle()">
      <mee-icon [name]="themeService.mode() === 'dark' ? 'lucideSun' : 'lucideMoon'" />
      <span class="sr-only">Toggle theme</span>
    </button>
  `,
})
export class ThemeButton {
  readonly themeService = injectTheme();

  constructor() {
    // keyMap('ctrl+b', () => this.themeService.toggle());
  }
}
