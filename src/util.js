export const formatCurrency=(price)=>{
    return "$"+Number(price.toFixed(1)).toLocaleString()
}