import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { PAGINAS_IFRAME } from '../assets/data/modelo.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private router: Router, private ar:ActivatedRoute){
    const body =  $("html,body");
    this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
              return;
          }
          $("html,body").animate({scrollTop:0},0);

          Array.from($('.navbar__lista')).forEach( (el:HTMLElement) => {
            setTimeout(()=>el.classList.contains("u-display-none")?'':el.classList.add("u-display-none"));
            setTimeout(()=>el.classList.remove("u-display-none"),1000);
          })

      });

     body.on("click", event=> {
        if( event.target.classList.contains('collapsed')){
          setTimeout(() => {body.animate({scrollTop:$(event.target).offset().top - $("#navbar").height()},350)}
          ,350);
        }
      });

  }

  ngOnInit() {


  }

  subir(){
    $("html,body").animate({scrollTop:0},400);
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  estaArriba(){
    return window.pageYOffset !== 0;
  }

  noEsIframe(){



    return !PAGINAS_IFRAME.find(el => window.location.href.indexOf( el ) >= 0);
  }
}
