import { HelloService } from './hello.service';

// We don't need Angular testing support for this simple service

describe('HelloService', () => {
  let service: HelloService;

  beforeEach(() => {
    service = new HelloService();
  });

  it('should calculate a greeting', () => {
    expect(service.calculateHello('Joe')).toBe('Hello, Joe!');
  });
});
