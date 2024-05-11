const Footer = () => {
  return(
    <div className="bg-orange-500 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center border-3 rounded-2xl p-2 bg-slate-500"><span className="text-white-500">TMH </span><p className=" text-amber-300">Resturant</p></div>
            <span className="text-white font-bold tracking-tight flex gap-4">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </span>
        </div>
  </div>
  )
}

export default Footer;