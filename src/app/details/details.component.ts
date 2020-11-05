import { Component,ElementRef, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})



// export class carddetails{
//   constructor(
//     private number: {},
//     private scheme: string,
//     private type: string,
//     private brand: string,
//     private prepaid: string,
//     private country: {},
//     private bank:{}
//   )
//   { 
//   }
// }


export class DetailsComponent implements OnInit {
 
  public data: any;

  constructor(private elementRef: ElementRef,  private http: HttpClient) { 
  
  }
  
  @Input()
  result$: Observable<any>;
  

  ngOnInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#C5C9B8';
  }

  onSubmit(form: NgForm){
    var cardnumber = form.value.cardnumber;
    this.http.get<any>('https://lookup.binlist.net/'+cardnumber).subscribe(Response => {
       console.log(Response);
       this.data = Response;
     });
  }

 

}
