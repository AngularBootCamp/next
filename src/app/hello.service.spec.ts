import { TestBed } from '@angular/core/testing';

import { HelloService } from './hello.service';
import { UserService } from './user.service';

import SpyObj = jasmine.SpyObj;

describe('HelloUserService', () => {
  let helloUserService: HelloService;
  let userService: SpyObj<UserService>;

  beforeEach(() => {
    // mock dependencies
    TestBed.configureTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: jasmine.createSpyObj<UserService>('UserService', [
            'currentUser'
          ])
        }
      ]
    });

    // Always retrieve services from TestBed
    helloUserService = TestBed.get(HelloService);
    userService = TestBed.get(UserService);
  });

  it('should calculate a greeting', () => {
    // program mock
    const user = {
      id: '1',
      firstName: 'Rachel',
      lastName: 'Hardin'
    };
    userService.currentUser.and.returnValue(user);

    // execute test method and assert result
    expect(helloUserService.calculateHello('Hello')).toBe(
      'Hello, Rachel Hardin!'
    );

    // verify mocks
    expect(userService.currentUser).toHaveBeenCalledTimes(1);
  });
});
