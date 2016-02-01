import {App, Platform, Config} from 'ionic/ionic';
import {FormPage} from './pages/form/form';
import {HomePage} from './pages/home/home';

@App({
  templateUrl: 'build/app.html'
})
export class MyApp {
  constructor(platform: Platform) {
    this.platform = platform;
    this.initializeApp();
    this.checkPreviousAuthorization();    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
    });
  }

  checkPreviousAuthorization(): void { 
    if((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) && 
       (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
      this.root = FormPage;
    } else {
      this.root = HomePage;
    }
  }   
}
