import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { Sesija } from '../sesija';
import 'rxjs/add/operator/toPromise';
@Component({
  templateUrl: './login.component.html'
})
//ako je logovan redirect na ''
export class LoginComponent implements OnInit{
	username='';
	password='';
	logApi: Sesija=new Sesija();	
	greskaPrijave: string;
	constructor(private _loginService: LoginService, private router: Router){}
	ngOnInit(): void {
    }

	onSubmit(loginPodaci: any){
		this.username=loginPodaci.uname;
		this.password=loginPodaci.pass;
	    this._loginService.postLogin(this.username, this.password)
			.subscribe(resLoginData => this.logApi = resLoginData);

		var object=this;
		setTimeout(function() { 
			if (object.logApi.success=='true'){ //??????????????????????????????????????????????????????
				//pozivanje API osoba i prosljedjivanje parametara
				object.router.navigate(['/pregled-predmeta', object.logApi.userid]);
			}
			else{
				object.greskaPrijave='Unijeli ste pogrešne korisničke podatke';
			}
		}, 1000);
		

		
	}
}
