
export const cartItem = (item,currentitem)=>{
    console.log("item",item)
    console.log("currentitem",currentitem)
    const itemExist = item.find(item=>item.product===currentitem.product)
    console.log("currentitem.quantity",currentitem.quantity);
    
    if(itemExist){
      return  item.map(item =>item.product === currentitem.product ? {...item,quantity:Number(item.quantity)+Number(currentitem.quantity)}:item
        )
    }
    console.log("[...item,{...currentitem}]",[...item,{...currentitem}]);
    console.log("{...currentitem}]",{...currentitem});
    console.log("[...item,]",[...item]);
    return [...item,{...currentitem}]
    }
    
    
    export const removeItem = (item,currentitem)=>{
      const itemExist = item.find(item=>item.id===currentitem.id)
     if(itemExist.quantity === 1){
       return item.filter(item =>item.id !== currentitem.id)
     }
        return  item.map(item =>item.id === currentitem.id ? {...item,quantity:item.quantity - 1}:item)
    
    }