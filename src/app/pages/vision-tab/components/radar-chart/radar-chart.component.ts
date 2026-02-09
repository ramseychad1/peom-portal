import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './radar-chart.component.html',
  styleUrl: './radar-chart.component.css'
})
export class RadarChartComponent implements OnInit {
  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 10,
        bottom: 5,
        left: 20,
        right: 20
      }
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          font: {
            size: 11
          }
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        align: 'center',
        labels: {
          font: {
            size: 12
          },
          padding: 6,
          boxWidth: 30
        }
      }
    }
  };

  public radarChartData: ChartConfiguration<'radar'>['data'] = {
    labels: [],
    datasets: []
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getChartData('vision').subscribe(data => {
      if (data) {
        this.radarChartData = {
          labels: data.labels,
          datasets: data.datasets
        };
      }
    });
  }
}
