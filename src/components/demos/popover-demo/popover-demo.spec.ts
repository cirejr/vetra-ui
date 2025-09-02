import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDemo } from './popover-demo';

describe('PopoverDemo', () => {
  let component: PopoverDemo;
  let fixture: ComponentFixture<PopoverDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopoverDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
