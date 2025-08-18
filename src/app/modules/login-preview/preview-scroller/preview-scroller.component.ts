import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PreviewDataService } from '../preview-data.service';

export interface PreviewSocialLinks {
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  website?: string;
}

export interface PreviewItem {
  // Profile card fields
  avatarUrl?: string;
  displayName?: string;
  handle?: string;
  description?: string;
  mediaUrls?: string[]; // images or video thumbnails
  theme?: 'light' | 'dark';
  social?: PreviewSocialLinks;
  // Image-only card
  imageUrl?: string;
}

@Component({
  selector: 'app-preview-scroller',
  templateUrl: './preview-scroller.component.html',
  styleUrls: ['./preview-scroller.component.scss']
})
export class PreviewScrollerComponent implements OnInit, OnDestroy {
  @Input() items?: PreviewItem[];

  public col0: PreviewItem[] = [];
  public col1: PreviewItem[] = [];
  public col2: PreviewItem[] = [];
  public horizontalItems: PreviewItem[] = [];

  private mediaQueryList?: MediaQueryList;
  private readonly onMediaQueryChange = () => this.setupResponsiveData();

  constructor(private readonly previewData: PreviewDataService) {}

  ngOnInit(): void {
    if (!this.items || this.items.length === 0) {
      this.items = this.previewData.getMockItems();
    }

    this.setupResponsiveData();

    this.mediaQueryList = window.matchMedia('(min-width: 1024px)');
    // Update data distribution when viewport crosses breakpoint
    this.mediaQueryList.addEventListener('change', this.onMediaQueryChange);
  }

  ngOnDestroy(): void {
    this.mediaQueryList?.removeEventListener('change', this.onMediaQueryChange);
  }

  private setupResponsiveData(): void {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    const source = this.items ?? []

    if (isDesktop) {
      // Distribute items into 3 columns, keep order stable
      this.col0 = [];
      this.col1 = [];
      this.col2 = [];
      source.forEach((item, index) => {
        const mod = index % 3;
        if (mod === 0) this.col0.push(item);
        else if (mod === 1) this.col1.push(item);
        else this.col2.push(item);
      });

      // Virtual duplication (x3) for smoother, less frequent seam
      this.col0 = [...this.col0, ...this.col0, ...this.col0];
      this.col1 = [...this.col1, ...this.col1, ...this.col1];
      this.col2 = [...this.col2, ...this.col2, ...this.col2];
    } else {
      // Mobile horizontal duplication (x3)
      this.horizontalItems = [...source, ...source, ...source];
    }
  }
}


