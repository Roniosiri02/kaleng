import Hero from "./component/Hero";
import Kartu from "./component/Kartu";
const Maincontent =()=>{
    return(
        <div id="home">
        <Hero />
        <div>   
                <div className="mx-4 bg-blue-400 text-black lg:hidden lg:w-[50%] p-4 lg:mt-4 rounded-md">
                    <h1 className=" text-xl font-LibraCaslonText text-center"> Profil Sistem Informasi Kelautan</h1>
                    <p className="py-2">Tahun 2019 UPI Kampus Serang membuka Program Studi Baru yaitu S1 Sistem Informasi Kelautan (SIK). Lulusan prodi S1 SIK memiliki kompetensi untuk mempersiapkan sumberdaya manusia
                     sektor kemaritiman pada era revolusi industri 4.0 Kompetensi lulusan S1 SIK meliputi:
                        (1) Mampu mengidentifikasi, menganalisis, merumuskan, melaporkan dan merekomendasikan masalah-masalah dan penyelesaian di bidang sistem informasi kelautan baik dalam lingkup kegiatan penelitian maupun penerapan.
                        (2) Menguasai pengetahuan tentang teknologi komunikasi terkini dan aplikasinya untuk mendukung wirausaha, riset dan meningkatkan kinerja
                        (3) Menguasai teknologi informasi, pemodelan dan pemrograman kelautan, instrumen  di kelautan, metode survey dan analisis data, penginderaan jauh, sistem informasi geografi, dan penulisan karya ilmiah.
                        (4) Menguasai bidang aplikasi kelautan, perikanan, oseanografi, meteorologi dan klimatologi, serta metodologi penelitian. </p>
                    <p className="py-2"> Lulusan Program Studi Sistem Informasi Kelautan UPI dapat bekerja di berbagai bidang, seperti peneliti, konsultan, analis sistem informasi, ahli kelautan, staff kementerian/lembaga pemerintahan terkait, wirausaha, programmer, staff NGO (Non Governmental Organization), teknisi sistem informasi, tenaga pendidik dan lain-lain   
                    Lulusan dapat bekerja di Kementerian/Lembaga/Badan pemerintahan dan swasta. Kementerian/Lembaga/Badan pemerintahan tersebut seperti Kementerian Kelautan dan Perikanan (KKP), Kementerian Koordinator Bidang Kemaritiman (KEMENKO MARITIM), Kementerian Lingkungan Hidup dan Kehutanan (KLHK), Lembaga Ilmu Pengetahuan Indonesia (LIPI), Badan Meteorologi Klimatologi dan Geofisika (BMKG), Lembaga Antariksa dan Penerbangan (LAPAN), Badan Informasi Geospasial (BIG), Badan Keamanan Laut (BAKAMLA), Badan Pusat Statistik (BPS), Dinas Hidrodinamika dan Oseanografi TNI AL. Sedangkan pada bidang swasta seperti Konsultan Lingkungan, Non Governmental Organization (NGO) seperti World Widelife Fund (WWF), The Nature Conservancy (TNC), Wildlife Conservation Society (WCS), Conservation Strategy Fund (CSF), World Resources Institute (WRI) dan lain lain.</p>
                    <iframe style={{'width':'100%', 'height':'90vh'}} title="ytintro" className=" lg:float-center lg:clear-center w-full xl:h-[1000px] md:w-[600%] " src="https://www.youtube.com/embed/VPIa2X1J4T8" ></iframe>
                </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center my-5">
                    <h1>More Information</h1>
                </div>
                    <Kartu/>
            </div>
        </div>
        <div className="relative w-full h-[400px] mt-10">
        <div className="mx-4 bg-celo-400 text-black lg:hidden lg:w-[50%] p-4 lg:mt-4 rounded-md">
        <h1 className=" text-xl font-LibraCaslonText text-center">Sistem Informasi Kelautan</h1>
                        <p className="text-[12px] text-justify px-4 xl:text-xl md:text-lg ip4:text-base ">Program Studi Sistem Informasi Sistem Kelautan merupakan bagian dari Ilmu Kelautan yang fokus pada analisis data kelautan baik numerik maupun spasial untuk kemudian diintegrasikan berbasis sistem informasi yang dikembangkan sebagai dasar pengambilan keputusan. Bidang kajian dari prodi SIK terdiri dari Ilmu Kelautan, Ilmu Perikanan, Sistem Informasi, Sistem Informasi Geografis, serta Penginderaan Jauh Keluatan dan Ilmu Kelautan. Pembelajaran di SIK selain dilaksanakan di ruang kelas juga dilaksanakan di laboratorium, e-learning, field study ke pesisir dan laut. Pembelajaran di SIK dilaksanakan oleh dosen SIK dan dosen dari Kampus UPI Serang serta para praktisi dan profesional di bidangnya.</p>
                    </div>
            </div>

        <div className="mx-4 bg-celo-400 text-black lg:hidden lg:w-[50%] p-4 lg:mt-4 rounded-md">
        <h1 className=" text-xl font-LibraCaslonText text-center">PMP UPI</h1>
        <p className="py-2">Universitas Pendidikan Indonesia (UPI) sebagai salah satu Perguruan Tinggi Negeri Berbadan Hukum (PTN-BH) di Indonesia merupakan universitas dengan jati diri kependidikan. UPI menerapkan sistem multi kampus dengan UPI Bandung atau Bumi Siliwangi sebagai Kampus Pusat, sedangkan Kampus Daerah tersebar di Provinsi Jawa Barat meliputi Cibiru, Tasikmalaya, Purwakarta, Sumedang, dan Provinsi Banten di Kota Serang. Sebagai PTN maka penerimaan mahasiswa baru setiap tahunnya melalui jalur Seleksi Nasional Masuk Perguruan Tinggi Negeri (SNMPTN), Seleksi Bersama Masuk Perguruan Tinggi Negeri (SBMPTN), Seleksi Mandiri, dan Prestasi Istimewa.</p>                </div>
        </div>

        
        
 
    )
} 
export default Maincontent;