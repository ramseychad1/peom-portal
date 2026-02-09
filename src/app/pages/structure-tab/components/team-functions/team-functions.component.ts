import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../../services/data.service';
import { TeamFunction } from '../../../../models/team-function.model';

@Component({
  selector: 'app-team-functions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-functions.component.html',
  styleUrl: './team-functions.component.css'
})
export class TeamFunctionsComponent implements OnInit {
  teams: TeamFunction[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTeamFunctions('structure').subscribe(teams => {
      this.teams = teams;
    });
  }
}
