import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbAvatar, NgbAvatarGroup, aliasAvatar } from '@ngbase/adk/avatar';

@Component({
  selector: 'mee-avatar-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [{ directive: NgbAvatarGroup, inputs: ['reverse', 'left'] }],
  template: `<ng-content select="mee-avatar,[meeAvatar]" />`,
  host: {
    class: 'flex flex-row',
  },
})
export class AvatarGroup {}

@Component({
  selector: 'mee-avatar, [meeAvatar]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [aliasAvatar(Avatar)],
  template: `
    @if (src(); as img) {
      <img [src]="img" alt="avatar" class="h-full max-h-full max-w-full" />
    } @else {
      <ng-content>{{ nameChar() }}</ng-content>
    }
  `,
  host: {
    class:
      'inline-flex aspect-square rounded-full overflow-hidden border-2 border-muted relative bg-background text-muted-foreground items-center justify-center',
  },
})
export class Avatar extends NgbAvatar {}
