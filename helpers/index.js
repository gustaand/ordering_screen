export const formatearDinero = cantidad => {
  return cantidad.toLocaleString('en-es', {
    style: 'currency',
    currency: 'EUR'
  })
}
