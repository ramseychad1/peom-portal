import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { PageConfig } from '../../models/page-config.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  pageConfig: PageConfig | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPageConfig().subscribe(config => {
      this.pageConfig = config;
    });
  }
}
