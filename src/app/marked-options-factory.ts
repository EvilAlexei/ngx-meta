import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.link = (href: string, title: string, text: string): string => {
    // if (title) {
    //   return `<a href="${ href }" title="${ title || '' }">${ text }</a>`;
    // }
    if (href.startsWith('#')) {
      return `<a pageScroll href="${ href }">${ text }</a>`;
    }
    return `<a href="${ href }">${ text }</a>`;
  };

  return {
    renderer
  };
}
