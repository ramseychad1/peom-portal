import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DataService } from '../../../../services/data.service';
import { RoleCard } from '../../../../models/role-card.model';
import { RoleDetailDialogComponent } from '../role-detail-dialog/role-detail-dialog.component';

@Component({
  selector: 'app-org-chart',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './org-chart.component.html',
  styleUrl: './org-chart.component.css'
})
export class OrgChartComponent implements OnInit {
  roles: { [key: string]: RoleCard } = {};

  constructor(
    private dataService: DataService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataService.getRoleCards('structure').subscribe(roleCards => {
      roleCards.forEach(role => {
        this.roles[role.roleKey] = role;
      });
    });
  }

  openRoleDetail(roleKey: string): void {
    const role = this.roles[roleKey];
    if (role) {
      this.dialog.open(RoleDetailDialogComponent, {
        data: role,
        width: '500px',
        panelClass: 'role-dialog'
      });
    }
  }
}
