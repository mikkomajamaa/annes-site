import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { SubGallery } from "./sub-gallery";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class SubGalleryService {
  constructor(private http: HttpClient) {}

  getSubGalleriesFromApi(url: string): Observable<SubGallery[]> {
    return this.http.get<SubGallery[]>(url);
  }

  createGallery(fi, en) {
    return this.http.post(
      environment.baseUrl + "/api/galleries",
      {
        en,
        fi,
      },
      {
        observe: "body",
        params: new HttpParams().append(
          "token",
          JSON.parse(localStorage.getItem("user")).token
        ),
      }
    );
  }

  deleteGallery(id) {
    return this.http.delete(environment.baseUrl + "/api/galleries/" + id, {
      observe: "body",
      params: new HttpParams().append(
        "token",
        JSON.parse(localStorage.getItem("user")).token
      ),
    });
  }

  updateSubGalleries(subGalleries: SubGallery[]) {
    return this.http.put(
      environment.baseUrl + "/api/galleries",
      { subGalleries },
      {
        observe: "body",
        params: new HttpParams().append(
          "token",
          JSON.parse(localStorage.getItem("user")).token
        ),
      }
    );
  }

  publishSubGalleries() {
    return this.http.post(
      environment.baseUrl + "/api/galleries/publish",
      {},
      {
        observe: "body",
        params: new HttpParams().append(
          "token",
          JSON.parse(localStorage.getItem("user")).token
        ),
      }
    );
  }
}
