import { ImQuotesLeft } from "react-icons/im";


export default function ReviewCart({name}) {
  return (
    <div className="flex flex-col w-full lg:w-2/6 border-2 border-DarkColor p-3 rounded-lg gap-5 cursor-pointer hover:bg-PrimaryColor transition dura ease-in-out">
        <div>
            <ImQuotesLeft size={25}/>
            <h1 className="text-xl font-semibold text-ExtraDarkColor pt-4">{name}</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum, laboriosam nemo voluptatum vel vero.</p>
    </div>
  )
}
