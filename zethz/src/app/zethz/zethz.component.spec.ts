import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZethzComponent } from './zethz.component';

describe('ZethzComponent', () => {
  let component: ZethzComponent;
  let fixture: ComponentFixture<ZethzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZethzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZethzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
