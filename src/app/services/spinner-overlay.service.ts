import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Injectable } from "@angular/core";
import { SpinnerOverlayComponent } from "../components/spinner-overlay/spinner-overlay.component";

@Injectable({
  providedIn: "root"
})
export class SpinnerOverlayService {
  private overlayRef: OverlayRef = null;

  constructor(private overlay: Overlay) {}

  public show() {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }

    // Create ComponentPortal that can be attached to a PortalHost
    const spinnerOverlayPortal = new ComponentPortal(SpinnerOverlayComponent);
    // Attach ComponentPortal to PortalHost
    const component = this.overlayRef.attach(spinnerOverlayPortal);
  }

  public hide() {
    if (this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
