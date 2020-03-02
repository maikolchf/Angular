"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var angular_bootstrap_md_1 = require("angular-bootstrap-md");
var router_1 = require("@angular/router");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var encabezado_component_1 = require("./encabezado/encabezado.component");
var cuerpo_component_1 = require("./cuerpo/cuerpo.component");
var piepagina_component_1 = require("./piepagina/piepagina.component");
var contacto_component_1 = require("./contacto/contacto.component");
var rutas = [
    { path: 'Contacto', component: contacto_component_1.ContactoComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                encabezado_component_1.EncabezadoComponent,
                cuerpo_component_1.CuerpoComponent,
                piepagina_component_1.PiepaginaComponent,
                contacto_component_1.ContactoComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                router_1.RouterModule.forRoot(rutas),
                angular_bootstrap_md_1.MDBBootstrapModule.forRoot()
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
