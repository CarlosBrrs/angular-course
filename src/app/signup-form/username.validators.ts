import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    // Para considerarse un validator, debe recibir un objeto AbstractControl y retornar ValidationErrors | null
    static cannotContainSpaces(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpaces: true };
        }
        return null; //null significa sin errores
    }

    // Validador asincrono para cuando se debe consultar al servidor para hacer la validacion, por ej revisar si un username ya existe
    // La firma del metodo cambia cuando es una funcion asincrona, sino, siempre va a retornar null
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        //Al objeto promesa se le debe pasar una funcion con dos parametros,  resolve y reject
        return new Promise((resolve, reject) => {
            //Aun no se va a llamar al servidor para validar. Se verá luego. Se simula un delay
            setTimeout(() => {
                if(control.value === 'carlos') {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }
            }, 2000);    
        });
    }
}