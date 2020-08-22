import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  //registerForm: FormGroup;
   // submitted = false;

  searchText: string;

  title = 'my-app';
  isform = false;
  isbtn=true;
  isEdit=true;
  isUpdate=false;
  isDelete=true;
  allDoctors: Object;
  index:number ;
  doctorObj = {
    name: "",
    hospital: "",
    department: "",
    designation: "",
    date: "",
    time: "",
    location1: "",
    location2: ""
  }

constructor(private commonService:ServiceService, private formBuilder: FormBuilder){}
ngOnInit(){
  this.getDoctorslist();
  this.doctorObj;

}

showform(){
  this.isform = true;
  this.isbtn = false;
}
  adddoctors (formobj){
    console.log(formobj);
    debugger;
    if(formobj.valid){
      this.commonService.createDoctor(formobj.value).subscribe( (response)=> {
        this.getDoctorslist();
        this.doctorObj.name ='';
        this.doctorObj.hospital ='';
        this.doctorObj.department ='';
        this.doctorObj.designation ='';
        this.doctorObj.date='';
        this.doctorObj.time ='';
        this.doctorObj.location1 ='';
        this.doctorObj.location2 ='';
       })
       alert('detailed saved')
    }
    else {
      
      alert('please enter required field')
    }
    //template form  , pass obejct and get value here and validate it, formobj.dirty, formobj.valid marl all toched
    
  }

  getDoctorslist(){
    this.commonService.getAlldoctorsList().subscribe( (response)=> {
      this.allDoctors = response;
    })
  }

  deleteDoctor(doctor){
    this.commonService.deleteDoctor(doctor).subscribe( () => {
      this.getDoctorslist();
    })
    alert('Data Deleted !!')
  }
  editdoctors(doctor){
    this.isform = true;
    this.isUpdate=true;
    this.isEdit=false;
    debugger;
    
this.doctorObj = doctor;
this.index = doctor.id;
  }
  updateDoctor(){
    
    this.isEdit=true;
    this.isUpdate=false;
this.commonService.updateDoctor(this.doctorObj).subscribe(() =>{
  this.getDoctorslist();
  
})
  }
}
