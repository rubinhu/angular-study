import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtStudyComponent } from './ut-study.component';

describe('UtStudyComponent', () => {
  let component: UtStudyComponent;
  let fixture: ComponentFixture<UtStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
