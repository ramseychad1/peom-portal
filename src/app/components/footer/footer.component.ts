import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { PageConfig } from '../../models/page-config.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  pageConfig: PageConfig | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPageConfig().subscribe(config => {
      this.pageConfig = config;
    });
  }
}
