import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  overlayElement:any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
 
  }
change(){
  document.getElementById("size")?.addEventListener("click",function(){
    const textElement = document.getElementById("text");
    if (textElement) {
      textElement.style.fontSize = "50px";
    }else{
      
    }
   
    
  })


}
}







