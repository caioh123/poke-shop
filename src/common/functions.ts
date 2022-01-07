export const formatPricetoBRL = (preco: number) => {
    return `R$ ${preco.toFixed(2).replace(".", ",")}`
}