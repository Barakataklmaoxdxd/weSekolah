import perpus from "../../assets/gambar/perpus.jpeg"
import lab from "../../assets/gambar/labkomputer.jpeg"
import kantin from "../../assets/gambar/mkpc.png"
import Mushola from "../../assets/gambar/Ramadan .png"
import Socer from "../../assets/gambar/Junior.png"
import Arrow from "../../assets/gambar/arrow.png"
import Guru from "../../assets/gambar/profile.png"
import "../../App.css";

function Profile() {
  return (
    <div>
      <img src="https://smkyadikasoreang.sch.id/Assets/Profile/img/Group 26.png" className="bg w-[60%]   pt-[8rem] ml-[30rem]" />
      <div className="flex flex-col pt-[15rem] pl-[8rem] ">
        <h1 className="text-[35px]">Profile Sekolah</h1>
        <p className="text-[24px] ml-2">Kenalan dengan beberapa Guru dan beberapa<br />Fasilitas yang tersedia di SMK Yadika Soreang Yuk!</p>

      </div>


      <div className="mt-[18rem]">
        <h2 className="font-bold text-[45px] text-center ">Guru Kita</h2>
        <div className="flex flex-row border rounded-lg shadow-lg px-8 py-2 text-[20px] w-48 absolute right-0 mx-[14rem] mt-4">
          <button > selengkapnya</button>
          <img src={Arrow} className="w-[2rem]" />
        </div>
        <div className="flex flex-row space-x-10">
          <div className="border-2 rounded-lg w-[18rem] h-[23rem] ml-44 mt-[8rem] shadow-2xl ">
            <img src={Guru} className="w-[10rem] ml-[3rem] mt-[2rem] " />
            <h2 className="font-bold text-[2rem] text-center mt-2">Nama Guru </h2>
            <p className="text-[24px] text-center mt-2">Mata Pelajaran</p>
          </div>
          <div className="border-2 rounded-lg w-[18rem] h-[23rem] ml-44 mt-[8rem] shadow-2xl ">
            <img src={Guru} className="w-[10rem] ml-[3rem] mt-[2rem] " />
            <h2 className="font-bold text-[2rem] text-center mt-2">Nama Guru </h2>
            <p className="text-[24px] text-center mt-2">Mata Pelajaran</p>
          </div>
          <div className="border-2 rounded-lg w-[18rem] h-[23rem] ml-44 mt-[8rem] shadow-2xl ">
            <img src={Guru} className="w-[10rem] ml-[3rem] mt-[2rem] " />
            <h2 className="font-bold text-[2rem] text-center mt-2">Nama Guru </h2>
            <p className="text-[24px] text-center mt-2">Mata Pelajaran</p>
          </div>
        </div>
      </div>

      <div className="mx-[120px]  pt-24">
        <h2 className="font-bold text-[45px] text-center pt-5 pb-24">Fasilitas Sekolah</h2>
        <div className="flex flex-row space-x-10">
          <img src={perpus} class="w-[45%]" />
          <div className="flex flex-col">
            <h2 className="text-[34px] pb-8">Perpustakaan</h2>
            <p className="text-[18px] ">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </div>

        <div className="bg-neutral-300 h-[1px] my-24"></div>

        <div className="flex flex-row space-x-10">
          <div className="flex flex-col">
            <h2 className="text-[34px] font-bold pb-8">Lab Komputer</h2>
            <p className="text-[20px]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
          <img src={lab} class="w-[45%]" />
        </div>
      </div>

      <div className="bg-neutral-300 h-[1px] my-24 mx-24"></div>

      <div className="flex flex-row space-x-10">
        <img src={kantin} class="w-[45%] pl-[8rem] " />
        <div className="flex flex-col pt-24">
          <h2 className="text-[34px] pb-8">kantin</h2>
          <p className="text-[18px] ">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do velit esse cillum dolore eu fugiat nulla pariatur. Excepteur<br /> sint occaecat cupidatat non proident, sunt in culpa qui officia <br /> deserunt mollit anim id est laborum."</p>
        </div>
      </div>
      <div className="bg-neutral-300 h-[1px] my-24 mx-24"></div>

      <div className="flex flex-row space-x-10">
        <div className="flex flex-col pt-24 ml-28">
          <h2 className="text-[34px] font-bold pb-8">Mushola</h2>
          <p className="text-[20px]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint<br /> occaecat cupidatat non proident, sunt in culpa qui officia <br />deserunt mollit anim id est laborum."</p>
        </div>
        <img src={Mushola} class="w-[35%] " />
      </div>

      <div className="bg-neutral-300 h-[1px] my-24 mx-24"></div>


      <div className="flex flex-row space-x-10">
        <img src={Socer} class="w-[45%] pl-[8rem] " />
        <div className="flex flex-col pt-24">
          <h2 className="text-[34px] pb-8">Lapangan Olahraga</h2>
          <p className="text-[18px] ">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do velit esse cillum dolore eu fugiat nulla pariatur. Excepteur<br /> sint occaecat cupidatat non proident, sunt in culpa qui officia <br /> deserunt mollit anim id est laborum."</p>
        </div>
      </div>
      <div className="bg-neutral-300 h-[1px] my-24 mx-24"></div>
    </div>

  )
}

export default Profile;