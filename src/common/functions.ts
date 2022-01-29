export const formatPricetoBRL = (preco: number) => {
    return `R$ ${Number(preco).toFixed(2).replace(".", ",")}`
}

