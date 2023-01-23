import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenExamComponent } from './studen-exam.component';

describe('StudenExamComponent', () => {
  let component: StudenExamComponent;
  let fixture: ComponentFixture<StudenExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
