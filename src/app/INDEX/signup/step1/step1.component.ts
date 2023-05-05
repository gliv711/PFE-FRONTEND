import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/Models/Company';
import { UserServiceService } from 'src/Services/user-service/user-service.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  firstFormGroup = this.formbuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.formbuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;
  current: number = 1;
  steps!: number;
  progressBarWidth!: number;
  isform : any 
  company!: Company;

  constructor(private elementRef: ElementRef , private router: Router ,private formbuilder : FormBuilder ,private companyservice:UserServiceService ) {
    this.isform = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confpassword: ['', [Validators.required, Validators.minLength(8), this.matchPasswords.bind(this)]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.maxLength(30)]],
      telephone :['',[Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern('[0-9]*')]],
      raisonSociel: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(30)]],
      domain: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(30)]],
      lien :new FormControl(),
      nomReasponsable:['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(30)]],

      

      



    }) 
    const n :number=0}
    matchPasswords(control: FormControl) {
      const password = control.parent?.get('password');
      if (password && control.value !== password.value) {
        return { mismatch: true };
      }
      return null;
    
   }

  ngOnInit() {
    const fieldsets = this.elementRef.nativeElement.querySelectorAll('fieldset');
    this.steps = fieldsets.length;
    this.setProgressBar(this.current);

    const nextButtons = this.elementRef.nativeElement.querySelectorAll('.next');
    nextButtons.forEach((button: { addEventListener: (arg0: string, arg1: () => void) => void; parentNode: any; }) => {
      button.addEventListener('click', () => {
        if(this.isform.controls.email.valid && this.isform.controls.name.valid &&  this.isform.controls.password.valid && this.isform.controls. confpassword.valid  && nextButtons.item(0)== button) {
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
        else if(this.isform.controls.telephone.valid &&this.isform.controls.raisonSociel.valid  &&this.isform.controls.domain.valid &&this.isform.controls.nomReasponsable.valid &&this.isform.controls.address.valid   &&  nextButtons.item(1)== button) {
         
         let company : Company={
          
          NameofCompany:this.isform.value.name,
          email:this.isform.value.email,
          Password :this.isform.value.password,
          phone_number:this.isform.value.telephone,
          DomaineofActivite:this.isform.value.domain,
          NameofResponsible:this.isform.value.nomReasponsable,
          SocialReason:this.isform.value.raisonSociel,
          address:this.isform.value.address,
          lien:this.isform.value.lien,}
          console.log(company)
         
         
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
