import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import * as hljs from 'highlight.js';

if (environment.production) {
  enableProdMode();
}

hljs.initHighlightingOnLoad();

platformBrowserDynamic().bootstrapModule(AppModule);
