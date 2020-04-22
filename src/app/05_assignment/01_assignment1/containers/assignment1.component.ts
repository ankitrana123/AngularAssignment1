import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {
  public inputValue=""
  onSearchChange(searchValue: string): void {  
    this.inputValue=searchValue;
  }
}
