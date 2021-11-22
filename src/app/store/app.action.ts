import { createAction, props } from "@ngrx/store"
import { NGDrawLine } from "../models/line-model"
import { NGDrawPolygon } from "../models/polygon-model"


export const getPolygons = createAction(
    "[NG DRAW] get all polygons"
)

export const addPolygon = createAction(
    "[NG DRAW] add polygon to list",
    props<{addpolygon: NGDrawPolygon}>()
)

export const deletePolygon = createAction(
    "[NG DRAW] delete polygon from list",
    props<{id: number}>()
)

export const updatePolygon = createAction(
    "[NG DRAW] update polygon to list",
    props<{updatepolygon: NGDrawPolygon}>()
)