import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildBusinessPortfolioComponent } from './build-business-portfolio.component';

describe('BuildBusinessPortfolioComponent', () => {
  let component: BuildBusinessPortfolioComponent;
  let fixture: ComponentFixture<BuildBusinessPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildBusinessPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildBusinessPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
