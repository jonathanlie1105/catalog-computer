import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoadingSkeletonDetailComponent } from './loading-skeleton-detail.component';

describe('LoadingSkeletonDetailComponent', () => {
  let component: LoadingSkeletonDetailComponent;
  let fixture: ComponentFixture<LoadingSkeletonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingSkeletonDetailComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingSkeletonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
