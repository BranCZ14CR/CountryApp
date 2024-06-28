import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @Output()
  public onValue = new EventEmitter<string>()

  @Input()
  public placeHolder: string = '';

  searchInput(value: string):void {
    this.onValue.emit(value)
  }

}
