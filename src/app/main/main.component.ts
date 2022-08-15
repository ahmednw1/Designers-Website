import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  url:string[]=[];
  flag:boolean = false;
  navigate:boolean = true;
  i:number = 0
  submited: boolean = false

  numFiles:number[] = [1]
  form:FormGroup = new FormGroup({});
  fileds = [
    "Graphic designer","UI/UX designer","Multimedia artist & animator",
    "Art director","Film & video editor","Motion designer"
  ];
  fileName:string[] = [];
  fileObjects: File[] = [];
  
  constructor(private fb:FormBuilder, private http:HttpClient, private route:ActivatedRoute, private fs:FormsService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]), 
      twitter: new FormControl(''),
      email : new FormControl('',[Validators.required,Validators.email]),
      filed: new FormControl('',[Validators.required]),
      file : new FormControl('',),
      about : new FormControl('',[Validators.required])  
    })
  }

  
  onFileSelected(event:any) {

    const file:File = event.target.files[0];
    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.url.push(event.target.result);
    };

    reader.onerror = (event: any) => {
      console.log("File could not be read: " + event.target.error.code);
    };

    reader.readAsDataURL(event.target.files[0]);

    if (file) {
        this.fileName.push(file.name)
        this.fileObjects.push(file);

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
    
    else{ 
      this.i++
      this.fs.saveData(this.i,{
        name  : this.form.controls["name"].value,
        email :this.form.controls["email"].value,
        filed : this.form.controls["filed"].value,
        files : this.url,
        id:this.i,
        about: this.form.controls["about"].value
        })
    }
  }


  addFile(){
    this.numFiles.push(1) 
  }

  subFile(index:number){
    this.numFiles.splice(index-1,1)
    this.fileName.slice(index,1)
  }

  toggel(){
    this.flag = !this.flag
    
  }

  toggel2(){
    if (!this.form.valid){
      this.form.markAllAsTouched();
      return;
    }
    
    else{ 
    this.submited = !this.submited
  }
}
toggel3(){
  this.submited = !this.submited
}


}
