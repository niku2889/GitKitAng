import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.cmp.html'
})
export class PaymentComponent implements OnInit {

    constructor(
        private router: Router
        ) {
    }

    ngOnInit() {
        // let flag = localStorage.getItem('login');
        
        // if (flag != 'false') {
        //     this.isAccount = true;
        //     this.router.navigate(['/profile']);
        // }
    }

    reload(){
        window.location.reload();
    }
}



