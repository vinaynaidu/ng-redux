import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DataService
      ]
    });

  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  describe('When getData() is called', () => {

    const mockUrl = 'mock-url';
    const mockResponse = 7;

    it('should return data type as given generic data type',
      inject([HttpTestingController, DataService],
        (httpMock: HttpTestingController, service: DataService) => {

          // Queue up service http request in the mockHttp request
          service.getData<number>(mockUrl).subscribe(data => {
            expect(data).toBe(mockResponse);
            expect(typeof (data)).toBe('number');
          });

          // Set expectation for Http client mock
          const mockRequest = httpMock.expectOne(`./api-mocks/${mockUrl}.json`);
          // const mockRequest = httpMock.expectOne((req: HttpRequest<any>) => return req.url === mockUrl);
          expect(mockRequest.request.method).toEqual('GET');

          // Set fake data to be returned by mock; Satisfy pending request in queue
          mockRequest.flush(mockResponse);

        }));

  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    // Verify that there is no pending requests in queue
    httpMock.verify();
  }));

});
