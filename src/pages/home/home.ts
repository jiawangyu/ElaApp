import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


//import Wallet;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 public items;
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad(){

    /* 开始，
	  	//Second  Carrier  Wallet  UID components 
	var a_wallet = new Wallet()
    result = a_wallet.CreateSubWallet (
             chainID,  
           coinTypeIndex,    // 新增，币种的index号，用于构建路径
           payPassword,
          singleAddress)
	 */	  
		  
     this.items = [
      {title: 'Elastos TODO1', description: 'TODO List1'},
      {title: 'Elastos TODO2', description: 'TODO List2'},
      {title: 'Elastos TODO3', description: 'TODO List3'}
    ];
	
   }
   addItem(){
	   
   }
   viewItem(){
   }

}
