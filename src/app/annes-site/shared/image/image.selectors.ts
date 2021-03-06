import { createFeatureSelector, createSelector } from "@ngrx/store";

import * as fromImages from "./image.reducer";

export const selectImageState = createFeatureSelector<fromImages.State>(
  "images"
);

export const selectAll = createSelector(
  selectImageState,
  (imgs) => imgs.entities
);

export const selectAllAsArray = createSelector(
  selectAll,
  (imgStoreEntities) => {
    return Object.values(imgStoreEntities);
  }
);

export const isUploadingImg = createSelector(
  selectImageState,
  fromImages.getUploadingImgStatus
);
