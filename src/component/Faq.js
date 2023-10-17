import React from "react";
import { Container, Row, Col, Accordion} from "react-bootstrap";

const Faq=()=>{
    return <div className="faq" id="faq">
        <Container>
            <Row className="mb-5">
                <Col>
                <h2 className="text-center fw-bold">Frequently Asked Questions (FAQ)</h2>
                <p className="text-center">Temukan jawaban dari berbagai pertanyaan yang sering diajukan seputar Program Studi Sistem Informasi Kelautan (SIK)  UPI oleh calon pendaftar dan calon mahasiswa.</p>
                </Col>
            </Row>
            <Row className="row-cols-lg-2 row-cols-1 g-4">
                <Col>
                <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Apa yang dipelajari di Sistem Informasi kelautan?</Accordion.Header>
                        <Accordion.Body>
                        Di Program Studi Sistem Informasi Kelautan, mahasiswa akan belajar untuk bisa mengelola data-data kelautan dan perikanan dengan metode-metode tertentu baik untuk data yang bersifat numerik maupun spasial. Oleh karena itu setidaknya di program studi sistem informasi kelautan kita akan 
                        belajar 3 (tiga) bidang ilmu, yaitu Sistem Informasi, Geografi, serta Kelautan dan Perikanan.
                        </Accordion.Body>   
                    </Accordion.Item>
                </Accordion>
                </Col>
                <Col>
                <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Apa anak SMK/IPS bisa masuk Prodi Sistem Informasi Kelautan?</Accordion.Header>
                        <Accordion.Body>
                        Anak IPS tidak bisa, yang bisa masuk ke prodi Sistem Informasi Kelautan (SIK) adalah IPA dan SMK Jurusan tertentu. Jurusan SMK yang bisa masuk 
                        ke prodi SIK adalah Teknik Geomatika dan Geospasial, Teknik Komputer dan Informatika, Pelayaran Kapal Penangkap Ikan, Perikanan, dan Pengolahan Hasil Perikanan.
                        </Accordion.Body>   
                    </Accordion.Item>
                </Accordion>
                </Col>
                <Col>
                <Accordion>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Apakah harus bisa berenang untuk masuk Prodi Sistem Informasi kelautan?</Accordion.Header>
                        <Accordion.Body>
                        Tidak harus, ada mata kuliah selam ilmiah yang nantinya akan bisa mahasiswa manfaatkan 
                        untuk berlatih berenang dan menyelam untuk kebutuhan pengambilan data di laut.
                        </Accordion.Body>   
                    </Accordion.Item>
                </Accordion>
                </Col>
                <Col>
                <Accordion>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Bagaimana cara masuk Prodi Sistem Informasi kelautan?</Accordion.Header>
                        <Accordion.Body>
                        Untuk dapat menjadi mahasiswa di program Studi Sistem Informasi Kelautan,
                         calon mahasiswa dapat mengikuti seleksi SNMPTN, SBMPTN, Mandiri UPI, Prestasi Mahasisiswa dan RPL (Rekognisi Pembelajaran Lampau). 
                        </Accordion.Body>   
                    </Accordion.Item>
                </Accordion>
                </Col>
                <Col>
                <Accordion>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Berapa passing grade masuk Sistem Informasi kelautan?</Accordion.Header>
                        <Accordion.Body>
                        Universitas Pendidikan Indonesia selama ini tidak pernah merilis secara resmi passing grade minimal atau maksimal sebagai syarat kelulusan.
                        </Accordion.Body>   
                    </Accordion.Item>
                </Accordion>
                </Col>
                <Col>
                <Accordion>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Apa saja Fasilitas Sistem Informasi kelautan?</Accordion.Header>
                        <Accordion.Body>
                        Laboratorium Sistem Informasi dan Rekayasa, Laboratorium Remote Sensing (Penginderaan Jauh), Laboratorium Computational Intelligence (Kecerdasan Komputasional), Laboratorium sumber daya kelautan, Marine station Lontar, Lab Bahasa, Smart Classroom,
                         Perpustakaan dengan buku dan jurnal kelautan dan perikanan, ruang kuliah ber AC dan terkoneksi dengan Wifi.
                        </Accordion.Body>   
                    </Accordion.Item>
                </Accordion>
                </Col>
                <Col>
                <Accordion>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>Apakah ada asrama untuk mahasiswa? Berapa kira-kira biayanya?</Accordion.Header>
                        <Accordion.Body>
                        Universitas Pendidikan Indonesia Kampus Daerah Serang memiliki asrama dengan kuota
                         10 orang untuk SIK. Biaya Rp. 2.000.000/tahun/mahasiswa dan dapat dicicil 2 x dalam setahun.
                        </Accordion.Body>   
                    </Accordion.Item>
                </Accordion>
                </Col>
                <Col>
                <Accordion>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>Bagaimana peluang kerja setelah lulus?</Accordion.Header>
                        <Accordion.Body>
                        Lulusan dapat bekerja di Kementerian/Lembaga/Badan pemerintahan seperti KKP, KEMENKO MARITIM, KLHK, BMKG, BIG, BAKAMLA, BRIN, 
                        dll atau perusahaan Swasta seperti Konsultan Lingkungan, NGO, WWF, TNC, WCS, CSF, WRI, dll.
                        </Accordion.Body>   
                    </Accordion.Item>
                </Accordion>
                </Col>
            </Row>
        </Container>
    </div>;
};
export default Faq;