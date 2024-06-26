import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalRecipesComponent } from './personal-recipes.component';

describe('PersonalRecipesComponent', () => {
  let component: PersonalRecipesComponent;
  let fixture: ComponentFixture<PersonalRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalRecipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
