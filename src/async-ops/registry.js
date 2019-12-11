const registry = {}

export const register = (name, func) => {
  if (registry[name]) {
    return
  }

  registry[name] = func
}

export default registry
