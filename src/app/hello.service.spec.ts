import SpyObj = jasmine.SpyObj;

import { HelloService } from './hello.service';
import { UserService } from './user.service';

describe('HelloUserService', () => {
  let helloService: HelloService;
  let userService: SpyObj<UserService>;

  beforeEach(() => {
    // mock dependencies
    userService = jasmine.createSpyObj<UserService>('UserService', [
      'currentUser'
    ]);

    // manually inject mocks into service under test
    helloService = new HelloService(userService);
  });

  it('should calculate a greeting', () => {
    // program mock
    const user = {
      id: '1',
      firstName: 'Jack',
      lastName: 'Baur'
    };
    userService.currentUser.and.returnValue(user);

    // execute test method and assert result
    expect(helloService.calculateHello('Hello')).toEqual(
      'Hello, Jack Baur!'
    );

    // various options for verifying mocks
    expect(userService.currentUser).toHaveBeenCalled();
    expect(userService.currentUser.calls.count()).toEqual(1);
    // Unneeded in this case, but shows API options
    // More helpful if your spy is calling through to a real function
    expect(
      userService.currentUser.calls.mostRecent().returnValue
    ).toBe(user);
  });
});
