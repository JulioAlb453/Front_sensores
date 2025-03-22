import { Component } from '@angular/core';
import {
  ApexChart,
  ApexFill,
  ApexPlotOptions,
  ApexTooltip,
} from 'ng-apexcharts';

@Component({
  selector: 'app-chart-data-temperature',
  standalone: false,
  templateUrl: './chart-data-temperature.component.html',
  styleUrl: './chart-data-temperature.component.css'
})
export class ChartDataTemperatureComponent {
  [x: string]: any;
  chartSeries: number[] = [70]; 
  
  chartOptions: {
    chart: ApexChart;
    plotOptions: ApexPlotOptions;
    fill: ApexFill;
    tooltip: ApexTooltip;
    labels: string[];
  };

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          hollow: { size: "60C*" },
          track: { background: "#E0E0E0" },
          dataLabels: {
            name: { show: true, fontSize: "16px" },
            value: { fontSize: "20px", formatter: (val) => val + "%" }
          }
        }
      },
      fill: {
        colors: ["#3498db"] 
      },
      tooltip: { enabled: true },
      labels: ["Temperatura del lugar"]
    };
  }

  updateValue(newValue: number) {
    this.chartSeries = [newValue];
  }
  generateRandomValue() {
    this.updateValue(Math.floor(Math.random() * 101));
  }
}
