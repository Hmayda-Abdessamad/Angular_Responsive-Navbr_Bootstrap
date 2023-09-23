import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  ngOnInit(): void {
    const menuIcon = document.querySelector('#icon');
    const navbar = document.querySelector('.navbar');
    const btn = document.querySelector('.button');

    if(menuIcon){
      menuIcon.addEventListener('click', () => {
        if(navbar && btn ){
          menuIcon.classList.toggle('bx-x');
          navbar.classList.toggle('active');
          btn.classList.toggle('button')
        }
      });
    }

  }


}
