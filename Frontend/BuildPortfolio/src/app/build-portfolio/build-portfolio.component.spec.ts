import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildPortfolioComponent } from './build-portfolio.component';

describe('BuildPortfolioComponent', () => {
  let component: BuildPortfolioComponent;
  let fixture: ComponentFixture<BuildPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
