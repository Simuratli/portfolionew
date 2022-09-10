import React, { useState } from 'react'

function TextEditor() {

  const [data, setData] = useState({
    html: `<p>Hello <b>World</b> !</p><p>Paragraph 2</p>`,
    editable: true
  })

  const handleChange = (evt: any) => {
    setData((prev) => ({
      ...prev,
      html: evt.target.value
    }))
  }

  const sanitizeConf = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
    allowedAttributes: { a: ["href"] }
  };

  return (
    <div>TextEditor</div>
  )
}

export default TextEditor