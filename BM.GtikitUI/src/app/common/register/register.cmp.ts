import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { CommonService } from '../common.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-register',
    templateUrl: './register.cmp.html',
    providers: [CommonService]
})
export class RegisterComponent implements OnInit {
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

    register() {
        this.loading = true;
        this.cService.createUser(this.model)
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