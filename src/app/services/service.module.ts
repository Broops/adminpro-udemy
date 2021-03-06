import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  SettingsService, 
  SidebarService, 
  SharedService, 
  UsuarioService,
  LoginGuardGuard } from './service.index';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    HttpClient,
    LoginGuardGuard
  ],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
