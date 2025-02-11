import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistreceitPage } from './histreceit.page';

describe('HistreceitPage', () => {
  let component: HistreceitPage;
  let fixture: ComponentFixture<HistreceitPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistreceitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
