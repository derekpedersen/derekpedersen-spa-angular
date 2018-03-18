import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);
//platformBrowserDynamic().bootstrapModule(AppModule)
//    .then(success => console.log(`Bootstrap success`))
//    .catch(err => console.error(err));



//import { enableProdMode } from '@angular/core';
//import { environment } from './environments/environment';

//if (environment.production) {
//    enableProdMode();
//}