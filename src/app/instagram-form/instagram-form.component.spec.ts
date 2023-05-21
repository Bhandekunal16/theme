import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramFormComponent } from './instagram-form.component';

describe('InstagramFormComponent', () => {
  let component: InstagramFormComponent;
  let fixture: ComponentFixture<InstagramFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstagramFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InstagramFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
