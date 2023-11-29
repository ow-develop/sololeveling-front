export const cardEffect = (delay?: number) => ({
  hidden: { opacity: 0 },
  delay: { opacity: 1, transition: { delay } },
  glow: { color: 'white', boxShadow: '0 1px 15px #afe0f5' }
})
