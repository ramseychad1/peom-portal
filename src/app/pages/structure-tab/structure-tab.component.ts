import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { TabSection } from '../../models/tab-section.model';
import { OrgChartComponent } from './components/org-chart/org-chart.component';

@Component({
  selector: 'app-structure-tab',
  standalone: true,
  imports: [CommonModule, OrgChartComponent],
  templateUrl: './structure-tab.component.html',
  styleUrl: './structure-tab.component.css'
})
export class StructureTabComponent implements OnInit {
  tabData: TabSection | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAllTabs().subscribe(tabs => {
      this.tabData = tabs.find(tab => tab.tabId === 'structure') || null;
    });
  }
}
