import { useEffect, useState } from 'react'

export default function SkillBar({ name, percent, color }) {
  // Começa em 0 e anima até o valor depois de montar (antes era feito com jQuery.animate)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setWidth(percent))
    return () => cancelAnimationFrame(frame)
  }, [percent])

  return (
    <div className="skillbar clearfix" data-percent={`${percent}%`}>
      <div className="skillbar-title" style={{ background: color.title }}>
        <span>{name}</span>
      </div>
      <div className="skillbar-bar" style={{ background: color.bar, width: `${width}%` }} />
    </div>
  )
}
