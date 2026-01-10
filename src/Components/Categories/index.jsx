// import React from 'react';

// import dressesImg from '../../assets/categories/dress.png';
// import topsImg from '../../assets/categories/top.webp';
// import sareesImg from '../../assets/categories/saree.png';
// import salwarImg from '../../assets/categories/salvar-kameez.webp';
// import lehengasImg from '../../assets/categories/lehenga.png';
// import skirtsImg from '../../assets/categories/skirt.png';
// import blousesImg from '../../assets/categories/blouse.webp';
// import kurtisImg from '../../assets/categories/kurti.png';
// import jacketsImg from '../../assets/categories/jackets.png';
// import { Link, useNavigate } from 'react-router-dom';

// const subCategories = {
//     "Women's Wear": [
//         'Dresses',
//         'Tops',
//         'Sarees',
//         'Salwar Kameez',
//         'Lehengas',
//         'Skirts',
//         'Blouses',
//         'Kurtis',
//         'Jackets',
//     ],
// };

// const imageMap = {
//     Dresses: dressesImg,
//     Tops: topsImg,
//     Sarees: sareesImg,
//     'Salwar Kameez': salwarImg,
//     Lehengas: lehengasImg,
//     Skirts: skirtsImg,
//     Blouses: blousesImg,
//     Kurtis: kurtisImg,
//     Jackets: jacketsImg,
// };



// const CategoryGrid = ({ title, items }) => (
//     <div className="mb-12">
//         {/* <h3 className="text-2xl font-semibold mb-6">{title}</h3> */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//             {items.map((item, index) => (
//                 <Link to={`/productListing?subCategory=${item}`}>
//                     <div
//                         key={index}
//                         data-aos="flip-left"
//                         data-aos-delay={index * 100} // stagger animation
//                         className="flex flex-col items-center text-center transition-transform hover:scale-105 group"
//                     >
//                         <div className="w-28 h-28 sm:w-32 sm:h-32 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center relative shine-container">
//                             <img
//                                 src={imageMap[item]}
//                                 alt={item}
//                                 className="w-full h-full object-cover group-hover:shine"
//                             />
//                             <div className="shine-effect" />
//                         </div>
//                         <p className="mt-2 text-sm font-medium">{item}</p>
//                     </div>
//                 </Link>
//             ))}
//         </div>
//     </div>
// );

// const Categories = () => {
//     const navigate = useNavigate()
//     return (
//         <div className="container mx-auto px-4 py-12">
//             <h2 className="text-3xl font-bold text-center mb-12">HOT CATEGORIES</h2>
//             {Object.entries(subCategories).map(([title, items], idx) => (
//                 <CategoryGrid key={idx} title={title} items={items} />
//             ))}
//         </div>
//     );
// };

// export default Categories;
