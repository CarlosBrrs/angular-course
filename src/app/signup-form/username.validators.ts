import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    // Para considerarse un validator, debe recibir un objeto AbstractControl y retornar ValidationErrors | null
    static cannotContainSpaces(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpaces: true };
        }
        return null;
    }
}