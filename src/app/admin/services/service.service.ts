import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }

  public patching_data:any;
  public editing:boolean =false;
  fetchData() {
    // Make an HTTP GET request using HttpClient
    return this.http.get('http://localhost:5000/list');
  }
  postData(payload:any){
    return this.http.post("http://localhost:5000/create",payload);
  }
  deletedata(id:any){
    const url = `http://localhost:5000/delete/${id}`;
    return this.http.delete(url);
  }
  updateData(data: any, id: any): Observable<any> {
    console.log(id);
    
    return this.http.put(`http://localhost:5000/update/${id}`, data)
}

}
