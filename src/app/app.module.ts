import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExploreComponent } from './explore/explore.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShareComponent } from './share/share.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { MainComponent } from './main/main.component';
import { NoyFoundUserComponent } from './noy-found-user/noy-found-user.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: "explore",
    component: ExploreComponent
  },
  {
    path:"share",
    component:ShareComponent
  },{
    path: "explore/:name",
    component:UserComponent
  },
  {
    path: "**",
    component:NotFoundComponent
  }
  
  ];

@NgModule({
  declarations: [
    AppComponent,
    ExploreComponent,
    ShareComponent,
    MainComponent,
    UserComponent,
    NotFoundComponent,
    NoyFoundUserComponent,
    NoyFoundUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    
     ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
