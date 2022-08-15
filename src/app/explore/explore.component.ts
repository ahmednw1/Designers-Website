import { Component, OnInit } from '@angular/core';
import { form } from 'src/Types/form';
import { FormsService } from '../forms.service';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  forms:form[] = []
  constructor(private fs:FormsService) { }

  ngOnInit(): void {
  }

  printData(){
    this.forms = this.fs.getAll()
  }

  navigate(){
    
  }
}
