import {FormControl} from '@angular/forms';


export class LoginFormValidators
{
    static isUnique(control: FormControl)
    {
        return new Promise((resolve,reject) => {
            if (control.value == "asdf") resolve({isUnique:true})
            else resolve(null);
        })
    }
}