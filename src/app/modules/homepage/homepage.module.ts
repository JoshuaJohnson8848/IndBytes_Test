import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomepageRoutingModule } from './homepage-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomepageRoutingModule, HttpClientModule],
  providers: [HttpClientModule],
})
export class HomepageModule {}
