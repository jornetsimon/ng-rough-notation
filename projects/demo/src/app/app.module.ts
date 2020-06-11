import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoughNotationModule } from '../../../ng-rough-notation/src/lib/rough-notation.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, RoughNotationModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
