import { useEffect } from 'react'

export function useEmbedResize(active: boolean) {
  useEffect(() => {
    if (!active) {
      return
    }

    document.body.classList.add('embed-mode')

    const postHeight = () => {
      const height = Math.ceil(document.documentElement.scrollHeight)
      window.parent.postMessage({ type: 'playground-resize', height }, '*')
    }

    postHeight()

    const observer = new ResizeObserver(postHeight)
    observer.observe(document.body)

    return () => {
      observer.disconnect()
      document.body.classList.remove('embed-mode')
    }
  }, [active])
}
