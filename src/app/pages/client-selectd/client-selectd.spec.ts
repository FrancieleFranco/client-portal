import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSelectd } from './client-selectd';

describe('ClientSelectd', () => {
  let component: ClientSelectd;
  let fixture: ComponentFixture<ClientSelectd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientSelectd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSelectd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
