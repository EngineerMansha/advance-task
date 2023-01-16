import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectB0xComponent } from './select-b0x.component';

describe('SelectB0xComponent', () => {
  let component: SelectB0xComponent;
  let fixture: ComponentFixture<SelectB0xComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectB0xComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectB0xComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
