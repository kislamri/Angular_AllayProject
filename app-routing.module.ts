import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddNewDocumentComponent } from './add-new-document/add-new-document.component';
import { FeatureComponent } from './feature/feature.component';
import { FilemanagementComponent } from './filemanagement/filemanagement.component';
import { FindDocumentComponent } from './find-document/find-document.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {path:'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'feature' , component: FeatureComponent},
  {path: 'signup' , component: SignupComponent},
  {path: 'filemanagement', component: FilemanagementComponent},
  {path: 'finddoc', component:FindDocumentComponent},
  {path:'addNewDoc', component:AddNewDocumentComponent},
  {path: 'login', component:LoginComponent},
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
