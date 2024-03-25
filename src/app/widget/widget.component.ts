import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'kode-widget',
  standalone: true,
  imports: [CommonModule, TranslocoModule, MatIconModule],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponent {
  title = input<string>('Title');
  enableShowMore = input<boolean>(true);
  enableSettings = input<boolean>(true);
  showMore = output<void>();
  showSettings = signal<boolean>(false);

  constructor() {
    effect(() => {
      console.log('enableShowMore:', this.enableShowMore());
    });
  }

  toggleSettings() {
    this.showSettings.set(!this.showSettings());
  }

  focusout() {
    console.log('focusout');
    this.showSettings.set(false);
  }
}
