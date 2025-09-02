import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListboxDemo } from './listbox-demo';

describe('ListboxDemo', () => {
  let component: ListboxDemo;
  let fixture: ComponentFixture<ListboxDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListboxDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListboxDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
