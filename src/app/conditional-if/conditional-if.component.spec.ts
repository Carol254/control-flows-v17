import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalIfComponent } from './conditional-if.component';

describe('ConditionalIfComponent', () => {
  let component: ConditionalIfComponent;
  let fixture: ComponentFixture<ConditionalIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionalIfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConditionalIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
