import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserServiceService } from 'src/Services/user-service/user-service.service';


@Injectable({ providedIn: 'root' })
export class EmailValidator implements AsyncValidator {
  constructor(private userService: UserServiceService) {}

  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email = control.value;

    return this.userService.checkIfUserEmailExists(email).pipe(
      map((exists) => (exists ? { emailExists: true } : null)),
      catchError(() => of(null))
    );
  }
}
