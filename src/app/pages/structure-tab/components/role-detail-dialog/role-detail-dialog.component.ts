import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { RoleCard } from '../../../../models/role-card.model';

@Component({
  selector: 'app-role-detail-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './role-detail-dialog.component.html',
  styleUrl: './role-detail-dialog.component.css'
})
export class RoleDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: RoleCard) {}
}
