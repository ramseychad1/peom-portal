import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../../services/data.service';
import { LifecycleStep } from '../../../../models/lifecycle-step.model';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent implements OnInit {
  steps: LifecycleStep[] = [];
  activeStepIndex: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getLifecycleSteps('lifecycle').subscribe(steps => {
      this.steps = steps;
    });
  }

  selectStep(index: number): void {
    this.activeStepIndex = index;
  }

  get activeStep(): LifecycleStep | null {
    return this.steps[this.activeStepIndex] || null;
  }
}
