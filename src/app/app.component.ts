import {Component, OnInit} from '@angular/core';
import {GetStringRandomService} from "./get-string-random.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private getStringRandomService:GetStringRandomService) {
  }
  title = 'sentence';
  textRandom : string ='';
  textInput : string =''

  ngOnInit(): void {
    this.textRandom = this.getStringRandomService.makeId(6)
  }

  onChangeInput(e : any){
    this.textInput = (e as HTMLInputElement).value

    console.log( (e as HTMLInputElement).value)
  }

  compare(textRandom : string , inputText : string) : string {
    if(!inputText){
      return 'hidden'
    }
    return textRandom === inputText ? 'correct' : 'incorrect'

  }
}
