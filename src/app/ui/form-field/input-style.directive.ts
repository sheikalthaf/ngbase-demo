import { Directive } from '@angular/core';
import { ɵFocusStyle as FocusStyle } from '@/ui/checkbox';

@Directive({
  selector: '[meeInputStyle]',
  hostDirectives: [{ directive: FocusStyle, inputs: ['unfocus'] }],
  host: {
    class: 'inline-block rounded-lg bg-transparent px-2.5 py-2 border font-normal min-h-10',
  },
})
export class InputStyle {}
