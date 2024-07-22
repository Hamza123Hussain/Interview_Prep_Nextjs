export const Counter = () => {
  let count = 1
  return {
    increment: () => {
      count += 1
    },
    GetValue: () => {
      return count
    },
  }
}
