import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;
  let apiKey: string;

  beforeEach(() => {
    apiKey = `AIzaSyA1eEUh3FayeTnUidNxq1_7I4tKO7TZrxs`; 
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostService);
  });

  it('Ocekujemo observable value od servisa',
    (done: DoneFn) => {
      service.getPosts(apiKey, 100).subscribe(value => {
        expect(value).toBe('observable value');
        done();
      });
    });
});

