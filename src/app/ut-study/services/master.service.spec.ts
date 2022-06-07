import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { ValueService } from './value.service';

/**
 * 有依赖的服务 Services with dependencies
 * 服务通常依赖于 Angular 在构造函数中注入的其它服务。在很多情况下，调用服务的构造函数时，很容易手动创建和注入这些依赖。
 * Services often depend on other services that Angular injects into the constructor. 
 * In many cases, you can create and inject these dependencies by hand while calling the service's constructor.
 */
describe('MasterService', () => {
  let service: MasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // 使用 new 创建了一个 ValueService，并把它传给了 MasterService 的构造函数。
  it('#getValue should return real value from the real service', () => {
    service = new MasterService(new ValueService());
    expect(service.getValue()).toBe('real value');
  });

  // 可以模拟依赖、使用仿制品
  it('#getValueWithObject should return faked value from a fake object', () => {
    const fake =  { getValue: () => 'fake value' };
    service = new MasterService(fake as ValueService);
    expect(service.getValueWithObject()).toBe('fake value');
  });

  // 或者在相关的服务方法上创建一个测试间谍
  it('#getValueWithSpy should return stubbed value from a spy', () => {
    // create `getValue` spy on an object representing the ValueService
    const valueServiceSpy =
      jasmine.createSpyObj('ValueService', ['getValue']);

    // set the value to return when the `getValue` spy is called.
    const stubValue = 'stub value';
    valueServiceSpy.getValue.and.returnValue(stubValue);

    service = new MasterService(valueServiceSpy);

    expect(service.getValueWithSpy())
      .withContext('service returned stub value').toBe(stubValue);
    expect(valueServiceSpy.getValue.calls.count())
      .withContext('spy method was called once').toBe(1);
    expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
      .toBe(stubValue);
  });

});
