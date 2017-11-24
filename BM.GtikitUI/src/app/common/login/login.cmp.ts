import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { CommonService } from '../common.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.cmp.html',
    providers: [CommonService]
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;

    ngOnInit() {
    }

    constructor(
        private router: Router,
        private cService: CommonService,
        public toastr: ToastsManager,
        vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    login() {
        this.loading = true;
        this.cService.loginUser(this.model.loginEmail, this.model.password)
            .subscribe(
            data => {
                this.toastr.success('You are awesome!', 'Success!');
            },
            error => {
                this.toastr.error('error', 'error!');
                this.loading = false;
            });
    }
}



