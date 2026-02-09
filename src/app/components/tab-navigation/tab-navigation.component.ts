import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { TabSection } from '../../models/tab-section.model';

@Component({
  selector: 'app-tab-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tab-navigation.component.html',
  styleUrl: './tab-navigation.component.css'
})
export class TabNavigationComponent implements OnInit {
  tabs: TabSection[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAllTabs().subscribe(tabs => {
      this.tabs = tabs;
    });
  }
}
