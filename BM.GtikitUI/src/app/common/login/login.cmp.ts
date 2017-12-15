import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { CommonService } from '../common.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
declare var $: any;
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
            .subscribe((response) => {
                console.log(response);
                this.toastr.success('Login Successfull!', 'Success!');
                $("#login-modal").modal('hide');
            },
            (error) => {
                console.log(error);
                this.toastr.error(error, 'Error!');
                this.loading = false;
            });
    }
}



