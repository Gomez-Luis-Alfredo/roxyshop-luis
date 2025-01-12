import { RxCross1 } from "react-icons/rx";
import { useAppDispatch } from "../redux/hooks";
import {removeFromCart} from '../redux/features/cartSlice'

export default function CartProduct({id,img, title, price, quantity}) {
    const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
            <img src={img} alt="img" className="h-[80px]" />
            <div className="space-y-2">
                <h3 className="font-medium">{title}</h3>
                <p className="text-gray-600 text-[14px]">Qty:{quantity}</p>
                <p className="text-gray-600 text-[14px]">Price: ${price}</p>
            </div>
        </div>
        <RxCross1
        className="cursor-pointer"
        onClick={()=>dispatch(removeFromCart(id))}
        />
    </div>
  )
}
