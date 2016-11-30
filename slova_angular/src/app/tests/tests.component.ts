import { Component, OnInit } from '@angular/core';

import { Test } from './test.model';
import { TestService } from './test.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  newTest: Test = new Test(
    1, 'recently_added'
  )      

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.generateTest()
        
  }

}
