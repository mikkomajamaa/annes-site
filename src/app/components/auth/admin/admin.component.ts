import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";

import { ImagesService } from "../../shared/images.service";
import { Image } from "../../shared/image";
import { SubGallery } from "src/app/components/shared/sub-gallery";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { FacadeService } from "../../shared/facade.service";
import { ImageDialogComponent } from "./image-dialog/image-dialog.component";
import { BaseComponent } from "../../core/base/base.component";
import { takeUntil } from "rxjs/operators";
import { ImageModalComponent } from "./image-modal/image-modal.component";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
})
export class AdminComponent extends BaseComponent implements OnInit, OnDestroy {
  public flagIcons = [
    { src: "./assets/fi.png", alt: "fi" },
    { src: "./assets/uk.png", alt: "uk" },
  ];
  public subGalleries: SubGallery[] = [];
  public imagesDropList = [];
  public subGalleries$ = this.facade.selectSubGalleries();
  @ViewChild("f") newSubGalleryForm;
  @ViewChild("subGalleryForm") subGalleryForm;
  @ViewChild(ImageModalComponent) imageModal: ImageModalComponent;

  constructor(
    private img: ImagesService,
    private dialog: MatDialog,
    private facade: FacadeService
  ) {
    super();
  }

  ngOnInit() {
    this.subGalleries$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((subGalleries) => {
        // TODO:
        // this.subGalleries = subGalleries;
        // this.updateDropList();
        console.log(subGalleries);
      });

    this.facade.autoLogin();

    this.img.getSubGalleries();
    this.updateDropList();
    this.img.subGalleriesChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((subGalleries: SubGallery[]) => {
        this.subGalleries = subGalleries;
        this.updateDropList();
      });

    this.img.subGalleryCreationSuccessful
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res: boolean) => {
        if (res) {
          this.newSubGalleryForm.reset();
        }
      });
  }

  updateDropList() {
    this.imagesDropList = [];
    for (let subGallery of this.subGalleries) {
      this.imagesDropList.push(subGallery._id);
    }
  }

  deleteImage(id: string) {
    // TODO: move to store
    if (confirm("Haluatko varmasti poistaa kuvan?") == false) {
      return;
    }

    this.img.deleteImage(id);
  }

  drop(event: CdkDragDrop<string[]>, subGallery: SubGallery) {
    var toGalleyIdx = this.subGalleries.indexOf(subGallery);

    let subGalleriesChanges = [];

    // img's location didn't change
    if (
      event.previousContainer === event.container &&
      event.previousIndex === event.currentIndex
    ) {
      return;
    }

    if (event.previousContainer === event.container) {
      let imageChanges = [];

      let difference = event.currentIndex - event.previousIndex;

      if (difference < 0) {
        // moved down in location
        // copy the image and images that follow
        for (
          let i = event.currentIndex;
          i < this.subGalleries[toGalleyIdx].images.length;
          i++
        ) {
          let imageChange = {
            ...this.subGalleries[toGalleyIdx].images[
              i === event.currentIndex ? event.previousIndex : i - 1
            ],
            so: i,
          };
          imageChanges.push(imageChange);
        }
      } else if (difference > 0) {
        // moved up in list

        for (let i = event.currentIndex; i >= 0; i--) {
          let imageChange = {
            ...this.subGalleries[toGalleyIdx].images[
              i === event.currentIndex ? event.previousIndex : i + 1
            ],
            so: i,
          };
          imageChanges.push(imageChange);
        }
      }

      // update single sub gallery
      subGalleriesChanges.push({
        id: this.subGalleries[toGalleyIdx]._id,
        changes: { images: imageChanges },
      });

      // between the same sub gallery, TODO: old implementation, rm
      for (let i = 0; i < this.subGalleries[toGalleyIdx].images.length; i++) {
        this.subGalleries[toGalleyIdx].images[i].so = i;
      }

      moveItemInArray(
        this.subGalleries[toGalleyIdx].images,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      for (let i = 0; i < this.subGalleries.length; i++) {
        if (this.subGalleries[i]._id === event.previousContainer.id) {
          var fromGalleryIdx: number = i;
          continue;
        }
      }

      // move image between sub galleries
      let clonedToGallerysImgs = [];
      // clone imgs that already existed in the sub gallery
      for (let i = 0; i < this.subGalleries[toGalleyIdx].images.length; i++) {
        clonedToGallerysImgs.push({
          ...this.subGalleries[toGalleyIdx].images[i],
          so:
            i < event.currentIndex
              ? this.subGalleries[toGalleyIdx].images[i].so
              : this.subGalleries[toGalleyIdx].images[i].so + 1,
        });
      }
      // clone new img
      clonedToGallerysImgs.push({
        ...this.subGalleries[fromGalleryIdx].images[event.previousIndex],
        so: event.currentIndex,
      });

      let clonedToGallery = {
        id: this.subGalleries[toGalleyIdx]._id,
        changes: {
          images: clonedToGallerysImgs,
        },
      };

      let clonedFromGallerysImgs = [];
      for (
        let i = 0;
        i < this.subGalleries[fromGalleryIdx].images.length;
        i++
      ) {
        if (i === event.previousIndex) {
          continue;
        }
        clonedFromGallerysImgs.push({
          ...this.subGalleries[fromGalleryIdx].images[i],
          so:
            i < event.previousIndex
              ? this.subGalleries[fromGalleryIdx].images[i].so
              : this.subGalleries[fromGalleryIdx].images[i].so - 1,
        });
      }
      let clonedFromGallery = {
        id: this.subGalleries[fromGalleryIdx]._id,
        changes: {
          images: clonedFromGallerysImgs,
        },
      };

      subGalleriesChanges.push(clonedToGallery);
      subGalleriesChanges.push(clonedFromGallery);

      // TODO: old implementation, rm all the code below from this block
      transferArrayItem(
        this.subGalleries[fromGalleryIdx].images,
        this.subGalleries[toGalleyIdx].images,
        event.previousIndex,
        event.currentIndex
      );

      // update togallery's sos
      for (let i = 0; i < this.subGalleries[toGalleyIdx].images.length; i++) {
        this.subGalleries[toGalleyIdx].images[i].so = i;
        this.subGalleries[toGalleyIdx].images[i].gallery = subGallery._id;
      }

      // update fromgallery's sos
      for (
        let i = 0;
        i < this.subGalleries[fromGalleryIdx].images.length;
        i++
      ) {
        this.subGalleries[fromGalleryIdx].images[i].so = i;
      }
    }

    this.facade.subGalleriesUpdateToStoreRequested(subGalleriesChanges);
  }

  dropSubGallery(event: CdkDragDrop<string[]>) {
    // sub gallery's location didn't change
    if (event.previousIndex === event.currentIndex) {
      return;
    }

    let clonedSubGalleries = [];
    let difference = event.currentIndex - event.previousIndex;

    if (difference < 0) {
      // moved down in list
      for (
        let i = event.currentIndex;
        i <= event.currentIndex - difference;
        i++
      ) {
        clonedSubGalleries.push({
          id: this.subGalleries[
            i === event.currentIndex ? event.previousIndex : i - 1
          ]._id,
          changes: { so: i },
        });
      }
    } else if (difference > 0) {
      // moved up in list
      for (
        let i = event.currentIndex;
        i >= event.currentIndex - difference;
        i--
      ) {
        clonedSubGalleries.push({
          id: this.subGalleries[
            i === event.currentIndex ? event.previousIndex : i + 1
          ]._id,
          changes: { so: i },
        });
      }
    }

    // TODO: old implementation, rm all the code below from this block
    moveItemInArray(this.subGalleries, event.previousIndex, event.currentIndex);

    for (let i = 0; i < this.subGalleries.length; i++) {
      this.subGalleries[i].so = i;
    }

    this.facade.subGalleriesUpdateToStoreRequested(clonedSubGalleries);
  }

  onSaveChanges() {
    this.facade.subGalleriesUpdateToAPIRequested();
  }

  onAddGallery(form: NgForm) {
    // TODO: move to store
    if (
      confirm(
        `Haluatko varmasti luoda gallerian nimeltä '${form.value.galleryFi}'?`
      )
    ) {
      this.img.createGallery(form.value.galleryFi, form.value.galleryEn);
    }
  }

  onDeleteSubGallery(subGallery: SubGallery) {
    // TODO: move to store
    if (
      confirm(
        `Haluatko varmasti poistaa gallerian '${subGallery.fi}' ja kaikki sen sisältämät kuvat?`
      )
    ) {
      this.img.deleteGallery(subGallery._id);
    }
  }

  onAddImage(subGallery: SubGallery) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = "custom-dialog-container";

    const dialogRef = this.dialog.open(ImageDialogComponent, dialogConfig);
    dialogRef.componentInstance.galleryId = subGallery._id;
  }

  openImage(event) {
    this.imageModal.openImage(event);
  }

  onFocusOut(subGalleryId) {
    let subGalleriesChanges = [];
    this.subGalleries.forEach((sg) => {
      if (sg._id !== subGalleryId) {
        return;
      }

      let subGallerysImgChanges = [];
      sg.images.forEach((img) => {
        subGallerysImgChanges.push({
          so: img.so,
          Key: img.Key,
          gallery: img.gallery,
          url: img.url,
          _id: img._id,
        });
      });

      let subGalleryChanges = {
        id: sg._id,
        changes: {
          so: sg.so,
          images: subGallerysImgChanges,
        },
      };

      for (let key in this.subGalleryForm.form.controls) {
        // new value
        let val = this.subGalleryForm.form.controls[key].value;
        // to identify sub gallery/image and where is the value associated (alt_fin/alt_en)
        let identifiers = key.split(" ");
        let subGalleryIdForm = "";
        let imgId = "";
        let fieldToUpdate = "";

        subGalleryIdForm = identifiers[0].split(":")[1];

        if (subGalleryIdForm !== subGalleryId) {
          continue;
        }

        if (identifiers.length === 2) {
          // sub gallery
          fieldToUpdate = identifiers[1];
          subGalleryChanges.changes[fieldToUpdate] = val;
        } else if (identifiers.length === 3) {
          // img
          imgId = identifiers[1].split(":")[1];
          fieldToUpdate = identifiers[2];
          for (let i = 0; i < subGallerysImgChanges.length; i++) {
            if (subGallerysImgChanges[i]._id === imgId) {
              subGallerysImgChanges[i][fieldToUpdate] = val;
              continue;
            }
          }
        }
      }
      subGalleriesChanges.push(subGalleryChanges);
    });
    this.facade.subGalleriesUpdateToStoreRequested(subGalleriesChanges);
  }
}