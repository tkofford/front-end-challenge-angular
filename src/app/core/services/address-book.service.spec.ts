import { TestBed } from '@angular/core/testing';
import { AddressBookService } from './address-book.service';
import { HttpClientModule } from '@angular/common/http';
import {PersonModel} from '../components/address-book/person.model';

describe('AddressBookService', () => {
  let service: AddressBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AddressBookService]
    });
    service = TestBed.inject(AddressBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrieve posts from the API via GET', () => {
    const mockAddresses: PersonModel[] = [{
      id: 1,
      name: 'Sylvia Frami',
      streetAddress: '59089 Carrie Views',
      city: 'West Tyreek',
      state: 'Louisiana',
      zipCode: '70394-1380',
      phone: '892-288-1669'
    }, {
      id: 2,
      name: 'Kyleigh Jones',
      streetAddress: '220 Fadel Estate',
      city: 'East Janelle',
      state: 'Alaska',
      zipCode: '99591-1810',
      phone: '(729) 738-3594'
    }];
    service.getAddresses().subscribe(addresses => {
      expect(addresses.length).toBe(2);
      expect(addresses).toEqual(mockAddresses);
    });
  });
});
