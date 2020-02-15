import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { HelloService } from './hello.service';

import SpyObj = jasmine.SpyObj;

/**
 * Testing a component class without the DOM (same as a service test)
 */
describe('App Component', () => {
  let appComponent: AppComponent;
  let helloService: SpyObj<HelloService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppComponent,
        {
          provide: HelloService,
          useValue: jasmine.createSpyObj<HelloService>(
            'HelloService',
            ['calculateHello']
          )
        }
      ]
    });

    appComponent = TestBed.get(AppComponent);
    helloService = TestBed.get(HelloService);
  });

  it('should have no greeting after construction', () => {
    expect(appComponent.greeting).toEqual('');
    expect(helloService.calculateHello).not.toHaveBeenCalled();
  });

  it('should calculate greeting', () => {
    // setup and preconditions
    helloService.calculateHello.and.returnValue('Hello, Joe!');

    // call test method
    appComponent.calculateGreeting();

    // assert postconditions
    expect(appComponent.greeting).toBe('Hello, Joe!');

    // verify mocks
    expect(helloService.calculateHello).toHaveBeenCalledWith('Hello');
  });
});
