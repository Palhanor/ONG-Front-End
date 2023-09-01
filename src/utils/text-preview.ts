import { breakpoints } from './breakpoints'

export const textPreview = (
  text: string,
  screenWidth: number,
  open: boolean,
): string => {
  if (!open && screenWidth < breakpoints.MOBILE)
    return text.slice(0, 80) + '...'
  return text
}
