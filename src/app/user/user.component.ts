import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { form } from 'src/Types/form';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  form:form | undefined = undefined
  constructor(private ds: FormsService, private route: ActivatedRoute) { }

  async ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');

    const forms:form[] = this.ds.getAll();
    this.form = forms.find(form => form.name.toUpperCase() == name?.toUpperCase());
  }

}
