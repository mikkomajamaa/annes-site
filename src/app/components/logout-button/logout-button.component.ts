import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: "app-logout-button",
  templateUrl: "./logout-button.component.html",
  styleUrls: ["./logout-button.component.css"]
})
export class LogoutButtonComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}

  logout() {
    this.authenticationService.logout();
  }
}
