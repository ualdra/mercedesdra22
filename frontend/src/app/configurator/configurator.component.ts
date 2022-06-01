import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { CarService } from '../car.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss']
})


export class ConfiguratorComponent implements OnInit {

  modelCars : any = [];
  configuration : any = {};
  typeConfiguration : number = 1;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor( private breakpointObserver: BreakpointObserver,
    private carService: CarService, 	private _router: Router,
  	private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
  		let id = params["id"];
      console.log(id);
  	});
  }
  changeMotores(){
    this.typeConfiguration = 1;
  }
  changePinturas(){
    this.typeConfiguration = 2;
  }
  changeLlantas(){
    this.typeConfiguration = 3;
  }
  changeTapicerias(){
    this.typeConfiguration = 4;
  }
  changeAsientos(){
    this.typeConfiguration = 5;
  }
}
