import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../../services/data.service';
import { MSPOversightItem } from '../../../../models/msp-oversight-item.model';

@Component({
  selector: 'app-oversight-model',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oversight-model.component.html',
  styleUrl: './oversight-model.component.css'
})
export class OversightModelComponent implements OnInit {
  items: MSPOversightItem[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getMSPOversightItems('msp').subscribe(items => {
      this.items = items;
    });
  }

  getBadgeClass(responsibility: string): string {
    return responsibility === 'MSP Executes' ? 'badge-green' : 'badge-blue';
  }
}
