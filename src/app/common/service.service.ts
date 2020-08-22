import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http:HttpClient) { }

  createDoctor(doctor){
return this._http.post('http://localhost:3000/doctors', doctor)
  }
  getAlldoctorsList(){
    return this._http.get('http://localhost:3000/doctors')
  }

  updateDoctor(doctor){
    return this._http.put('http://localhost:3000/doctors/' + doctor.id, doctor)
  }
  deleteDoctor(doctor){
    return this._http.delete('http://localhost:3000/doctors/' + doctor.id)
  }
}
