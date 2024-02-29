const products = [
  {
    id: 1,
    title: "Guitarra Gracia M7",
    price: 140000,
    description: "Guitarra criolla de estudio",
    img: "https://res.cloudinary.com/dx4kaqyx0/image/upload/v1707134951/React_Project/Gracia_M7/M7-frente_bsubfx.jpg",
    stock: 10,
    category: "Guitarras",
  },
  {
    id: 2,
    title: "Guitarra Gracia M10",
    price: 210000,
    description: "Guitarra criolla semiprofesional con EQ Fishman",
    img: "https://res.cloudinary.com/dx4kaqyx0/image/upload/v1708079287/React_Project/M10/M10-Granada-Fishman-Entera_bxkbuu.jpg",
    stock: 7,
    category: "Guitarras",
  },
  {
    id: 3,
    title: "Guitarra La Alpujarra 300K",
    price: 750000,
    description:
      "Guitarra de Construcción Artesanal con corte y caja Angosta. Excelente Sonoridad y Fina Construcción.",
    img: "https://res.cloudinary.com/dx4kaqyx0/image/upload/v1708079287/React_Project/M10/M10-Granada-Fishman-Entera_bxkbuu.jpg",
    stock: 5,
    category: "Guitarras",
  },
  {
    id: 4,
    title: "Guitarra La Alpujarra M90",
    price: 680000,
    description:
      "Guitarra de Concierto. Construcción Artesanal. Excelente Sonoridad y Finísima Terminación.",
    img: "https://res.cloudinary.com/dx4kaqyx0/image/upload/v1708080105/React_Project/M90/Guitarra-La-Alpujarra-90-90PSY-frente_geiwfc.jpg",
    stock: 6,
    category: "Guitarras",
  },
  {
    id: 5,
    title: "Guitarra Fonseca 41K",
    price: 750000,
    description: "Guitarra de Estudio con Corte (Cutaway) y Media Caja",
    img: "https://res.cloudinary.com/dx4kaqyx0/image/upload/v1708080338/React_Project/41K/Guitarra-Fonseca-41K-41KEC-frente_vp47np.jpg",
    stock: 12,
    category: "Guitarras",
  },
  {
    id: 6,
    title: "YAMAHA P45B",
    price: 920000,
    description: "Piano Electrico 88 teclas pesadas",
    img: "https://res.cloudinary.com/dx4kaqyx0/image/upload/v1708080490/React_Project/Yamaha_P45/1908141258252045_03_large_lcixhd.jpg",
    stock: 4,
    category: "Teclados",
  },
  {
    id: 7,
    title: "CASIO AP-270",
    price: 1500000,
    description:
      "Piano electrico 88 teclas Acc. Martillo. 22 sonidos, 192 Polif",
    img: "https://res.cloudinary.com/dx4kaqyx0/image/upload/v1708081063/React_Project/Casio_AP270/2008011152347894_01_xlarge_ahbhtf.jpg",
    stock: 7,
    category: "Teclados",
  },
  {
    id: 8,
    title: "CASIO CT-S300",
    price: 275000,
    description:
      "Teclado Electrónico. 61 teclas standard sensitivas. 400 sonidos. Diseño portatil y elegante",
    img: "https://res.cloudinary.com/dx4kaqyx0/image/upload/v1708081412/React_Project/CASIO_CTs300/1912161039478928_05_large_tgvi8p.jpg",
    stock: 3,
    category: "Teclados",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id == id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 500);
    } else {
      reject("No se encontraron productos");
    }
  });
};
