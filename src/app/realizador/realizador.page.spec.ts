import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RealizadorPage } from './realizador.page';

describe('RealizadorPage', () => {
  let component: RealizadorPage;
  let fixture: ComponentFixture<RealizadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
