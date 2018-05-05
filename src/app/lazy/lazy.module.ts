import { NgModule } from '@angular/core';

import { LazyComponent } from './lazy.component';
import { Routes, RouterModule } from '@angular/router';
import {AnotherModule} from './another.module';


const routes: Routes = [
  { path: '', redirectTo: 'lazy', pathMatch: 'full' },
  { path: 'lazy', component: LazyComponent }
];

@NgModule({
  imports: [
   RouterModule.forChild(routes),
   AnotherModule
  ],
  declarations: [LazyComponent],
  providers: []
})
export class LazyModule { }
