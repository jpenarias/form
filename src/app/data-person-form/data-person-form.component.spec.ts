import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPersonFormComponent } from './data-person-form.component';

describe('DataPersonFormComponent', () => {
  let component: DataPersonFormComponent;
  let fixture: ComponentFixture<DataPersonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPersonFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
