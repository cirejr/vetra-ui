import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetDemo } from './sheet-demo';

describe('SheetDemo', () => {
  let component: SheetDemo;
  let fixture: ComponentFixture<SheetDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SheetDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheetDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
