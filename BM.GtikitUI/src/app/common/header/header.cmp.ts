import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.cmp.html'
})
export class HeaderComponent implements OnInit {
    isAccount: boolean = false;

    constructor(
        private router: Router
        ) {
    }

    ngOnInit() {
        let flag = localStorage.getItem('login');
        
        if (flag != 'false') {
            this.isAccount = true;
            this.router.navigate(['/profile']);
        }
    }

    logout(){
        localStorage.setItem('login','false');
        this.isAccount = false;
        this.router.navigate(['/']);
    }
}



