import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSelectDemo } from './default-select-demo';

describe('DefaultSelectDemo', () => {
  let component: DefaultSelectDemo;
  let fixture: ComponentFixture<DefaultSelectDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultSelectDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultSelectDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
