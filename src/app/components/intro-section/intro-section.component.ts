import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { PageConfig } from '../../models/page-config.model';

@Component({
  selector: 'app-intro-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro-section.component.html',
  styleUrl: './intro-section.component.css'
})
export class IntroSectionComponent implements OnInit {
  pageConfig: PageConfig | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPageConfig().subscribe(config => {
      this.pageConfig = config;
    });
  }
}
