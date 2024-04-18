import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildPersonalPortfolioComponent } from './build-personal-portfolio.component';

describe('BuildPersonalPortfolioComponent', () => {
  let component: BuildPersonalPortfolioComponent;
  let fixture: ComponentFixture<BuildPersonalPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildPersonalPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildPersonalPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
