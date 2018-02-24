import { TestBed, inject } from '@angular/core/testing';


describe('RealtimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealtimeService]
    });
  });

  it('should be created', inject([RealtimeService], (service: RealtimeService) => {
    expect(service).toBeTruthy();
  }));
});
