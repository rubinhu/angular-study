import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

/**
 * 测试服务
 * 为了检查你的服务是否正常工作，你可以专门为它们编写测试。
 * To check that your services are working as you intend, you can write tests specifically for them.
 * 服务往往是最容易进行单元测试的文件。下面是一些针对 ValueService 的同步和异步单元测试，甚至不需要 Angular 测试工具的帮助。
 * Services are often the smoothest files to unit test. Here are some synchronous and asynchronous unit tests of the ValueService written without assistance from Angular testing utilities.
*/
describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // getValue
  it('#getValue should return real value', () => {
    expect(service.getValue()).toBe('real value');
  });

  // setValue
  it('#setValue should return my set value', () => {
    service.setValue('my set value')
    expect(service.getValue()).toBe('my set value');
  });

  // getObservableValue
  it('#getObservableValue should return observable value', (done: DoneFn) => {
    service.getObservableValue().subscribe(value => {
      expect(value).toBe('observable value');
      done();
    });
  });

  // getPromiseValue
  it('#getPromiseValue should return promise value', (done: DoneFn) => {
    service.getPromiseValue().then(value => {
      expect(value).toBe('promise value');
      done();
    });
  });

  // getObservableDelayValue
  it('#getObservableDelayValue should return observable delay value', (done: DoneFn) => {
    service.getObservableDelayValue().subscribe(value => {
      expect(value).toBe('observable delay value');
      done();
    });
  });
});
