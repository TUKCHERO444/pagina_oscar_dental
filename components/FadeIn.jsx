"use client"

import { useEffect, useRef, useState } from "react"

const variants = {
  up: "translate-y-10",
  down: "-translate-y-10",
  left: "translate-x-10",
  right: "-translate-x-10",
  none: "",
}

export default function FadeIn({
  children,
  variant = "up",
  delay = 0,
  duration = "duration-700",
  className = "",
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all ${duration} ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      data-visible={visible}
    >
      <div
        className={`transition-all ${duration} ease-out ${
          visible
            ? "opacity-100 translate-x-0 translate-y-0"
            : `opacity-0 ${variants[variant]}`
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  )
}
