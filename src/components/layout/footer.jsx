import Bg from "../../assets/gambar/bg2.png"
import Logo from "../../assets/gambar/logo.png";
import Twt from "../../assets/gambar/twitter.png";
import Inst from "../../assets/gambar/instagram.png";
import Wa from "../../assets/gambar/whatsapp.png";
import Mail from "../../assets/gambar/email.png";
import Tlp from "../../assets/gambar/telpon.png";

function Footer() {
  return (
    <div className="pt-28">
      <div className="relative bg-sky-800 mt-[20rem] py-8 flex flex-row h-[100px]">
        <a>
          <h2 className="text-[28px] text-white pl-28 font-bold px-8 ">Ayo Daftar Sekarang Juga!</h2>
        </a>
        <a className="bg-white text-sky-700 px-4 py-2 rounded-full">PPDB</a>
        <div>
          <img className="w-[75%] absolute right-0 top-[-22rem] float-right pr-28" src={Bg}/>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="mt-28 flex flex-row gap-x-6 ml-24">
          <a>
            <img src={Logo} alt="logoydk" className="w-16" />
          </a>
          <a>
            <h2 className="font-bold text-[28px]">SMK Yadika Soreang</h2>
            <p> Jl.Raya Soreang , Cingcin , Kec.Soreang , Kabupaten <br />Bandung , Jawa Barat 40921</p>
          </a>
        </div>
        <div className="flex flex-row space-x-10 items-right ml-72 mt-24">
          <a>
            <h2 className="font-bold text-[20px] ">Link Helper</h2>
            <p>Home <br /> Profile <br /> Kelulusan <br /> PPDB </p>
          </a>
          <a>
            <h2 className="font-bold text-[20px] ">Need Help?</h2>
            <p>Contact Us <br /> Help <br /> FAQ's </p>
          </a>
        </div>
      </div>
      <div className="mt-12 ml-28 mb-8 flex flex-row gap-x-4">
        <a>
          <img src={Mail} className="w-[24px]" />
        </a>
        <a>
          <p>smkyadikasoreang@gmail.com</p>
        </a>
      </div>
      <div className=" ml-28 mb-24 flex flex-row gap-x-4">
        <a>
          <img src={Tlp} className="w-[22px]"></img>
        </a>
        <a>
          <p>08912300000400</p>
        </a>
      </div>
      <div className="bg-sky-800 mt-8 py-4 justify-center flex flex-row">
        <a>
          <h4 className="text-[16px] font-bold text-white mr-24">All rights reserve to SMK YADIKA SOREANG 2022 Ltd.</h4>
        </a>
        <a className="flex flex-row-reverse space-x-2 space-x-reverse  ">
          <img src={Twt} alt="" className="" />
          <img src={Inst} alt="" className="" />
          <img src={Wa} alt="" className="" />
        </a>
      </div>
    </div>

  )
}

export default Footer;