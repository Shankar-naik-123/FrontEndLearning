/*import Pipes and Pipe Transform from Anugualar core and class should implement transaform method from 
PipeTrasform interface and should register pipe class in  app.module.ts file under declarations*/
import { Pipe,PipeTransform } from "@angular/core";


@Pipe({name:'append'})

export class AppendCity implements PipeTransform{
transform(value: any, ...args: any[]) {
    return "city: "+ value;
}
    
}