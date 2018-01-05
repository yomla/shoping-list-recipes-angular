import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    @Output() showRecipes = new EventEmitter<boolean>();
    @Output() showShoppingList = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() {        
    }

    onShowRecipes() {
        this.showRecipes.emit(true);
    }

    onShowShoppingList() {
        this.showShoppingList.emit(true);
    }

}