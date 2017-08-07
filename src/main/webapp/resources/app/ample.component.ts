import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ample',
  templateUrl: './ample.component.html',
  styleUrls: ['./ample.component.css']
})

export class AmpleComponent implements OnInit{

  constructor(private router:Router) { }

  ngOnInit()  {
      this.router.navigate(['login']);
  }

}