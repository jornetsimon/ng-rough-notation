import { Inject, Injectable } from '@angular/core';
import { RoughAnnotation } from 'rough-notation/lib/model';
import { annotate } from 'rough-notation';
import { Observable, Subject } from 'rxjs';
import { filter, scan, tap } from 'rxjs/operators';
import { getDefaultTypeColor } from './utility';
import { RoughAnnotationConfig } from './rough-annotation-config';

@Injectable()
export class RoughNotationService {
	private visibilitySubject = new Subject();

	instance: RoughAnnotation;
	inputConfig: Partial<RoughAnnotationConfig> = {};
	visibilityState$: Observable<boolean> = this.visibilitySubject.asObservable().pipe(
		filter(() => !!this.instance),
		scan((currentState) => !currentState, false),
		tap((show: boolean) => (show ? this.instance.show() : this.instance.hide()))
	);

	/**
	 * Generate config object from defaults and input overrides
	 */
	get config(): RoughAnnotationConfig {
		if (this.inputConfig.type && !this.inputConfig.color) {
			// When a type is specified without a color
			// Apply the default
			this.inputConfig.color = getDefaultTypeColor(this.inputConfig.type);
		}
		return { ...this.defaultConfig, ...this.inputConfig };
	}

	constructor(@Inject('DEFAULT_CONFIG') private defaultConfig: RoughAnnotationConfig) {}

	instantiate(element: HTMLElement): RoughAnnotation {
		this.instance = annotate(element, this.config);
		return this.instance;
	}

	destroy() {
		this.instance.remove();
	}

	toggleVisibility() {
		this.visibilitySubject.next();
	}
}
