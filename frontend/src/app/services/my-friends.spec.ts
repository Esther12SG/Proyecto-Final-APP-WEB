import { TestBed } from '@angular/core/testing';

import { MyFriends } from './my-friends';

describe('MyFriends', () => {
  let service: MyFriends;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFriends);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
