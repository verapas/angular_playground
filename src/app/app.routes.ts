import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'template-forms',
    loadComponent: () =>
      import('./template-forms/template-forms').then((m) => m.TemplateForms),
  },
  {
    path: 'reactive-forms',
    loadComponent: () =>
      import('./reactive-forms/reactive-forms').then((m) => m.ReactiveForms),
  },
  {
    path: 'signal-forms',
    loadComponent: () =>
      import('./signal-forms/signal-forms').then((m) => m.SignalForms),
  },
];
