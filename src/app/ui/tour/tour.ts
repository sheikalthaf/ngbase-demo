import { Directive, inject, InjectionToken } from '@angular/core';
import { NgbTour, NgbTourService, NgbTourStep } from '@ngbase/adk/tour';

export const TourService = new InjectionToken<NgbTourService>('TourService', {
  providedIn: 'root',
  factory: () => inject(NgbTourService),
});

@Directive({
  selector: '[meeTour]',
  hostDirectives: [NgbTour],
})
export class Tour {}

@Directive({
  selector: '[meeTourStep]',
  hostDirectives: [{ directive: NgbTourStep, inputs: ['ngbTourStep: meeTourStep'] }],
})
export class TourStep {}
