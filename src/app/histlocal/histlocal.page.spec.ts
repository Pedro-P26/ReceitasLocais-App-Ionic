import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistlocalPage } from './histlocal.page';

describe('HistlocalPage', () => {
  let component: HistlocalPage;
  let fixture: ComponentFixture<HistlocalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistlocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
