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
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AccountDetailComponent } from '../components/account-detail/account-detail';
import { CommonModule } from '@angular/common';

// AoT requires an exported function for factories
export function createTranslateLoader(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AccountPage
  ],
  imports: [
    BrowserModule, FormsModule, CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage
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
