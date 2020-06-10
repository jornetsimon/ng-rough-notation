import { TestBed } from '@angular/core/testing';

import { RoughNotationService } from './rough-notation.service';

describe('RoughNotationService', () => {
	let service: RoughNotationService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(RoughNotationService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
