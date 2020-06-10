import {
	Directive,
	ElementRef,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
	Renderer2,
} from '@angular/core';
import { RoughAnnotation, RoughAnnotationConfig } from 'rough-notation/lib/model';
import { RoughNotationService } from './rough-notation.service';
import { Subscription } from 'rxjs';

@Directive({
	selector: '[roughNotation]',
	providers: [RoughNotationService],
	exportAs: 'roughNotation',
})
export class RoughNotationDirective implements OnInit, OnDestroy {
	private readonly initialTextColor: string;
	@Input('roughNotation')
	set roughNotation(value: Partial<RoughAnnotationConfig> | string) {
		if (typeof value === 'string') {
			if (value) {
				throw new Error('RoughAnnotationConfig object is expected as input');
			}
			this.service.inputConfig = {};
		} else {
			this.service.inputConfig = value;
		}
	}
	@Input() annotateOnInit = true;
	@Input('instance')
	get instance(): RoughAnnotation {
		return this.service.instance;
	}
	@Input() annotatedTextColor: string;
	@Output() isShowingChange = new EventEmitter<boolean>();

	private showStateSubscription: Subscription;

	constructor(
		private hostElement: ElementRef<HTMLElement>,
		private renderer: Renderer2,
		private service: RoughNotationService
	) {
		// Storing initial host element color
		this.initialTextColor = hostElement.nativeElement.style.color;

		this.showStateSubscription = this.service.visibilityState$.subscribe((state) => {
			this.isShowingChange.emit(state);

			if (this.annotatedTextColor) {
				// In case the user specified an annotation text color
				// We set or reset it according to the state
				const newColor = state ? this.annotatedTextColor : this.initialTextColor;
				this.renderer.setStyle(this.hostElement.nativeElement, 'color', newColor);
			}
		});
	}

	ngOnInit() {
		// Instantiate RoughNotation
		this.service.instantiate(this.hostElement.nativeElement, this.annotateOnInit);
	}

	toggle() {
		this.service.toggleVisibility();
	}

	ngOnDestroy() {
		this.showStateSubscription?.unsubscribe();
		this.service.destroy();
	}
}
