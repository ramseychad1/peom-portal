import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { TabSection } from '../../models/tab-section.model';
import { OrgChartComponent } from './components/org-chart/org-chart.component';
import { TeamFunctionsComponent } from './components/team-functions/team-functions.component';

@Component({
  selector: 'app-structure-tab',
  standalone: true,
  imports: [CommonModule, OrgChartComponent, TeamFunctionsComponent],
  templateUrl: './structure-tab.component.html',
  styleUrl: './structure-tab.component.css'
})
export class StructureTabComponent implements OnInit {
  tabData: TabSection | null = null;
  activeView: 'structure' | 'functions' = 'structure';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAllTabs().subscribe(tabs => {
      this.tabData = tabs.find(tab => tab.tabId === 'structure') || null;
    });
  }

  setActiveView(view: 'structure' | 'functions'): void {
    this.activeView = view;
  }
}
