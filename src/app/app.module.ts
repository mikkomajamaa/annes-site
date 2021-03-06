import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { ServiceWorkerModule } from "@angular/service-worker";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import * as fromApp from "./app.reducer";
import { AuthEffects } from "./annes-site/auth/store/auth.effects";
import { SubGalleryEffects } from "./annes-site/shared/sub-gallery/sub-gallery.effects";
import { environment } from "src/environments/environment";
import { CoreModule } from "./annes-site/core/core.module";
import { ImageEffetcs } from "./annes-site/shared/image/image.effects";

@NgModule({
  "declarations": [AppComponent],
  "imports": [
    CoreModule,
    MatSnackBarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects, SubGalleryEffects, ImageEffetcs]),
    StoreDevtoolsModule.instrument({ "logOnly": environment.production }),
    ServiceWorkerModule.register("ngsw-worker.js", {
      "enabled": environment.production,
    }),
  ],
  "providers": [{ "provide": Window, "useValue": window }],
  "bootstrap": [AppComponent],
})
export class AppModule {}
