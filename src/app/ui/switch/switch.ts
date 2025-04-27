import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbSwitch, NgbSwitchLabel, NgbSwitchThumb, NgbSwitchTrack } from '@ngbase/adk/switch';

@Component({
  selector: 'mee-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    { directive: NgbSwitch, inputs: ['checked', 'disabled'], outputs: ['checkedChange', 'change'] },
  ],
  imports: [NgbSwitchTrack, NgbSwitchLabel, NgbSwitchThumb],
  template: `
    <button
      ngbSwitchTrack
      class="relative w-9 rounded-full border-2 border-transparent bg-muted transition-colors aria-[checked=true]:bg-primary"
    >
      <span
        #thumb="ngbSwitchThumb"
        ngbSwitchThumb
        [class]="thumb.checked() ? (thumb.rtl() ? '-translate-x-full' : 'translate-x-full') : ''"
        class="block h-4 w-4 rounded-full bg-background shadow-sm transition-transform"
      ></span>
    </button>
    <label ngbSwitchLabel><ng-content /></label>
  `,
  host: {
    class: 'inline-flex items-center gap-2 py-1',
  },
})
export class Switch {}
