import { Page, NavController, NavParams } from 'ionic/ionic';
import { Component } from 'angular2/core';  
import { FormPage } from '../form/form';


@Page({
	templateUrl: 'build/pages/home/home.html'
})

export class HomePage {

	constructor(nav: NavController, navParams: NavParams) {
	    this.nav = nav;
	    this.username = window.localStorage.getItem('username');   
	}

	logout(): void { 
    	window.localStorage.removeItem('username');
    	window.localStorage.removeItem('password');

		this.nav.setRoot(FormPage);
	    this.nav.popToRoot();   
	} 
}