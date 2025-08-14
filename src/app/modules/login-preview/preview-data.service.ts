import { Injectable } from '@angular/core';
import { PreviewItem } from './preview-scroller/preview-scroller.component';

@Injectable({ providedIn: 'root' })
export class PreviewDataService {
  getMockItems(): PreviewItem[] {
    // Image-only cards using local assets in assets/image/containers
    return [
      { imageUrl: 'assets/image/containers/Container.png' },
      { imageUrl: 'assets/image/containers/Container-1.png' },
      { imageUrl: 'assets/image/containers/Container-2.png' },
      { imageUrl: 'assets/image/containers/Container-3.png' },
      { imageUrl: 'assets/image/containers/Container-4.png' },
      { imageUrl: 'assets/image/containers/Container-5.png' },
      { imageUrl: 'assets/image/containers/linkinbio-2.png' },
      { imageUrl: 'assets/image/containers/linkinbio-2-1.png' },
      { imageUrl: 'assets/image/containers/linkinbio-3.png' }
    ];
  }
}








