import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPortfolioComponent } from './dynamic-portfolio.component';

describe('DynamicPortfolioComponent', () => {
  let component: DynamicPortfolioComponent;
  let fixture: ComponentFixture<DynamicPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
