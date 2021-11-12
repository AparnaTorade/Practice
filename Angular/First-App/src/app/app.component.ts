import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First-App';
  public name="aparna";
  public myId="apk";
  public isdisabled=false;
  public hasError=false;
  public titleStyle={
    color:"blue",
    fontStyle:"italic"
  }
  public greeting="";
  public myname="";
  public color="";
  public numbers=[1,2,3,4,5,6];
  public FirstName="Aparna";
  public message="";
  public employee={
    "fname":"aparna",
    "lname":"torade"
  }

  onclick(event:any)
    {
      console.log(event);
   //   this.greeting="welcome to angular pragramming";
      this.greeting=event.type;

    }
    logmsg(value:any)
    {
      console.log(value);
    }
} 

