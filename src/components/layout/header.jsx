import Logo from "../../assets/gambar/logo.png";
import {Link} from 'react-router-dom'
import "../../App.css"

function Header() {
    return (
        <div class="p-5 border-b-[1px] flex flex-row space-x-[14rem] justify-center">
            <div class="flex flex-row gap-x-6 self-center">
              <img src={Logo} alt="logoYdk" class="w-10"/>
              <h2 class="text-[18px] font-bold">SMK Yadika Soreang</h2>
            </div>
            <div class="flex row-auto">
                <ol class="flex row-auto gap-x-10 elf-center">
                    <li>
                        <Link to="/" class="text-[20px] hover:text-sky-800">Home</Link>
                    </li>
                    <li>
                        <Link to="profile" class="text-[20px] hover:text-sky-800">Profile</Link>
                    </li>
                    <li>
                        <Link to="" class="text-[20px] hover:text-sky-800">Pendaftar</Link>
                    </li>                  
                    <Link to="" class="btn-header text-white font-bold bg-sky-800 px-8 py-2 rounded-full hover:text-sky-800 hover:bg-white hover:drop-shadow-lg">PPDB</Link>  
                    <Link to="" class="btn-header text-white font-bold bg-sky-800 px-8 py-2 rounded-full hover:text-sky-800 hover:bg-white hover:drop-shadow-lg">Login</Link>                 
                </ol>
            </div>
        </div>
    )
}

export default Header;