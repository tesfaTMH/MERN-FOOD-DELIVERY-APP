import landingImage from '../assets/landing.png'
import appDownload from '../assets/appDownload.png'

export const Home = () => {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex-col gap-5 text-center -mt-20">
            <h1 className="text-2xl font-bold tracking-tight text-orange-600">
                Order your takeway from our multiple dish options
            </h1>
            <span className="text-xl">Food is just a click away</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage}  />
            <div className='flex flex-col items-center justify-center gap-4 text-center'>
                <span className='font-bold text-2xl tracking-tighter'>To order takeway faster</span>
                <span>Download <span className='flex items-center border-2 rounded-2xl p-2 bg-slate-500'><span className="text-1xl text-orange-500 items-center">TMH </span><p className=" text-amber-300">Resturant</p></span> App</span>
                <img src={appDownload} />
            </div>
        </div>
    </div>
  )
}
