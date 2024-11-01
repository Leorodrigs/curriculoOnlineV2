import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCurriculoComponent } from './portfolio-curriculo.component';

describe('PortfolioCurriculoComponent', () => {
  let component: PortfolioCurriculoComponent;
  let fixture: ComponentFixture<PortfolioCurriculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioCurriculoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioCurriculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
