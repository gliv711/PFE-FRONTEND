import { Component, ElementRef, OnInit } from '@angular/core';
import { AbstractControl,  FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { User } from 'src/Models/Users/User';
import { UserServiceService } from 'src/Services/user-service/user-service.service';
import { EmailValidator } from 'src/email controle/EmailValidator';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstFormGroup = this.formbuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.formbuilder.group({
    secondCtrl: ['', Validators.required],
  });
  success : boolean = false ;
  isEditable = false;
  current: number = 1;
  steps!: number;
  progressBarWidth!: number;
  myform : any 
  user!: User;
  aujourdHui(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }
  

  constructor(private elementRef: ElementRef , private router: Router ,private formbuilder : FormBuilder  ,private userservice:UserServiceService,private emailValidator: EmailValidator) {
    this.myform = this.formbuilder.group({
      email: [
        '',
        [Validators.required, Validators.email],
        [emailValidator.validate.bind(emailValidator)],
      ],
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-ZÀ-ÿ ]*'), Validators.maxLength(30)]],
      prenom: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-ZÀ-ÿ ]*'), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(8),Validators.pattern('^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
      confpassword: ['', [Validators.required, Validators.minLength(8), this.matchPasswords.bind(this)]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z0-9À-ÿ ]*'), Validators.maxLength(30)]],
      region: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z0-9À-ÿ ]*'), Validators.maxLength(30)]],
      telephone :['',[Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern('[0-9]*')]],
      BirthDate:["",Validators.required],
      university :["",[Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-ZÀ-ÿ ]*'), Validators.maxLength(30)]],
      domain : ["",[Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-ZÀ-ÿ ]*'), Validators.maxLength(30)]],
      mondesocite:new FormControl(),
      dateFinPoste:new FormControl(),
      dateDebutPoste:new FormControl(),
      dateDebutEtude: [new Date(), [Validators.required,]],
      dateDeFinEtude: [new Date(), [Validators.required,]],
      


      role: new FormControl() ,
        });
    
       const n :number=0}
    matchPasswords(control: FormControl) {
      const password = control.parent?.get('password');
      if (password && control.value !== password.value) {
        return { mismatch: true };
      }
      return null;
    
   }
  
   

  getemail(){
    let email=this.myform.value.email
    this.userservice.getUserByEmail(email)
  }
  
  


   redirectToPlay(): void {
    this.router.navigateByUrl('/pay');
    // or
    // this.router.navigate(['/play']);
  }

  ngOnInit() {
    const fieldsets = this.elementRef.nativeElement.querySelectorAll('fieldset');
    this.steps = fieldsets.length;
    this.setProgressBar(this.current);

    const nextButtons = this.elementRef.nativeElement.querySelectorAll('.next');
   
    nextButtons.forEach((button: { addEventListener: (arg0: string, arg1: () => void) => void; parentNode: any; }) => {
    
      button.addEventListener('click', () => {
  if(this.myform.controls.email.valid && this.myform.controls.name.valid && this.myform.controls.prenom.valid  && this.myform.controls.password.valid && this.myform.controls. confpassword.valid  && nextButtons.item(0)== button) {
    // if(  nextButtons.item(0)== button) {

       
    
        
          console.log("success form");
          


          const current_fs = button.parentNode;
          const next_fs = current_fs.nextElementSibling;
  
          // Add Class Active
          const activeIndex = Array.from(fieldsets).indexOf(next_fs);
          const progressbarLis = this.elementRef.nativeElement.querySelectorAll('#progressbar li');
          progressbarLis[activeIndex].classList.add('active');
  
          // Show the next fieldset
          next_fs.style.display = 'block';
  
          // Hide the current fieldset with style
          let opacity = 0;
          const animationInterval = setInterval(() => {
            opacity += 0.1;
            current_fs.style.opacity = String(1 - opacity);
            next_fs.style.opacity = String(opacity);
            if (opacity >= 1) {
              clearInterval(animationInterval);
              current_fs.style.display = 'none';
              current_fs.style.position = 'relative';
              next_fs.style.position = 'static';
            }
          }, 50);
          this.setProgressBar(++this.current);
        }
        else if(this.myform.controls.telephone.valid &&this.myform.controls.region.valid  &&this.myform.controls.BirthDate.valid&&this.myform.controls.address.valid  &&  nextButtons.item(1)== button) {
          // else if(  nextButtons.item(1)== button) {

         console.log(this.myform.value)

          console.log("success form");
          const current_fs = button.parentNode;
          const next_fs = current_fs.nextElementSibling;
  
          // Add Class Active
          const activeIndex = Array.from(fieldsets).indexOf(next_fs);
          const progressbarLis = this.elementRef.nativeElement.querySelectorAll('#progressbar li');
          progressbarLis[activeIndex].classList.add('active');
  
          // Show the next fieldset
          next_fs.style.display = 'block';
  
          // Hide the current fieldset with style
          let opacity = 0;
          const animationInterval = setInterval(() => {
            opacity += 0.1;
            current_fs.style.opacity = String(1 - opacity);
            next_fs.style.opacity = String(opacity);
            if (opacity >= 1) {
              clearInterval(animationInterval);
              current_fs.style.display = 'none';
              current_fs.style.position = 'relative';
              next_fs.style.position = 'static';
            }
          }, 50);
          this.setProgressBar(++this.current);
        }
        else if(this.myform.controls.domain.valid&& this.myform.controls.university.valid&& this.myform.controls.dateDeFinEtude.valid&& this.myform.controls.dateDeFinEtude.valid&& nextButtons.item(2)== button) {
          console.log("success form");
          console.log("jdhgdhdgh")
          console.log(this.myform.value);
          const current_fs = button.parentNode;
          const next_fs = current_fs.nextElementSibling;
  
          // Add Class Active
          const activeIndex = Array.from(fieldsets).indexOf(next_fs);
          const progressbarLis = this.elementRef.nativeElement.querySelectorAll('#progressbar li');
          progressbarLis[activeIndex].classList.add('active');
  
          // Show the next fieldset
          next_fs.style.display = 'block';
  
          // Hide the current fieldset with style
          let opacity = 0;
          const animationInterval = setInterval(() => {
            opacity += 0.1;
            current_fs.style.opacity = String(1 - opacity);
            next_fs.style.opacity = String(opacity);
            if (opacity >= 1) {
              clearInterval(animationInterval);
              current_fs.style.display = 'none';
              current_fs.style.position = 'relative';
              next_fs.style.position = 'static';
            }
          }, 50);
          this.setProgressBar(++this.current);
        } 
        else if( nextButtons.item(3)== button) {
          let user: User = {
     
            lastName: this.myform.value.prenom,
            name: this.myform.value.name,
            email:this.myform.value.email,
            password: this.myform.value.password,
            role: this.myform.value.role,
            address:this.myform.value.address,
            domain:this.myform.value.domain,
            university: this.myform.value.university,
            NameofCompany: this.myform.value.mondesocite,
            birthDate: new Date (this.myform.value.BirthDate),
            phone_number: this.myform.value.telephone,
            region: this.myform.value.region,
            
            startofStudy: new Date (this.myform.value.dateDedebutEtude),
            
            endofStudy:new Date(this.myform.value.dateDeFinEtude), 
            startofWork:new Date(this.myform.value.dateDebutPoste),
            endofWork: new Date (this.myform.value.dateFinPoste),

        };
     
        this.userservice.AddUser(user).subscribe(user=>{
          this.success=true ;
          console.log("success form");
         
        })

         console.log(user)
        
         
          const current_fs = button.parentNode;
          const next_fs = current_fs.nextElementSibling;
  
          // Add Class Active
          const activeIndex = Array.from(fieldsets).indexOf(next_fs);
          const progressbarLis = this.elementRef.nativeElement.querySelectorAll('#progressbar li');
          progressbarLis[activeIndex].classList.add('active');
  
          // Show the next fieldset
          next_fs.style.display = 'block';
  
          // Hide the current fieldset with style
          let opacity = 0;
          const animationInterval = setInterval(() => {
            opacity += 0.1;
            current_fs.style.opacity = String(1 - opacity);
            next_fs.style.opacity = String(opacity);
            if (opacity >= 1) {
              clearInterval(animationInterval);
              current_fs.style.display = 'none';
              current_fs.style.position = 'relative';
              next_fs.style.position = 'static';
            }
          }, 50);
          this.setProgressBar(++this.current);
        } else {
          console.log("error on form");
          
        }
      });
    });

    const prevButtons = this.elementRef.nativeElement.querySelectorAll('.previous');
    prevButtons.forEach((button: { addEventListener: (arg0: string, arg1: () => void) => void; parentNode: any; }) => {
      button.addEventListener('click', () => {
        const current_fs = button.parentNode;
        const prev_fs = current_fs.previousElementSibling;

        // Remove class active
        const activeIndex = Array.from(fieldsets).indexOf(current_fs);
        const progressbarLis = this.elementRef.nativeElement.querySelectorAll('#progressbar li');
        progressbarLis[activeIndex].classList.remove('active');

        // Show the previous fieldset
        prev_fs.style.display = 'block';

        // Hide the current fieldset with style
        let opacity = 0;
        const animationInterval = setInterval(() => {
          opacity += 0.1;
          current_fs.style.opacity = String(1 - opacity);
          prev_fs.style.opacity = String(opacity);
          if (opacity >= 1) {
            clearInterval(animationInterval);
            current_fs.style.display = 'none';
            current_fs.style.position = 'relative';
            prev_fs.style.position = 'static';
          }
        }, 50);

        this.setProgressBar(--this.current);
      });
    });
  }

  setProgressBar(curStep: number) {
    this.progressBarWidth = Number((100 / this.steps * curStep).toFixed());
  }
  onSubmit() {
    return false;
  }
 
 
}
