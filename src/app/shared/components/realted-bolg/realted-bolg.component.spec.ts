import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtedBolgComponent } from './realted-bolg.component';

describe('RealtedBolgComponent', () => {
  let component: RealtedBolgComponent;
  let fixture: ComponentFixture<RealtedBolgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealtedBolgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtedBolgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
