import { platformBrowser } from '@angular/platform-browser';
//import { decorateModuleRef } from './app/environment';
/**
 * App Module
 * our top level module that holds all of our components.
 */
import { AmpleModuleNgFactory } from '../../../../compiled/src/main/webapp/resources/app/app.module.ngfactory';
/**
 * Bootstrap our Angular app with a top level NgModule.
 */
export function main(): Promise<any> {
  return platformBrowser()
    .bootstrapModuleFactory(AmpleModuleNgFactory)
    .then()
    .catch((err) => console.error(err));
}

switch (document.readyState) {
  case 'loading':
    document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
    break;
  case 'interactive':
  case 'complete':
  default:
    main();
}

function _domReadyHandler() {
  document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
  main();
}