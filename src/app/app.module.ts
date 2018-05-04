import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { EagerComponent } from './eager.component';

import { HttpClientModule } from '@angular/common/http';
import {MyModule} from './my.module';

const routes: Routes = [
    {path: '', redirectTo: 'eager', pathMatch: 'full'},
    {path: 'eager', component: EagerComponent},
    {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'}
];

@NgModule({
    declarations: [
        AppComponent,
        EagerComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        MyModule,
        RouterModule.forRoot(routes)
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
