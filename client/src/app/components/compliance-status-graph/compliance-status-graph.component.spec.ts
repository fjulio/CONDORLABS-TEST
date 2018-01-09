import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceStatusGraphComponent } from './compliance-status-graph.component';

describe('ComplianceStatusGraphComponent', () => {
  let component: ComplianceStatusGraphComponent;
  let fixture: ComponentFixture<ComplianceStatusGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplianceStatusGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceStatusGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
