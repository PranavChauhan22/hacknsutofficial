import TubelightText from "../TubeLightText/TubelightText"
import {
  useWindowWidth
} from "@react-hook/window-size"
import "./ComingSoon.css"

function ThemeComingSoon() {
  const onlyWidth = useWindowWidth()
  return (  
  <section className="Theme_Coming_Soon">
      <div className="theme__header">
        <div
          className="header_line"
          style={{ width: 50 < onlyWidth / 2 - 200 ? onlyWidth / 2 - 200 : 50 }}
        ></div>
        <div className="theme__head">Themes</div>
        <div
          className="header_line"
          style={{ width: 50 < onlyWidth / 2 - 200 ? onlyWidth / 2 - 200 : 50 }}
        ></div>
      </div>
      <h1><TubelightText text='Coming Soon...'></TubelightText></h1>
    </section>
  )
}

export default ThemeComingSoon
