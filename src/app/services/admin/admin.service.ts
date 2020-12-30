import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl="/api";
  postId;
    constructor(private  httpClient: HttpClient) { }
  
    addUser(data) {
  
      this.httpClient.post<any>(this.baseUrl+'users/addUser',data).subscribe();
    }
    listUsers() {
     const user= this.httpClient.get(this.baseUrl+'users/allUsers');
     console.log("ok");
     
    return user;
    }
    updateUser(id,user){
      this.httpClient.put(this.baseUrl+'users/updateUser/'+id,user).subscribe(
        (msg) => console.log(msg),
        (error) => console.log(error)
      );;
    }
    getUserbyid(id){
      const user= this.httpClient.get(this.baseUrl+'users/getUserById/'+id);
      return user;
    }
    deleteUser(id){
      this.httpClient.delete(this.baseUrl+'users/deleteUser/'+id).subscribe(
        (msg) => console.log(msg),
        (error) => console.log(error)
      );
   
    }
    }
    

