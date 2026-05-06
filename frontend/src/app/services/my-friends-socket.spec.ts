import { TestBed } from '@angular/core/testing';

import { MyFriendsSocket } from './my-friends-socket';

describe('MyFriendsSocket', () => {
  let service: MyFriendsSocket;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFriendsSocket);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
