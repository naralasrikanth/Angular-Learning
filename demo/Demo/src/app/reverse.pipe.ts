import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'reverse',
    standalone:true,
})

export class ReversePipe  implements PipeTransform{

    transform(value: string) {
        if(typeof value !== 'string')
            return value;
        else
        return value.split('').reverse().join('');
    }
}