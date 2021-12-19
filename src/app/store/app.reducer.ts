// `createFeature` is imported from `@ngrx/store`
import { state } from "@angular/animations";
import { createFeature, createReducer, on } from "@ngrx/store";
import { ToolType } from "../enums/ngdraw-enums";
import { NGDrawPolygon } from "../models/polygon-model";

import * as PolygonListActions from "./app.action";


export const featureKey = 'draw-polygons';

interface State {
  polygons: NGDrawPolygon[];
  loading: boolean;
  isDragging: boolean ;
  isDrawing: boolean ;
  isResizing: boolean ;
  selectedTool: ToolType;
}

const initialState: State = {
  polygons: new Array<NGDrawPolygon>(),
  loading: false,
  isDragging: false,
  isDrawing: false,
  isResizing: false,
  selectedTool: 0
};

// export const adapter: EntityAdapter<NGDrawPolygon> = createEntityAdapter<NGDrawPolygon>({
//     selectId: (polygon: NGDrawPolygon) => polygon.id,
//     sortComparer: false,
//   });

// feature name and reducer are now passed to `createFeature`
export const booksFeature = createFeature({
  name: featureKey,
  reducer: createReducer(
    initialState,
    on(PolygonListActions.getPolygons, (state) => ({
      ...state,
      loading: true,
    })),
    on(PolygonListActions.addPolygon, (state, { addpolygon }) => {
        
        state.polygons.push(addpolygon);
       
        return {
            ...state,
        }
        
      }),
  ),
});

function createEntityAdapter<T>(arg0: { selectId: (polygon: NGDrawPolygon) => number; sortComparer: boolean; }): any {
}
