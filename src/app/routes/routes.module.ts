import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavigationModule } from '../navigation/navigation.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NavigationModule,
    RouterModule
  ],
  exports:[
    HomeComponent
  ]
})
export class RoutesModule { }
