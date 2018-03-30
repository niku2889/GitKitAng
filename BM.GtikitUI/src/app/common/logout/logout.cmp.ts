import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.cmp.html'
})
export class LogoutComponent implements OnInit {
    constructor(
        private router: Router
        ) {
    }

    ngOnInit() {
        localStorage.setItem('login','false');
        localStorage.setItem('custid','');
        this.router.navigate(['/']);
    }
}



