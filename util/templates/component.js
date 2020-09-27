module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react"

import { ${componentName}Props } from "./${componentName}.types"

import "./${componentName}.less"

const ${componentName} = (props: ${componentName}Props) => (
  <div data-testid="${componentName}" className="${componentName}">${componentName}</div>
)

export default ${componentName}
`,
  extension: `.tsx`
})
