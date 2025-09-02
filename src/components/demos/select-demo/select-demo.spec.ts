import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDemo } from './select-demo';

describe('SelectDemo', () => {
  let component: SelectDemo;
  let fixture: ComponentFixture<SelectDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
