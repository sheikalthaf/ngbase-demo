import { ChangeDetectionStrategy, Component } from '@angular/core';
import { injectDirectionality } from '@ngbase/adk/bidi';
import { NgbInputOtp, NgbOtpInput, NgbOtpValue, aliasInputOtp } from '@ngbase/adk/otp';
import { NumberOnly, RangePipe } from '@ngbase/adk/utils';
import { InputStyle } from '@/ui/form-field';

@Component({
  selector: 'mee-input-otp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [aliasInputOtp(InputOtp)],
  imports: [InputStyle, RangePipe, NgbOtpInput, NgbOtpValue, NumberOnly],
  template: `
    @for (num of size(); track $index; let l = $last) {
      @for (n of num | range; track n; let i = $index; let ll = $last) {
        <div
          meeInputStyle
          ngbOtpValue
          class="{{
            'mb-0 aspect-square w-10 rounded-none !px-0 text-center text-base font-semibold data-[disabled]:bg-muted-background/40 data-[disabled]:text-muted data-[focus]:relative' +
              ((dir.isRtl() ? ll : i === 0) ? ' !rounded-l-lg' : '') +
              ((dir.isRtl() ? i === 0 : ll) ? ' !rounded-r-lg' : '')
          }}"
        ></div>
      }
      @if (!l) {
        <div class="px-2">-</div>
      }
    }
    <input type="text" ngbOtpInput ngbNumberOnly class="selection:bg-transparent" />
  `,
  host: {
    class: 'inline-flex items-center justify-center rounded-lg relative',
  },
})
export class InputOtp extends NgbInputOtp {
  readonly dir = injectDirectionality();
}
