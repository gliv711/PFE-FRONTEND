import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/Models/Users/User';
import { UserServiceService } from 'src/Services/user-service/user-service.service';


@Component({
  selector: 'app-progreebar',
  templateUrl: './progreebar.component.html',
  styleUrls: ['./progreebar.component.css']
})
export class ProgreebarComponent implements OnInit {
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

  constructor(private elementRef: ElementRef , private router: Router ,private formbuilder : FormBuilder  ,private userservice:UserServiceService) {
    this.myform = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(30)]],
      prenom: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confpassword: ['', [Validators.required, Validators.minLength(8), this.matchPasswords.bind(this)]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.maxLength(30)]],
      region: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(30)]],
      telephone :['',[Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern('[0-9]*')]],
      BirthDate:["",Validators.required],
      university :["",Validators.required],
      domain : ["",Validators.required],
      mondesocite:new FormControl(),
      dateFinPoste:new FormControl(),
      dateDebutPoste:new FormControl(),
      dateDeFinEtude:new FormControl(),
      dateDedebutEtude: new FormControl(),
      role: new FormControl()

      
      

      



    }) 
    
    const n :number=0}
    matchPasswords(control: FormControl) {
      const password = control.parent?.get('password');
      if (password && control.value !== password.value) {
        return { mismatch: true };
      }
      return null;
    
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
         
       
    
        
          console.log("success form");
          console.log(this.myform.value.email)


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
        else if(this.myform.controls.domain.valid   && this.myform.controls.university.valid&&  nextButtons.item(2)== button) {
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
        else if( nextButtons.item(3)== button) {
          let user: User = {
     
            lastName: this.myform.value.prenom,
            name: this.myform.value.name,
            email:this.myform.value.email,
            Password: this.myform.value.password,
            role: this.myform.value.role,
            
            domain:this.myform.value.domain,
            university: this.myform.value.university,
            NameofCompany: this.myform.value.mondesocite,
            BirthDate: this.myform.value.BirthDate,
            phone_number: this.myform.value.telephone,
            region: this.myform.value.region,
            
            startofStudy:this.myform.value.dateDedebutEtude,
            
            endofStudy: this.myform.value.dateDeFinEtude,
            startofWork:this.myform.value.dateDebutPoste,
            endofWork: this.myform.value.dateFinPoste,

        };
     
        this.userservice.addUser(user).subscribe(user=>{
          ;this.success=true ;
          console.log("success form");
        })
        
         
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
