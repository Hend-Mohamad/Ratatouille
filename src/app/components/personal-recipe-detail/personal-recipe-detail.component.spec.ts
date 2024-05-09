import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalRecipeDetailComponent } from './personal-recipe-detail.component';

describe('PersonalRecipeDetailComponent', () => {
  let component: PersonalRecipeDetailComponent;
  let fixture: ComponentFixture<PersonalRecipeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalRecipeDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalRecipeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
