import ReviewCart from "../layouts/ReviewCart";


export default function Reviews() {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5">
        {/*Heading*/}
        <h1 className="text-4xl text-center font-semibold text-ExtraDarkColor lg:mt-14 mt-24">Feedback Corner</h1>
        {/*Review cart section*/}
        <div className="flex flex-col items-center xl:flex-row gap-5 justify-center py-4 my-8">
            <ReviewCart name='Emily Davis'/>
            <ReviewCart name='Madison Michell'/>
            <ReviewCart name='Aubrey Carter'/>
        </div>
    </div>
  )
}
