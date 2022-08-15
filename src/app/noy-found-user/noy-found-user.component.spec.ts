import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoyFoundUserComponent } from './noy-found-user.component';

describe('NoyFoundUserComponent', () => {
  let component: NoyFoundUserComponent;
  let fixture: ComponentFixture<NoyFoundUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoyFoundUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoyFoundUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
