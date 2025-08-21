import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaDemo } from './textarea-demo';

describe('TextareaDemo', () => {
  let component: TextareaDemo;
  let fixture: ComponentFixture<TextareaDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
