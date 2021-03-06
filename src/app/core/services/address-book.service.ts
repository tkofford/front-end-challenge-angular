import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PersonModel} from '../components/address-book/person.model';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {
  private SERVER_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public getAddresses() {
    return this.httpClient.get<PersonModel[]>(`${this.SERVER_URL}/addresses`);
  }
}
