import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../../services/data.service';
import { ComparisonItem } from '../../../../models/comparison-item.model';

@Component({
  selector: 'app-comparison-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comparison-table.component.html',
  styleUrl: './comparison-table.component.css'
})
export class ComparisonTableComponent implements OnInit {
  items: ComparisonItem[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getComparisonItems('vision').subscribe(items => {
      this.items = items;
    });
  }
}
