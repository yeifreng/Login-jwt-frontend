import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStockComponent } from './table-stock.component';

describe('TableStockComponent', () => {
  let component: TableStockComponent;
  let fixture: ComponentFixture<TableStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableStockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
