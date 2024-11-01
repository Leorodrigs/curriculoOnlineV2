import { ComponentFixture, TestBed } from '@angular/core/testing';

import { containerComponent } from './container.component';

describe('containerComponent', () => {
  let component: containerComponent;
  let fixture: ComponentFixture<containerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [containerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(containerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
