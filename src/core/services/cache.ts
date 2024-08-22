const cache = new Map()

export function hasInCache(key: string) {
  return cache.has(key)
}

export function setInCache(key: string, value: any) {
  cache.set(key, [value, Date.now()])
}

export function getForCache(key: string) {
  return cache.get(key) ? cache.get(key)[0] : undefined
}

export function deleteForCache(key: string) {
  cache.delete(key)
}

export function clearCache() {
  cache.clear()
}

export function cacheIsExpired(key: string, seconds = 1000) {
  const entry = cache.get(key)
  if (!entry) {
    return true
  }

  const [, timestamp] = entry
  return (Date.now() - timestamp) / 1000 > seconds
}
