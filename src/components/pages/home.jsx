import Student from "../../assets/gambar/student.png"
import Caldr from "../../assets/gambar/calendar.png"
import Teacher from "../../assets/gambar/teacher.png"
import Leader from "../../assets/gambar/lead.png"
import Background from "../../assets/gambar/Background.png"
import Rpl from "../../assets/gambar/rpl.png"
import Hotel from "../../assets/gambar/pin.png"
import Akuntansi from "../../assets/gambar/account.png"
import "../../App.css";

function Home() {
  return (
    <div>
      <img class="bg w-[70%] pt-[8rem] ml-[20rem]" src={Background} />
      <div id="1" class="flex flex-col pt-[8rem] pl-[10rem]">
        <h1 class="text-[48px] font-bold">SMK Yadika Soreang</h1>
        <p class="pb-10">
          Sekolah Menengah Kejuruan yang memiliki 3 jurusan yaitu Perhotelan,<br />
          Rekayasa Perangkat Lunak, dan Akutansi yang memiliki fasilitas mewah<br />
          dengan harga terjangkau.
        </p>
      </div>


      <div class=" pl-[10rem] flex flex-row gap-x-5">
        <a href="" class="border-2 border-sky-600 py-2 px-8 rounded-full hover:bg-sky-800 hover:text-bold hover:text-white hover:border-white hover:drop-shadow-lg">Contact Us</a>
        <a href="" class=" bg-sky-800 rounded-full px-8 py-2 text-white shadow-lg shadow-blue-500/50">Our School</a>
      </div>


      <div class="flex justify-center p-12 pt-[20rem]">
        <div class="flex justify-center bg-sky-100 h-42 space-x-12 place-items-center rounded-md">
          <div class="flex flex-row pl-12">
            <img class="h-20" src={Student} />
            <div class="flex flex-col pl-3">
              <h3 class="font-bold text-[24px]">900+</h3>
              <p>Students</p>
            </div>
          </div>
          <div class="bg-sky-700 h-20 w-[4px]"></div>
          <div class=" flex flex-row p-5 py-10">
            <img src={Caldr} />
            <div class="flex flex-col pl-3">
              <h3 class="font-bold text-[24px]">10</h3>
              <p>school<br /> year</p>
            </div>
          </div>
          <div class="bg-sky-700 h-20 w-[4px]"></div>
          <div class=" flex flex-row py-10">
            <img src={Teacher} />
            <div class="flex flex-col pl-3">
              <h3 class="font-bold text-[24px]">42+</h3>
              <p>teacher</p>
            </div>
          </div>
          <div class="bg-sky-700 h-20 w-[4px]"></div>
          <div class="flex flex-row pr-12">
            <img src={Teacher} />
            <div class="flex flex-col pl-3">
              <h3 class="text-white text-center bg-sky-800  rounded-xl px-2 py-1">check</h3>
              <p>pendaftar</p>
            </div>
          </div>
        </div>
      </div>


      <div id="2" class="flex flex-row pl-[10rem] pt-[15rem] gap-x-[6rem] pr-[18rem]">
        <img src="https://cloning-web-smk-yadika-soreang-xi-rpl-1-20232024.xi-rpl-1-20232024.repl.co/src/assets/lead.png" class="w-[30%]" />
        <div>
          <h2 class="font-bold text-[28px] pb-6">Kepala Sekolah Kita</h2>
          <p>
            Selamat datang di website resmi SMK Yadika Soreang. Saya sangat gembira dapat berbicara pada Anda melalui platform ini. Sebagai kepala sekolah, saya bertanggung jawab untuk memimpin dan memberikan arah bagi sekolah kami. Saya sangat bangga dengan prestasi dan keberhasilan yang telah dicapai oleh para siswa, guru, dan staf kami. Website ini dirancang untuk memberikan informasi tentang sekolah kami, seperti visi, misi, program, dan kegiatan. Kami berharap bahwa website ini akan menjadi sumber informasi yang berguna bagi para siswa, orang tua, dan masyarakat. Sebagai sekolah, kami bertekad untuk terus memperbaiki diri dan memberikan pendidikan berkualitas bagi para siswa. Saya berharap bahwa Anda akan menemukan informasi yang berguna dan menarik di website ini.Terima kasih atas kunjungan Anda.
          </p>
          <p className="py-2">Salam,</p>
          <p>Yetti Nuraeni S.Pd.,Gr.</p>
        </div>
      </div>


      <div id="3" class="bg-white border-2 border-sky-900 rounded-xl mt-[10rem]">
        <h2 class="font-bold text-[28px] text-center pt-5">Jurusan apa yang tersedia</h2>
        <div class="flex flex-row justify-center py-24 space-x-12">
          <div class="AK flex items-center flex-col w-[20rem] space-y-7 shadow-2xl p-5 rounded-xl ">
            <img src={Akuntansi} />
            <h2 class="font-bold text-[18px]">Akuntansi</h2>
            <p class="text-center text-[15px]">Jurusan Akuntansi merupakan bidang studi yang mempelajari tentang metode pencatatan serta penyusunan laporan keuangan.
            </p>
            <a class="AKT border-2 border-sky-800 px-8 py-1 rounded-md ">More</a>
          </div>
          <div class="AK flex items-center flex-col  w-[20rem] space-y-5 shadow-2xl p-5 rounded-xl">
            <img src={Rpl} />
            <h2 class="font-bold text-[18px] text-center">Rekayasa Perangkat Lunak</h2>
            <p class="text-center text-[15px]">Rekayasa Perangkat Lunak adalah salah satu jurusan yang berfokus pada produksi dan pengembangan perangkat lunak.
            </p>
            <br />
            <a class="AKT border-2 border-sky-800 px-8 py-1 rounded-md ">More</a>
          </div>
          <div class="AK flex items-center flex-col  w-[20rem] space-y-6 shadow-2xl p-5 rounded-xl">
            <img src={Hotel} />
            <h2 class="font-bold text-[18px]">Perhotelan</h2>
            <p class="text-center text-[15px]">Jurusan Perhotelan adalah jurusan yang mempelajari pengelolaan hotel serta cara menyeimbangkan aspek wisata dan manajemen bisnis untuk mencapai kesuksesan.
            </p>
            <a class="AKT border-2 border-sky-800 px-8 py-1 rounded-md">More</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-4 left-[50px] bottom-[200px] z-10 fixed">
        <a className="indikator border-sky-800 border-2 rounded-full w-4 h-4 text-white" href="#1">.</a>
        <a className="indikator border-sky-800 border-2 rounded-full w-4 h-4 text-white" href="#2">.</a>
        <a className="indikator border-sky-800 border-2 rounded-full w-4 h-4 text-white" href="#3">.</a>
        <a className="indikator border-sky-800 border-2 rounded-full w-4 h-4 text-white" href="#4">.</a>
      </div>

      <div id="4"></div>
    </div>
  )
}

export default Home;