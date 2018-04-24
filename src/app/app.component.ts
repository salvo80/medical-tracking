import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AccountPage } from '../pages/account/account';
import {TranslateService} from '@ngx-translate/core';

import { HomePage } from '../pages/home/home';
import { TerapiaPage } from '../pages/terapia/terapia';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TerapiaPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private translate: TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      //translate.addLangs(["it"]);
      translate.setDefaultLang('it');
      //let browserLang = translate.getBrowserLang();
      //translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
      translate.use('it')

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

