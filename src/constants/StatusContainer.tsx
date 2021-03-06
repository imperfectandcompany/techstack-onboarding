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

export enum StatusBgClass {
  online = 'bg-green-600',
  invisible = 'bg-zinc-600',
  away = 'bg-yellow-600',
  dnd = 'bg-red-600'
}

export enum StatusTextClass {
  online = 'text-green-600',
  invisible = 'text-zinc-600',
  away = 'text-yellow-600',
  dnd = 'text-red-600'
}

export interface StatusInfo {
  id: number
  title: string
  color: string
  bgColor: string
  textColor: string
}

export const status: Record<StatusName, StatusInfo> = {
  online: { id: Id.online, title: Text.online, color: StatusColor.online, bgColor: StatusBgClass.online, textColor: StatusTextClass.online},
  invisible: { id: Id.invisible, title: Text.invisible, color: StatusColor.invisible, bgColor: StatusBgClass.invisible, textColor: StatusTextClass.invisible},
  away: { id: Id.away, title: Text.away, color: StatusColor.away, bgColor: StatusBgClass.away, textColor: StatusTextClass.away},
  dnd: { id: Id.dnd, title: Text.dnd, color: StatusColor.dnd, bgColor: StatusBgClass.dnd, textColor: StatusTextClass.dnd},
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
