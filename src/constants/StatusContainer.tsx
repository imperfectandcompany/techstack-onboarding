export type StatusName = 'online' | 'invisible' | 'away' | 'dnd'

export enum Id {
  online,
  invisible,
  away,
  dnd,
}

export enum Text {
  online = 'Online',
  invisible = 'Invisible',
  away = 'Away',
  dnd = 'Do Not Disturb',
}

export enum StatusColor {
  online = 'green',
  invisible = 'zinc',
  away = 'yellow',
  dnd = 'red',
}

export interface StatusInfo {
  id: number
  title: string
  color: string
}

export const status: Record<StatusName, StatusInfo> = {
  online: { id: Id.online, title: Text.online, color: StatusColor.online },
  invisible: { id: Id.invisible, title: Text.invisible, color: StatusColor.invisible },
  away: { id: Id.away, title: Text.away, color: StatusColor.away },
  dnd: { id: Id.dnd, title: Text.dnd, color: StatusColor.dnd },
}

export const getEveryStatusObject = (): Record<StatusName, StatusInfo> => {
  return status
}

export const getStatusObject = (object: StatusInfo): Record<StatusName, StatusInfo> => {
  return JSON.parse(JSON.stringify(object))
}

export const getStatusId = (object: StatusInfo): Record<StatusName, StatusInfo> => {
  return JSON.parse(JSON.stringify(object.id))
}

export const getStatusTitle = (object: StatusInfo): Record<StatusName, StatusInfo> => {
  return JSON.parse(JSON.stringify(object.color))
}

export const getStatusColor = (object: StatusInfo) => {
  return object.color
}
