import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { GameCategory } from '../models/gameCategory';

@Injectable({
  providedIn: 'root'
})
export class GameCategoryService {

  apiUrl = "https://localhost:44374/api/GameCategory/getall"
  
  constructor(private httpClient: HttpClient) { }

  getGameCategories():Observable<ListResponseModel<GameCategory>>{    
    return this.httpClient.get<ListResponseModel<GameCategory>>(this.apiUrl)
  }

}