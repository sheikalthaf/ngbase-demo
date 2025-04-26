import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Directive } from '@angular/core';
import {
  aliasStepper,
  NgbStep,
  NgbStepHeader,
  NgbStepper,
  NgbStepperStep,
  provideStep,
  stepperAnimation,
} from '@ngbase/adk/stepper';

@Component({
  selector: 'mee-stepper',
  exportAs: 'meeStepper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [aliasStepper(Stepper)],
  imports: [NgTemplateOutlet, NgbStepperStep],
  template: `
    <div class="flex justify-between" [class.flex-col]="direction() === 'vertical'">
      @for (step of steps(); track step) {
        <div
          [ngbStepperStep]="$index"
          class="{{
            'relative flex pb-4 data-[index]:flex-1 data-[index]:after:mx-2 data-[index]:after:block data-[index]:after:flex-1 data-[index]:after:bg-background data-[index]:after:transition-colors' +
              (activeIndex() > $index ? ' data-[index]:after:bg-primary' : '') +
              (direction() === 'vertical'
                ? ' flex-col data-[index]:after:absolute data-[index]:after:bottom-0 data-[index]:after:left-3 data-[index]:after:top-10 data-[index]:after:w-0.5'
                : ' items-center data-[index]:after:h-0.5')
          }}"
        >
          <div class="flex items-center">
            <div
              class="{{
                'mr-2 grid aspect-square w-10 place-content-center rounded-full border-2 transition-colors' +
                  (activeIndex() > $index ? ' bg-primary' : '') +
                  (activeIndex() >= $index ? ' border-primary' : '')
              }}"
            >
              {{ $index + 1 }}
            </div>
            @if (step.header(); as header) {
              <ng-container *ngTemplateOutlet="header" />
            } @else {
              {{ step.title() }}
            }
          </div>
          @if (step.verticalTemplate(); as template) {
            <div class="ml-12" [@slide]>
              <div class="pt-4">
                <ng-container *ngTemplateOutlet="template" />
              </div>
            </div>
          }
        </div>
      }
    </div>
    <ng-content />
  `,
  animations: [stepperAnimation],
})
export class Stepper extends NgbStepper {}

@Component({
  selector: 'mee-step',
  exportAs: 'meeStep',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideStep(Step)],
  imports: [NgTemplateOutlet],
  template: `
    <ng-template #stepContainer>
      <ng-content />
    </ng-template>

    @if (horizontalTemplate(); as template) {
      <div class="pb-4">
        <ng-container *ngTemplateOutlet="template" />
      </div>
    }
  `,
})
export class Step extends NgbStep {}

@Directive({
  selector: '[meeStepHeader]',
  hostDirectives: [NgbStepHeader],
})
export class StepHeader {}
