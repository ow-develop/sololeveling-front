declare module '*.svg' {
  const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default value
}
declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.webp'
declare module '*.gif'
declare module '*.mp4' {
  const src: string
  export default src
}
declare module '*.3gp'
