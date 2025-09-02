import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSelect } from './default-select';

describe('DefaultSelect', () => {
  let component: DefaultSelect;
  let fixture: ComponentFixture<DefaultSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
