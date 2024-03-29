import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(protected accountService:AccountService, 
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe(
     {
      next: _ => this.router.navigateByUrl('/members'),// el _ hace referencia a que no se usara el parametro response
      // error: error=> { this.toastr.error(error.error) }
     }
    );
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
