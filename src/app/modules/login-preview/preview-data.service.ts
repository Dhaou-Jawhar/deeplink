import { Injectable } from '@angular/core';
import { PreviewItem } from './preview-scroller/preview-scroller.component';

@Injectable({ providedIn: 'root' })
export class PreviewDataService {
  getMockItems(): PreviewItem[] {
    return [
      {
        avatarUrl: 'https://i.pravatar.cc/100?img=1',
        displayName: 'Alice Martin',
        handle: '@alice',
        description: 'Créatrice de contenu et designer UI.',
        mediaUrls: ['https://picsum.photos/seed/a1/200', 'https://picsum.photos/seed/a2/200'],
        theme: 'light',
        social: {
          twitter: 'https://twitter.com/',
          instagram: 'https://instagram.com/',
          website: 'https://example.com'
        }
      },
      {
        avatarUrl: 'https://i.pravatar.cc/100?img=2',
        displayName: 'FARAH MHADHBI',
        handle: '@bruno',
        description: 'Growth hacker. Photo, vidéo, data.',
        mediaUrls: ['https://picsum.photos/seed/b1/200'],
        theme: 'dark',
        social: {
          twitter: 'https://twitter.com/',
          linkedin: 'https://linkedin.com/farah'
        }
      },
      {
        avatarUrl: 'https://i.pravatar.cc/100?img=3',
        displayName: 'Charlotte Dupont',
        handle: '@charlotte',
        description: 'Dev Frontend. Angular & UX.',
        mediaUrls: ['https://picsum.photos/seed/c1/200', 'https://picsum.photos/seed/c2/200', 'https://picsum.photos/seed/c3/200'],
        theme: 'light',
        social: {
          instagram: 'https://instagram.com/'
        }
      },
      {
        avatarUrl: 'https://i.pravatar.cc/100?img=4',
        displayName: 'David Kim',
        handle: '@dkim',
        description: 'Product Ops. Minimalisme et efficacité.',
        mediaUrls: ['https://picsum.photos/seed/d1/200'],
        theme: 'dark'
      },
      {
        avatarUrl: 'https://i.pravatar.cc/100?img=5',
        displayName: 'Eva Lopez',
        handle: '@evalpz',
        description: 'Community & partenariats.',
        mediaUrls: ['https://picsum.photos/seed/e1/200'],
        theme: 'light'
      },
      {
        avatarUrl: 'https://i.pravatar.cc/100?img=6',
        displayName: 'Farid Ben',
        handle: '@farid',
        description: 'Vidéo et motion design.',
        mediaUrls: ['https://picsum.photos/seed/f1/200', 'https://picsum.photos/seed/f2/200'],
        theme: 'dark'
      }
    ];
  }
}







