import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { LoadingService } from '../services/loading-service';
import { TabsModule } from '../components/tabs/tabs.module';
import { ExpandableList } from '../components/expandable-list/expandable-list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    ExpandableList
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TabsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    ExpandableList
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoadingService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
