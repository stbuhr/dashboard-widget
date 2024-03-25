import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WidgetComponent } from './widget/widget.component';
import { DemoWidgetComponent } from './demo-widget/demo-widget.component';

@Component({
  selector: 'kode-root',
  standalone: true,
  imports: [RouterOutlet, WidgetComponent, DemoWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dashboard-widget';

  demoShowMore() {
    console.log('Demo show more');
  }
  demoShowSettings() {
    console.log('Demo show settings');
  }
}
