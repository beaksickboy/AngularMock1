import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl, AsyncValidator, AbstractControl, ValidationErrors, AsyncValidatorFn, ValidatorFn } from '@angular/forms';



export function existUsername(userService: AuthService): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {

        return userService.validateUsername(control.value).pipe(
            map(isTaken => (isTaken ? { conflictUsername: true } : null)),
        );
    };
}



export class CustomValidate {
    static MatchPassword(control: AbstractControl) {

        if (control.get('password').value !== control.get('confirm').value) {
            return { conflictPassword: true };
        }
        return null;
    }
}
