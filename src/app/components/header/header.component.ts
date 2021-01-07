import { RUTAS } from '../../../assets/data/sitemap.data';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Ruta } from '../../../data/sitemap.model';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  checked:boolean = false;

  isDesktop = this.deviceService.isDesktop();

  constructor(private deviceService: DeviceDetectorService, private router:Router){}

  ngOnInit() {
    window.onscroll = function() {myFunction()};

    const navbar = document.getElementById("navbar");
    const main:HTMLElement = document.querySelector(".main");
    const sticky = navbar.offsetTop;

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      this.checked = false;
    });

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        main.style.paddingTop = `${navbar.offsetHeight}px`;
      } else {
        navbar.classList.remove("sticky");
        main.style.paddingTop = "0";
      }
    }
  }



}
