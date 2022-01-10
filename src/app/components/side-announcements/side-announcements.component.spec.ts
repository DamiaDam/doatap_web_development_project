import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideAnnouncementsComponent } from './side-announcements.component';

describe('SideAnnouncementsComponent', () => {
  let component: SideAnnouncementsComponent;
  let fixture: ComponentFixture<SideAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideAnnouncementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
