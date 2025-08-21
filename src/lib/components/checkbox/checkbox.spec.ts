import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UICheckbox } from './checkbox';

describe('Uicheckbox', () => {
  let component: UICheckbox;
  let fixture: ComponentFixture<UICheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UICheckbox],
    }).compileComponents();

    fixture = TestBed.createComponent(UICheckbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
