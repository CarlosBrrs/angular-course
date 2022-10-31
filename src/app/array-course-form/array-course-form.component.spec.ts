import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayCourseFormComponent } from './array-course-form.component';

describe('ArrayCourseFormComponent', () => {
  let component: ArrayCourseFormComponent;
  let fixture: ComponentFixture<ArrayCourseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayCourseFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
