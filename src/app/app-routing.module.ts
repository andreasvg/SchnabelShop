import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsPageComponent } from "./products/products-page/products-page.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: ProductsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
