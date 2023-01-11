import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe(
            'A test recipe',
            'test description',
            'https://media.cnn.com/api/v1/images/stellar/prod/211006114703-best-meal-delivery-service-freshly.jpg?q=w_1601,h_900,x_0,y_0,c_fill'),
        new Recipe(
            'A test recipe 222',
            'test description 222222222',
            'https://img.taste.com.au/m3W-xKYX/taste/2017/07/quick-and-easy-meal-planner-128684-2.jpg')
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
