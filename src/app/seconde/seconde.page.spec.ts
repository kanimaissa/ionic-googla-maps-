import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecondePage } from './seconde.page';

describe('SecondePage', () => {
  let component: SecondePage;
  let fixture: ComponentFixture<SecondePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecondePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
