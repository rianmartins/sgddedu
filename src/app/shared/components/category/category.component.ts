import { Component, Input } from '@angular/core';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
    @Input() categoryName: string;
    @Input() categoryColor: string;

    getColor(){
      if(this.categoryColor == "yellow")
        return '#FFD700';
      if(this.categoryColor == "blue")
        return '#00BFFF';
      if(this.categoryColor == "orange")
        return '#FF8C00';
      if(this.categoryColor == "purple")
        return '#BA55D3';

      return 'white';
    }
}
