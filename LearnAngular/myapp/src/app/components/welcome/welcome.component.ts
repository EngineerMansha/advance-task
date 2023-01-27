import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServicesService } from 'src/app/services/data-services.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor(private router: Router, private _Data: DataServicesService) {}
  UserList: any = [];
  ngOnInit(): void {
    this.getUsers();
  }
  async getUsers() {
    const result = await this._Data.getUsers();
    const data = await this._Data.getFakeData();
    this.UserList = result['data'];
    console.log(this.UserList);
    console.log(data);
  }

  logout() {}
}
