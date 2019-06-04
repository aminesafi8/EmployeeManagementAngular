import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongesListComponent } from './conges-list.component';

describe('CongesListComponent', () => {
  let component: CongesListComponent;
  let fixture: ComponentFixture<CongesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
