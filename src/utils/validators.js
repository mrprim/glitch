export const required = value => value ? undefined : 'required'

export const indexBeyondMax = (index, max) => () => max && max <= index ? 'too many' : undefined
