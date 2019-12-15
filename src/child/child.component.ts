import { Component } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
    selector: 'child',
    templateUrl: 'child.component.html'

})
export class ChildComponent {

     childVote : string;
    
    

}