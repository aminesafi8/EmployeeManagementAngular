import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichesListComponent } from './fiches-list.component';

describe('FichesListComponent', () => {
  let component: FichesListComponent;
  let fixture: ComponentFixture<FichesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
