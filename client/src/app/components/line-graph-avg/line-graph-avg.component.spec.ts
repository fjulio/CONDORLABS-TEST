import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineGraphAvgComponent } from './line-graph-avg.component';

describe('LineGraphAvgComponent', () => {
  let component: LineGraphAvgComponent;
  let fixture: ComponentFixture<LineGraphAvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineGraphAvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineGraphAvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
