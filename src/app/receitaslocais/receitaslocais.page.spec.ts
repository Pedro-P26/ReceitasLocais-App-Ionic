import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceitaslocaisPage } from './receitaslocais.page';

describe('ReceitaslocaisPage', () => {
  let component: ReceitaslocaisPage;
  let fixture: ComponentFixture<ReceitaslocaisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaslocaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
