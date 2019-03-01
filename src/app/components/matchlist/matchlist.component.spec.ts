import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchlistComponent } from './matchlist.component';

describe('MatchlistComponent', () => {
  let component: MatchlistComponent;
  let fixture: ComponentFixture<MatchlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
