import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { TabSection } from '../../models/tab-section.model';
import { ComparisonTableComponent } from './components/comparison-table/comparison-table.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';

@Component({
  selector: 'app-vision-tab',
  standalone: true,
  imports: [CommonModule, ComparisonTableComponent, RadarChartComponent],
  templateUrl: './vision-tab.component.html',
  styleUrl: './vision-tab.component.css'
})
export class VisionTabComponent implements OnInit {
  tabData: TabSection | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAllTabs().subscribe(tabs => {
      this.tabData = tabs.find(tab => tab.tabId === 'vision') || null;
    });
  }
}
