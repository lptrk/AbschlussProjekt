import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TableComponent } from './components/table/table.component';
import { WillkomenComponent } from './pages/willkomen/willkomen.component';
import { AuftragssucheComponent } from './pages/auftragssuche/auftragssuche.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SidebarComponent,
    TableComponent,
    WillkomenComponent,
    AuftragssucheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
