import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleTextComponent } from './toggle-text.component';

describe('ToggleTextComponent', () => {
  let component: ToggleTextComponent;
  let fixture: ComponentFixture<ToggleTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
