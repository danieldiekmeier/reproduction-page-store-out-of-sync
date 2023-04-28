let pretend_datastore = 0

export function load() {
  return {
    state: pretend_datastore,
  }
}

export const actions = {
  async default() {
    pretend_datastore = pretend_datastore += 1

    return {
      hello: 'world',
    }
  },
}
