import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { TerapiaPage } from '../pages/terapia/terapia';
import { FarmacoPopOverPage } from '../pages/farmaco-pop-over/farmaco-pop-over';
import { StorageProvider } from '../providers/storage/storage';
import { AccountProvider } from '../providers/account/account';
import { AccountPage } from '../pages/account/account';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TerapiaPage,
    FarmacoPopOverPage,
    AccountPage
  ],
  imports: [
    BrowserModule, FormsModule, 
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
<<<<<<< HEAD
    HomePage,
    TerapiaPage,
    FarmacoPopOverPage,
    AccountPage
=======
    AccountPage
>>>>>>> ac6876fa1cf3cd45365f72d3522857c2175f9917
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageProvider,
    AccountProvider
  ]
})
export class AppModule {}
