import { AbstractControl, ValidationErrors } from '@angular/forms';


export class ImageValidators{

    static isValidExtension(control : AbstractControl) : ValidationErrors | null {
        const v = control.value as string;

        if(v == ""){
            return {
                required : true
            }
        }
        else if(v.endsWith('.jpg') || v.endsWith('.jpeg') || v.endsWith('.png') || v.endsWith('.bmp')){
            return null;
        }else{
            return {
                wrongExtension : true
            }
        }

    }
}