import { ImmutableObject } from 'seamless-immutable'

type Layer = {
  id: string
  layerUrl: string
  name: string
}
export interface Config {
  zoomToLayer: boolean
  layersList: Layer[]
}

export interface Config {
  zoomToLayer: boolean
}

export type IMConfig = ImmutableObject<Config>
