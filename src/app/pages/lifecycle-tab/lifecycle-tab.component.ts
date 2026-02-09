import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { TabSection } from '../../models/tab-section.model';
import { StepperComponent } from './components/stepper/stepper.component';

@Component({
  selector: 'app-lifecycle-tab',
  standalone: true,
  imports: [CommonModule, StepperComponent],
  templateUrl: './lifecycle-tab.component.html',
  styleUrl: './lifecycle-tab.component.css'
})
export class LifecycleTabComponent implements OnInit {
  tabData: TabSection | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAllTabs().subscribe(tabs => {
      this.tabData = tabs.find(tab => tab.tabId === 'lifecycle') || null;
    });
  }
}
