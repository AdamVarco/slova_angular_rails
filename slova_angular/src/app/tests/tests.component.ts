import { Component, OnInit } from '@angular/core';

import { Test } from './test.model';
import { TestService } from './test.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
    

}
