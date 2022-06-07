import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { WelcomeComponent } from './welcome.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ DemoNgZorroAntdModule ],
      declarations: [ WelcomeComponent ],
      providers:[]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
