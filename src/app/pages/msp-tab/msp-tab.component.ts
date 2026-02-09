import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { TabSection } from '../../models/tab-section.model';
import { MSPPoint } from '../../models/msp-point.model';
import { OversightModelComponent } from './components/oversight-model/oversight-model.component';

@Component({
  selector: 'app-msp-tab',
  standalone: true,
  imports: [CommonModule, OversightModelComponent],
  templateUrl: './msp-tab.component.html',
  styleUrl: './msp-tab.component.css'
})
export class MSPTabComponent implements OnInit {
  tabData: TabSection | null = null;
  mspPoints: MSPPoint[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAllTabs().subscribe(tabs => {
      this.tabData = tabs.find(tab => tab.tabId === 'msp') || null;
    });

    this.dataService.getMSPPoints('msp').subscribe(points => {
      this.mspPoints = points;
    });
  }
}
