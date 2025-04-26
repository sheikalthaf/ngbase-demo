import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Icon } from '@/ui/icon';
import { provideIcons } from '@ng-icons/core';
import { lucideChevronsUpDown } from '@ng-icons/lucide';
import {
  aliasSelect,
  NgbSelect,
  NgbSelectOption,
  NgbSelectOptionGroup,
  SelectValue,
} from '@ngbase/adk/select';
import { Option } from './option';
import { SelectInput } from './select-input';

@Directive({
  selector: '[meeSelectOption]',
  hostDirectives: [NgbSelectOption],
})
export class SelectOption<T> {}

@Component({
  selector: 'mee-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [provideIcons({ lucideChevronsUpDown })],
  providers: [aliasSelect(Select)],
  imports: [
    Icon,
    FormsModule,
    SelectInput,
    Option,
    NgTemplateOutlet,
    SelectValue,
    NgbSelectOptionGroup,
  ],
  template: `
    <button
      ngbSelectValue
      [class.opacity-50]="disabled()"
      class="flex min-h-5 w-full items-center gap-1 whitespace-nowrap text-left outline-none"
    >
      <!-- Prefix template -->
      <ng-content select=".select-prefix" />

      <span class="flex-1 truncate" [class.text-muted]="!cValue()">
        <ng-content select="[meeSelectTrigger]">
          {{ cValue() || placeholder() }}
        </ng-content>
      </span>
      <mee-icon name="lucideChevronsUpDown" class="ml-0.5 text-muted" />
    </button>

    <!-- Options template -->
    <ng-template #optionsTemplate>
      <div class="flex flex-col overflow-hidden">
        <ng-content select="[meeSelectInput]">
          @if (options().length) {
            <input
              meeSelectInput
              placeholder="Search options"
              [(ngModel)]="optionsFilter.search"
              [ngModelOptions]="{ standalone: true }"
            />
          }
        </ng-content>
        <div #optionsGroup ngbSelectOptionGroup class="overflow-auto p-1">
          <div class="h-full" role="listbox" aria-label="Suggestions">
            <ng-content>
              @for (option of optionsFilter.filteredList(); track option; let i = $index) {
                <mee-option [value]="option" [ayId]="ayId">
                  @if (optionTemplate(); as ot) {
                    <ng-template
                      [ngTemplateOutlet]="ot.template"
                      [ngTemplateOutletContext]="{ $implicit: option, index: i }"
                    />
                  } @else {
                    {{ option }}
                  }
                </mee-option>
              }
            </ng-content>
          </div>
        </div>
        <ng-content select=".select-footer" />
      </div>
    </ng-template>
  `,
  host: {
    class: 'flex cursor-pointer font-medium outline-none',
    '[class.pointer-events-none]': 'disabled()',
  },
})
export class Select<T> extends NgbSelect<T> {
  override sideOffset = 16;
}
