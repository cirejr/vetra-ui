import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDialogDemo } from './alert-dialog-demo';

describe('AlertDialogDemo', () => {
  let component: AlertDialogDemo;
  let fixture: ComponentFixture<AlertDialogDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertDialogDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertDialogDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
