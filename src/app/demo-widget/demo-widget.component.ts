import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'kode-demo-widget',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './demo-widget.component.html',
  styleUrl: './demo-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoWidgetComponent { }
