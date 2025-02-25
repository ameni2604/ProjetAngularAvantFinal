import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.css'
})
export class PageLoginComponent implements OnInit {


  readonly loginService:LoginService=inject(LoginService)
  readonly router:Router=inject(Router)
  
productForm=new FormGroup(
{
  userName:new FormControl(''),
  password:new FormControl('')
}
)
onSignUp(userName: string,password: string) {
  this.loginService.login(userName,password).subscribe
  (rep=>{
    if(rep)
      this.router.navigate(['/admin'])
    else
    alert('mdp et name incorrect')
  })


}
  
  
  ngOnInit() {
    console.log('Page Login Loaded');
  }

}