import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { EmailService } from '../../service/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-email',
  standalone: true,
  imports: [MatFormFieldModule,CommonModule,MatButtonModule,FormsModule,MatInputModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent implements OnInit{
 
  data={
    to:"",
    subject:"",
    message:"",
  }

  constructor(private emial:EmailService,private snack:MatSnackBar){ }

  ngOnInit():void { }

  doSubmitForm()
  {
    console.log("trying to submit the data");
    console.log("Data",this.data) ;
  
    if(this.data.to==''||this.data.subject=='')
    {
      this.snack.open("feilds cannot be empty");
    }

    this.emial.sendEmail(this.data).subscribe(
      response=>{
        console.log(response);
      },
      error=>
      {
        console.log(error);
      }
    )

 
  }
}
