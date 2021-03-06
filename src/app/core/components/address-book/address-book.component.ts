import { Component, OnInit } from '@angular/core';
import {AddressBookService} from '../../services/address-book.service';
import {PersonModel} from './person.model';

@Component({
  selector: 'app-person',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {
  addressbook = [];
  constructor(private apiService: AddressBookService) { }

  ngOnInit(): void {
    this.apiService.getAddresses()
        .subscribe((data: any[]) => {
          this.addressbook = data;
          console.log(data);
        });
  }

}
