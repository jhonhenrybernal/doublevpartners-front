import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { List } from '../modules/list';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of users', () => {
    const mockResponse:List = {
      "total_count": 1,
      "incomplete_results": false,
      "items": [
        {
          "login": "octocat",
          "id": 1,
          "avatar_url": "https://github.com/images/error/octocat_happy.gif",
          "followers": 10
        }
      ],
      "login": '',
      "id": 0,
      "node_id": '',
      "avatar_url": '',
      "gravatar_id": '',
      "url": '',
      "html_url": '',
      "followers_url": '',
      "following_url": '',
      "gists_url": '',
      "starred_url": '',
      "subscriptions_url": '',
      "organizations_url": '',
      "repos_url": '',
      "events_url": '',
      "received_events_url": '',
      "type": '',
      "site_admin": '',
      "score": 0
    };

    service.getUsers('octocat').subscribe(res => {
      expect(res).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://api.github.com/search/users?q=octocat');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should return user details', () => {
    const mockResponse = {
      "login": "octocat",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "followers": 10
    };

    service.getFindUsers('octocat').then(res => {
      expect(res).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://api.github.com/users/octocat');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
