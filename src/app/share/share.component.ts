import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  numFiles:number[] = [1]
  form:FormGroup = new FormGroup({});
  fileds = [
    "Graphic designer","UI/UX designer","Multimedia artist & animator",
    "Art director","Film & video editor","Motion designer"
  ];
  fileName:string[] = [];
  
  constructor(private fb:FormBuilder, private http:HttpClient ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]), 
      twitter: new FormControl(''),
      email : new FormControl('',[Validators.required,Validators.email]),
      filed: new FormControl('',[Validators.required])
    })
  }

  
  onFileSelected(event:any) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName.push(file.name);

        const formData = new FormData();

        formData.append("thumbnail", file);

        //const upload$ = this.http.post("../data/forms", formData);
        //upload$.subscribe();
    }
}
  submitForm(){
    if (!this.form.valid){
      this.form.markAllAsTouched();
      return;
    }
    
    console.log(this.form.value)
  }

  addFile(){
    this.numFiles.push(1) 
  }

  subFile(index:number){
    this.numFiles.splice(index-1,1)
    this.fileName.slice(index,1)
  }
}
