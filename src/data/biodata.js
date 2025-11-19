// Dummy biodata + projects. Edit this file to replace content quickly.
export const biodata = {
  name: 'Abdul Rosyid',
  role: 'Mahasiswa Statistika | Data Enthusiast',
  location: 'Surakarta, Indonesia',
  email: 'abdulrosyid6122004@gmail.com',
  phone: '+62 895-2634-7468',

  photo: '/placeholders/IMG_7299 (2).jpg',

  about:
    'Seorang mahasiswa S1-Statistika yang berminat dalam artificial intelligence. Berpengalaman dalam membangun model prediktif dan mengimplementasikannya dalam bentuk website dan chatbot.',

  stats: [
    { label: 'Projek', value: '5+' },
    { label: 'Penghargaan', value: '5' }
  ],

  projects: [
    {
      title: 'Atamagri',
      type: ['Web','Computer Vision','IoT'],
      img: '/placeholders/Screenshot 2025-11-19 161616.png',
      desc: 'Website yang digunakan untuk pemantauan kondisi tanaman terintegrasi IoT dan drone.',
      link: 'https://www.atamagri.app/'
    },
    {
      title: 'Scancer',
      type: ['Web','Computer Vision'],
      img: '/placeholders/Screenshot 2025-11-19 162213.png',
      desc: 'Website untuk mendeteksi apakah seseorang menderita kanker kulit atau tidak dengan input berupa gambar kulit pengguna.',
      link: 'https://scancer.streamlit.app/'
    },
    {
      title: 'Digicek',
      type: ['Web','Supervised Learning'],
      img: '/placeholders/Screenshot 2025-11-19 162351.png',
      desc: 'Website untuk mendeteksi apakah seseorang menderita diabetes dan gagal ginjal atau tidak dengan input berupa informasi terkait kebiasaan dan kesehatan pengguna.',
      link: 'https://digicek.streamlit.app/'
    },
    {
      title: 'Wellbot',
      type: ['Chatbot','Supervised Learning'],
      img: '/placeholders/PPT_LPK-Bingung Namain_Universitas Sebelas Maret_WELLBOT DETEKSI DINI.jpg',
      desc: 'Chatbot terintegrasi whatsapp untuk mendeteksi apakah seseorang menderita penyakit diabetes, gagal ginjal, dan penyakit jantung dengan input berupa informasi terkait kebiasaan dan kesehatan pengguna.',
      link: 'wa.me/6281233624051'
    },
    {
      title: 'EyeOnRoad',
      type: ['Web','Computer Vision'],
      img: '/placeholders/Screenshot 2025-11-19 162955.png',
      desc: 'Website untuk mendeteksi apakah seorang pengemudi mengantuk atau tidak dengan input berupa gambar wajah pengemudi.',
      link: 'https://huggingface.co/spaces/abdulrosyid/EyeOnRoad'
    }
  ]
}
