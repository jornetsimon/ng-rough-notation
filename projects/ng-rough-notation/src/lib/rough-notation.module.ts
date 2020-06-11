import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoughNotationDirective } from './rough-notation.directive';
import { RoughNotationService } from './rough-notation.service';
import { defaultConfig } from './utility';
import { RoughAnnotationConfig } from 'rough-notation/lib/model';
import { RoughNotationGroupComponent } from './rough-notation-group/rough-notation-group.component';

@NgModule({
	declarations: [RoughNotationDirective, RoughNotationGroupComponent],
	imports: [CommonModule],
	exports: [RoughNotationDirective, RoughNotationGroupComponent],
	providers: [
		RoughNotationService,
		{
			provide: 'DEFAULT_CONFIG',
			useValue: defaultConfig,
		},
	],
})
export class RoughNotationModule {
	static forRoot(
		defaultConfigOverride?: RoughAnnotationConfig
	): ModuleWithProviders<RoughNotationModule> {
		return {
			ngModule: RoughNotationModule,
			providers: [
				RoughNotationService,
				{
					provide: 'DEFAULT_CONFIG',
					useValue: defaultConfigOverride ?? defaultConfig,
				},
			],
		};
	}
}
