/**
 * DOPE Personality Test - Data Module
 * Contains all 77 questions and personality data
 */

const QUESTIONS = [
  { q: "Saya menyukai orang yang terus terang.", type: "D" },
  { q: "Saya bangga kepada diri saya yang bersikap hati-hati.", type: "E" },
  { q: "Saya dapat dianggap sebagai orang yang bahagia, setia, akomodatif dan lembut.", type: "P" },
  { q: "Saya kadang-kadang subjektif dalam mendeskripsikan pemikiran saya.", type: "O" },
  { q: "Saya sabar saat meminta orang lain melakukan sesuatu.", type: "P" },
  { q: "Saya dapat dianggap sebagai seseorang yang populer, sosial, dipercaya dan responsif.", type: "O" },
  { q: "Kadang-kadang saya lambat dalam memberikan pendapat.", type: "P" },
  { q: "Saya tidak peduli bahwa saya orang yang tidak sabar.", type: "D" },
  { q: "Saya dapat dianggap sebagai seseorang yang hangat, penuh kasih sayang, bersahabat dan menyenangkan.", type: "P" },
  { q: "Saya suka dengan orang yang bersahabat.", type: "O" },
  { q: "Orang-orang berpendapat bahwa saya adalah seorang pendengar yang baik.", type: "P" },
  { q: "Saya dapat dianggap sebagai seseorang yang perhatian, sungguh-sungguh, simpatik dan murah hati.", type: "P" },
  { q: "Orang-orang berpikir bahwa saya adalah seseorang yang dapat diandalkan.", type: "P" },
  { q: "Saya seringkali memerlukan kehadiran orang lain.", type: "O" },
  { q: "Pada saat diberikan perintah maka saya akan melakukan yang terbaik.", type: "P" },
  { q: "Salah satu ketakutan terbesar saya adalah orang mengambil keuntungan dari saya.", type: "E" },
  { q: "Orang-orang berpendapat bahwa saya adalah seorang pembicara yang baik.", type: "O" },
  { q: "Saya dapat dianggap sebagai seseorang yang loyal, sistematis, objektif dan disiplin.", type: "E" },
  { q: "Salah satu ketakutan terbesar saya adalah menerima kritikan atas kesalahan yang saya lakukan.", type: "E" },
  { q: "Orang-orang berpendapat bahwa saya adalah seseorang yang menunjukkan hasil.", type: "D" },
  { q: "Saya dapat dianggap sebagai seseorang yang perhitungan, tepat, akurat dan presisi.", type: "E" },
  { q: "Salah satu ketakutan terbesar saya adalah perubahan.", type: "P" },
  { q: "Saya merasa bahagia saat apa yang saya lakukan lancar dan tepat.", type: "E" },
  { q: "Saya dapat dianggap sebagai seseorang yang berhati-hati, selaras, konsisten dan patuh.", type: "P" },
  { q: "Ketika berada di bawah tekanan saya berpendapat bahwa pikiran positif akan sangat membantu saya.", type: "O" },
  { q: "Saya bekerja bersama orang lain dengan baik.", type: "P" },
  { q: "Saya memandang kehidupan sebagai sebuah proses yang kompetitif.", type: "D" },
  { q: "Salah satu ketakutan terbesar saya adalah menyakiti orang lain.", type: "P" },
  { q: "Saya merasa nyaman ketika berada dalam pengawasan.", type: "P" },
  { q: "Saya dapat dianggap sebagai seseorang yang tenang, soleh, pemikir, dan teratur.", type: "E" },
  { q: "Saya seseorang yang berpikiran positif.", type: "O" },
  { q: "Saya merasa nyaman saat patuh pada jadwal.", type: "E" },
  { q: "Saya dapat dianggap sebagai seseorang yang blak-blakan, mandiri, berani dan ramai.", type: "D" },
  { q: "Saya seseorang yang murah hati.", type: "P" },
  { q: "Saya senang saat mendengarkan orang lain.", type: "P" },
  { q: "Saya dapat dianggap sebagai seseorang yang berbeda, keras kepala, gigih, dan tegas.", type: "D" },
  { q: "Teman saya kadang-kadang menuduh saya tidak mau mendengarkan.", type: "D" },
  { q: "Ketika meminta orang lain melakukan suatu pekerjaan, saya ingin pekerjaan tersebut diselesaikan dengan cepat.", type: "D" },
  { q: "Teman-teman terkadang menuduh saya sebagai seseorang yang terlalu berhati-hati.", type: "E" },
  { q: "Ketika meminta orang lain melakukan suatu pekerjaan, saya ingin pekerjaan tersebut berkualitas.", type: "E" },
  { q: "Saya berfikir secara sistematis.", type: "E" },
  { q: "Saya bekerja dengan baik apabila semuanya terorganisir.", type: "E" },
  { q: "Saya dapat dianggap sebagai seseorang yang baik, tegas, berani dan asertif.", type: "D" },
  { q: "Saya seseorang yang mandiri.", type: "D" },
  { q: "Saya bekerja dengan baik apabila berada di lingkungan yang menyenangkan.", type: "O" },
  { q: "Saya dapat dianggap sebagai seseorang yang bersemangat, ingin tahu, terus terang dan petualang.", type: "O" },
  { q: "Orang-orang berpikir bahwa saya seseorang yang sangat akurat dengan fakta dan angka.", type: "E" },
  { q: "Teman-teman terkadang menuduh saya sebagai seseorang yang suka menunda-nunda.", type: "P" },
  { q: "Saya dapat bekerja dengan baik ketika bersama orang lain.", type: "O" },
  { q: "Orang-orang berpikir saya seseorang yang antusias.", type: "O" },
  { q: "Saya biasanya memerlukan waktu untuk menyesuaikan diri dengan perubahan.", type: "P" },
  { q: "Saya dapat melakukan yang terbaik ketika mengikuti aturan.", type: "P" },
  { q: "Saya menyukai orang-orang yang teliti.", type: "E" },
  { q: "Orang-orang berpikir saya seseorang yang perfeksionis.", type: "E" },
  { q: "Saya dapat dianggap seseorang yang patuh, teratur, dan senang melayani.", type: "P" },
  { q: "Ketika berada di bawah tekanan, saya berpendapat bahwa pendekatan logis sangat diperlukan.", type: "E" },
  { q: "Saya biasanya memerlukan dukungan (motivasi).", type: "O" },
  { q: "Saya memandang kehidupan sebagai latihan kesabaran dan toleransi.", type: "P" },
  { q: "Saya tetap tenang ketika berada di bawah tekanan.", type: "E" },
  { q: "Saya melakukan yang terbaik dalam lingkungan yang bebas.", type: "O" },
  { q: "Saya memandang kehidupan sebagai cara untuk membantu orang lain.", type: "P" },
  { q: "Saya kadang-kadang bisa sangat tepat melakukan interpretasi.", type: "E" },
  { q: "Ketika meminta orang lain melakukan sesuatu pekerjaan sebisa mungkin saya akan membantunya.", type: "P" },
  { q: "Saya dapat dianggap sebagai seseorang yang optimis, periang, menyenangkan dan antusias.", type: "O" },
  { q: "Orang lain berpikir bahwa saya seseorang yang terus terang dan to the point.", type: "D" },
  { q: "Teman-teman terkadang mengatakan bahwa saya seseorang yang banyak bicara.", type: "O" },
  { q: "Saya dapat melakukan yang terbaik ketika saya sendirian.", type: "E" },
  { q: "Kadang-kadang saya bisa menjadi orang yang sangat terus terang.", type: "D" },
  { q: "Saya puas dengan banyak hal dalam kehidupan saya.", type: "O" },
  { q: "Saya dapat dianggap sebagai seseorang yang ekspresif, senang bicara, senang berpartisipasi dan meyakinkan.", type: "O" },
  { q: "Ketika berada di bawah tekanan saya merasa tertantang dan saya sangat menyukainya.", type: "D" },
  { q: "Biasanya saya memerlukan arahan yang jelas.", type: "P" },
  { q: "Saya memandang kehidupan sebagai sebuah proses yang bertahap.", type: "E" },
  { q: "Saya menyukai orang yang setia.", type: "P" },
  { q: "Saya bangga kepada diri saya yang optimis.", type: "O" },
  { q: "Saya dapat dianggap sebagai seseorang yang baik, rendah hati, taat dan tidak egois.", type: "P" }
];

const BIRDS = {
  D: {
    name: "Eagle (Elang)",
    emoji: "🦅",
    tagline: "Pemimpin yang tegas, berorientasi hasil, dan penuh tekad.",
    strengths: [
      "Berorientasi pada tujuan & hasil",
      "Pengambil keputusan yang cepat",
      "Mandiri dan percaya diri",
      "Kompetitif & berenergi tinggi",
      "Tegas dalam menghadapi tantangan"
    ],
    weaknesses: [
      "Bisa tampak tidak sabar",
      "Cenderung mendominasi orang lain",
      "Kurang mempertimbangkan perasaan",
      "Sulit menerima kritik"
    ],
    color: "#C0392B",
    light: "#FDF0EF",
    bar: "#E24B4A",
    comm: "Langsung, to the point, dan fokus pada hasil. Hindari detail berlebihan — Eagle lebih suka kesimpulan dan tindakan konkret."
  },
  O: {
    name: "Peacock (Merak)",
    emoji: "🦚",
    tagline: "Komunikator alami, antusias, dan penuh semangat sosial.",
    strengths: [
      "Karismatik & mudah bergaul",
      "Optimis dan berpikiran positif",
      "Kreatif dan penuh ide",
      "Memotivasi orang di sekitarnya",
      "Ekspresif dan persuasif"
    ],
    weaknesses: [
      "Cenderung tidak terorganisir",
      "Mudah teralihkan perhatiannya",
      "Terlalu banyak bicara",
      "Emosional di bawah tekanan"
    ],
    color: "#0F7B72",
    light: "#EDF7F6",
    bar: "#1D9E75",
    comm: "Ekspresif, antusias, dan inspiratif. Peacock menyukai interaksi yang hangat dan penuh energi. Hindari pendekatan yang terlalu kaku atau formal."
  },
  P: {
    name: "Dove (Merpati)",
    emoji: "🕊️",
    tagline: "Pendengar yang tulus, harmonis, dan penuh kasih sayang.",
    strengths: [
      "Empatik & hangat kepada orang lain",
      "Team player yang tulus",
      "Setia dan dapat diandalkan",
      "Sabar dan konsisten",
      "Menghargai harmoni"
    ],
    weaknesses: [
      "Sulit berkata tidak",
      "Menghindari konflik",
      "Lambat beradaptasi dengan perubahan",
      "Terlalu bergantung pada persetujuan orang lain"
    ],
    color: "#1A47A1",
    light: "#EEF2FA",
    bar: "#378ADD",
    comm: "Halus, hangat, dan berorientasi pada hubungan. Dove menghargai ketulusan dan kepercayaan. Hindari nada yang terlalu agresif atau mendesak."
  },
  E: {
    name: "Owl (Burung Hantu)",
    emoji: "🦉",
    tagline: "Analis yang teliti, sistematis, dan berorientasi pada kualitas.",
    strengths: [
      "Akurat dan detail-oriented",
      "Berpikir logis & sistematis",
      "Terorganisir dan disiplin",
      "Standar kualitas tinggi",
      "Bekerja baik secara mandiri"
    ],
    weaknesses: [
      "Perfeksionis berlebihan",
      "Lambat mengambil keputusan",
      "Terlalu kritis terhadap diri sendiri",
      "Kesulitan berimprovisasi"
    ],
    color: "#6D28D9",
    light: "#F3F0FD",
    bar: "#7F77DD",
    comm: "Terstruktur, berbasis data, dan metodis. Owl menghargai fakta dan logika. Berikan informasi yang lengkap dan akurat — hindari klaim tanpa data."
  }
};

const TOTAL_QUESTIONS = 77;
