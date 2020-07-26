import { Action } from "@ngrx/store";
import { Update } from "@ngrx/entity";

import { SubGallery } from "../../../shared/sub-gallery";

export const SUB_GALLERIES_REQUESTED =
  "[] Sub galleries requested from the API.";
export const SUB_GALLERIES_LOADED = "[] Sub galleries loaded from the API.";
export const SUB_GALLERIES_CANCELLED =
  "[] Loading sub galleries from the API failed.";
export const SUB_GALLERIES_SAVE_REQUESTED =
  "[Admin Component] Save sub galleries requested.";
export const SUB_GALLERIES_SAVED = "[] Saving sub galleries succeeded.";
export const SUB_GALLERIES_SAVE_CANCELLED = "[] Failed to save sub galleries.";
export const SUB_GALLERY_SELECTED = "[Gallery Component] Sub gallery selected.";
export const SUB_GALLERIES_UPDATE_REQUESTED =
  "[Admin Component] Sub galleries update requested";

export const SUB_GALLERIES_UPDATED_TO_STORE =
  "[] Sub galleries updated to store.";

export class SubGalleriesRequested implements Action {
  public readonly type = SUB_GALLERIES_REQUESTED;
}

export class SubGalleriesLoaded implements Action {
  public readonly type = SUB_GALLERIES_LOADED;
  constructor(public payload: { subGalleries: SubGallery[] }) {}
}

export class SubGalleriesCancelled implements Action {
  public readonly type = SUB_GALLERIES_SAVE_CANCELLED;
}

export class SubGalleriesSaveRequested implements Action {
  public readonly type = SUB_GALLERIES_SAVE_REQUESTED;
}

export class SubGalleriesSaved implements Action {
  public readonly type = SUB_GALLERIES_SAVED;
}

export class SubGalleriesSaveCancelled implements Action {
  public readonly type = SUB_GALLERIES_SAVE_CANCELLED;
}

export class SubGallerySelected implements Action {
  public readonly type = SUB_GALLERY_SELECTED;
  public constructor(public payload: { selectedSubGalleryId: string }) {}
}

export class SubGallerisUpdateRequested implements Action {
  public readonly type = SUB_GALLERIES_UPDATE_REQUESTED;
  public constructor(public payload: { subGalleries: Update<SubGallery>[] }) {}
}

export class SubGalleriesUpdatedToStore implements Action {
  public readonly type = SUB_GALLERIES_UPDATED_TO_STORE;
}

export type SubGalleryActions =
  | SubGalleriesRequested
  | SubGalleriesLoaded
  | SubGalleriesSaveCancelled
  | SubGalleriesSaveRequested
  | SubGalleriesSaved
  | SubGalleriesSaveCancelled
  | SubGallerySelected
  | SubGallerisUpdateRequested
  | SubGalleriesUpdatedToStore;
