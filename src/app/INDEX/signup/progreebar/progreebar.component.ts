import { Component, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-progreebar',
  templateUrl: './progreebar.component.html',
  styleUrls: ['./progreebar.component.css']
})
export class ProgreebarComponent implements OnInit {

  current: number = 1;
  steps!: number;
  progressBarWidth!: number;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    const fieldsets = this.elementRef.nativeElement.querySelectorAll('fieldset');
    this.steps = fieldsets.length;
    this.setProgressBar(this.current);

    const nextButtons = this.elementRef.nativeElement.querySelectorAll('.next');
    nextButtons.forEach((button: { addEventListener: (arg0: string, arg1: () => void) => void; parentNode: any; }) => {
      button.addEventListener('click', () => {
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
