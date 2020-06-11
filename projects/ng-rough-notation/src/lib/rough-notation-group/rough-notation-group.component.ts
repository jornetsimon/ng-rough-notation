import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { RoughNotationDirective } from '../rough-notation.directive';

@Component({
	selector: 'rough-notation-group',
	templateUrl: './rough-notation-group.component.html',
	styleUrls: ['./rough-notation-group.component.css'],
})
export class RoughNotationGroupComponent implements AfterContentInit {
	private _show = true;
	@Input()
	set show(value: boolean) {
		this.setVisibility(value);
	}
	@ContentChildren(RoughNotationDirective, { descendants: true }) annotations: QueryList<
		RoughNotationDirective
	>;

	ngAfterContentInit(): void {
		this.setVisibility(this._show);
	}

	setVisibility(show: boolean) {
		if (this._show !== show) {
			this.toggleGroupMembers();
			this._show = show;
		}
	}

	toggleGroupMembers() {
		this.annotations.forEach((annotation) => annotation.toggle());
	}
}
