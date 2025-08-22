import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarDemo } from './avatar-demo';

describe('AvatarDemo', () => {
  let component: AvatarDemo;
  let fixture: ComponentFixture<AvatarDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
