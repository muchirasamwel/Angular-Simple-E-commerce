import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { NavComponent } from './nav/nav.component'
import { SideNavComponent } from './side-nav/side-nav.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './shared/modules/material/material.module'
import { HomeComponent } from './home/home.component'
import { CategoriesComponent } from './categories/categories.component'
import { ProductsComponent } from './products/products.component'
import { ReactiveFormsModule } from '@angular/forms'
import { CardComponent } from './shared/components/card/card.component'
import { HttpClientModule } from '@angular/common/http'
// import { MatLabel, MatInput, MatError, MatFormField } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    SideNavComponent,
    HomeComponent,
    CategoriesComponent,
    ProductsComponent,
    CardComponent
    // MatLabel,
    // MatInput,
    // MatError,
    // MatFormField
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
