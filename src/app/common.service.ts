import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class CommonService {

    isAdmin: string;
    AdminOrUser = new EventEmitter<string>();
    url="http:/lprdemo.com";

    setAdminOrUser(value:string){
      this.isAdmin = value;
      this.AdminOrUser.next(this.isAdmin);
    }

    header = new HttpHeaders()
    .set('Access-Control-Allow-Origin','*');

    constructor(private httpclient:HttpClient){}

    fetchigd(){
      return this.httpclient.get<any>(this.url ,{headers:this.header})
    }

    pmochecklist(body:any){
    return this.httpclient.post<any>(this.url,body,{headers:this.header})
    }

    fetchpmo(){
      return this.httpclient.get<any>(this.url ,{headers:this.header})
    }

    bitsubmission(body:any){
      console.log(body);
    return this.httpclient.post<any>(this.url,body,{headers:this.header})
      
    }

    bitproposalreview(body:any){
      console.log(body);
    return this.httpclient.post<any>(this.url,body,{headers:this.header})
      
    }

    bitproposalfetch(){
      return this.httpclient.get<any>(this.url,{headers:this.header})
    }

    sendCreateLprDetails(body: any){
      console.log(body);
      return this.httpclient.post<any>('http://localhost:8082/lpr',body,{ headers: this.header});
    }
    
    postIgdDetails(body: any){
      console.log(body);
      return this.httpclient.post<any>('http://localhost:8082/lpr',body,{ headers: this.header});
      
    }
}