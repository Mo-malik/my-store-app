import { Route } from "@angular/router";
import { OrderComponent } from "src/app/components/order/order.component";
import { ProductDetaileComponent } from "src/app/components/product-detaile/product-detaile.component";
import { ProductsComponent } from "src/app/components/products/products.component";
import { ShopingcartComponent } from "src/app/components/shopingcart/shopingcart.component";


export const Routes :Route[]=[
    {path:'product/:id',component:ProductDetaileComponent},
    {path:'cart',component:ShopingcartComponent},
    {path:'order',component:OrderComponent},
    {path:'',component:ProductsComponent},
    {path:'**',component:ProductsComponent}
    



]