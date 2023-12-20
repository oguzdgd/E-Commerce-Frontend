import { Component, OnInit } from '@angular/core';
import { GameCategory } from '../../models/gameCategory';
import { GameCategoryService } from '../../services/gameCategory.service';


@Component({
  selector: 'app-game-category',
  templateUrl: './game-category.component.html',
  styleUrl: './game-category.component.css'
})
export class GameCategoryComponent implements OnInit{

  gameCategories:GameCategory[]=[];
  currentGameCategory : GameCategory;

  dataLoaded=false;
  constructor(private gameCategoryService :GameCategoryService){}

  ngOnInit(): void {
    this.getGameCategories();
  }

  getGameCategories() {
     this.gameCategoryService.getGameCategories().subscribe(response => {
      this.gameCategories = response.data
      this.dataLoaded=true;
    })
  }
  setCurrentGameCategory(gameCategory:GameCategory){
    this.currentGameCategory=gameCategory;
  }
  getCurrentGameCategoryClass(gameCategory:GameCategory){
    if(gameCategory==this.currentGameCategory){
      return "list-group-item active"
    }else{
      return "list-group-item "
    }
  }

}
