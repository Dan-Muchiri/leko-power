// src/components/Products.jsx
import React, { useState } from 'react';
import styles from './ProductsStyles.module.css';

// Comprehensive product data
const products = [
    // Inverters
    { id: 1, name: 'MUST Inverters', category: 'Inverters', image: 'https://atwinengineering.com/wp-content/uploads/2024/04/MUST-6kW-48V-Solar-Inverter-Hybrid-Low-Frequency-PV3000-VHM.jpg', description: '1-10KW Reliable and high-efficiency inverters.', price: 'Contact for pricing' },
    { id: 2, name: 'Deye Inverters', category: 'Inverters', image: 'https://image.made-in-china.com/2f0j00jcKisVUqfHYZ/Deye-Hybrid-Solar-Inverter-Sun-10K-Sg04lp3-EU-DC48V-6kw-8kw-10kw-Three-Phase-Max-16PCS-Parallel.webp', description: '1-10KW High-efficiency inverters.', price: 'Contact for pricing' },
    { id: 3, name: 'TBB Inverters', category: 'Inverters', image: 'https://image.made-in-china.com/202f0j00WVNpOQqlfsch/TBB-3000va-24V-to-230V-Inverter-3kVA-Single-Output-Hybrid-Power-Build-in-MPPT-Hybrid-Solar-Inverter.webp', description: '1-10KW Durable inverters with great performance.', price: 'Contact for pricing' },

    // Lithium Batteries
    { id: 5, name: 'Megatank Lithium Battery', category: 'Batteries', image: 'https://solarshop.co.ke/wp-content/uploads/2024/03/Megatank-5.12-KWh-51.2V-100Ah-Lithium-Battery-GL48100-Plus-in-Kenya.webp', description: '5.2KWH high-capacity lithium battery.', price: 'Contact for pricing' },
    { id: 6, name: 'Amp Nova Lithium Battery', category: 'Batteries', image: 'https://solarbatterymanufacturer.com/wp-content/uploads/2023/04/DSC2192-1.jpg', description: 'Advanced 5.2KWH lithium battery.', price: 'Contact for pricing' },

    // Dry Cell Batteries
    { id: 7, name: 'Ritah Dry Cell Battery (100AH)', category: 'Batteries', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnofCJN3HF5TO36TLeFOUF5lq9FCgfFybMNA&s', description: 'Reliable dry cell battery with 100AH capacity.', price: 'Contact for pricing' },
    { id: 8, name: 'Ritah Dry Cell Battery (200AH)', category: 'Batteries', image: 'https://skyniks.co.ke/wp-content/uploads/2022/09/200ah.png', description: 'Durable dry cell battery with 200AH capacity.', price: 'Contact for pricing' },
    { id: 9, name: 'Ritah Dry Cell Battery (260AH)', category: 'Batteries', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYaDFKOcGV0WX5ZlTjEYSn5dpaP2bMdOhHA&s', description: 'Heavy-duty dry cell battery with 260AH capacity.', price: 'Contact for pricing' },
    { id: 10, name: 'Ritah Dry Cell Battery (40AH)', category: 'Batteries', image: 'https://roomnysolar.com/wp-content/uploads/2017/11/ritar_40AH.jpg', description: 'Compact dry cell battery with 40AH capacity.', price: 'Contact for pricing' },
    { id: 11, name: 'Ritah Dry Cell Battery (80AH)', category: 'Batteries', image: 'https://www.tronik.co.ke/wp-content/uploads/2023/08/Ritar-RA12-80-12V-80Ah-AGM-VRLA-Battery-in-Kenya.jpg', description: 'High-performance dry cell battery with 80AH capacity.', price: 'Contact for pricing' },
    
    { id: 13, name: 'Goldenmax Dry Cell Battery (200AH)', category: 'Batteries', image: 'https://kreatives.co.ke/public/uploads/all/ZzYqbInkDDmJUeKLNNM12vpBAbFnopxaqMPzAO6Y.png', description: 'Robust dry cell battery with 200AH capacity.', price: 'Contact for pricing' },
    

    // Solar Panels
    { id: 17, name: 'Solar Panels', category: 'Solar Panels', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS_eaS4xgfAiwDeXb9fPguG2sLS8BQNT6di7G0JMeZMAtYeH2I6iJ1slseoE_KfCTRztUM_usxKoRVXnO29w3zuXxX9Tgixm2SpxVBTWczeyDTbzlyDMG8XDooqb_M2wDzorKVb-CHdESM&usqp=CAc', description: 'High-efficiency solar panels, priced at 26BOB per watt.', price: '26KSH Per Watt' },

    // Solar Floodlights and Street Lights
    { id: 18, name: '25W Solar Floodlight', category: 'Floodlights', image: 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/414136/1.jpg?0710', description: '25W solar-powered floodlight.', price: 'Contact for pricing' },
    { id: 19, name: '40W Solar Floodlight', category: 'Floodlights', image: 'https://pictures-kenya.jijistatic.com/7664424_40w-solar-powered-flood-light-security-flood-light-1_550x550.jpg', description: '40W solar-powered floodlight.', price: 'Contact for pricing' },
    { id: 20, name: '60W Solar Floodlight', category: 'Floodlights', image: 'https://www.mic-led.com/wp-content/uploads/2020/11/solar-flood-light5.jpg', description: '60W solar-powered floodlight.', price: 'Contact for pricing' },
    { id: 21, name: '50W Solar Floodlight', category: 'Floodlights', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZDqA9QlYdjiaxU9lkR6-DNuakbUjbiCH4A&s', description: '50W solar-powered floodlight.', price: 'Contact for pricing' },
    { id: 22, name: '100W Solar Floodlight', category: 'Floodlights', image: 'https://pictures-kenya.jijistatic.com/7661661_100w-solar-led-security-flood-light-2_466x466.jpg', description: '100W solar-powered floodlight.', price: 'Contact for pricing' },
    { id: 23, name: '200W Solar Floodlight', category: 'Floodlights', image: 'https://jilitechventures.co.ke/wp-content/uploads/2023/11/Solar-Floodlight-200W.jpg', description: '200W solar-powered floodlight.', price: 'Contact for pricing' },
    { id: 24, name: '150W Solar Floodlight', category: 'Floodlights', image: 'https://pictures-kenya.jijistatic.com/49264988_NjIwLTgwNi0yOGZlZTdmMzI2.webp', description: '150W solar-powered floodlight.', price: 'Contact for pricing' },
    { id: 25, name: '300W Solar Floodlight', category: 'Floodlights', image: 'https://nairobilights.com/cdn/shop/products/300W_Solar_Floodlight_1_8378f729-20c8-4408-9fd3-90bde4df9e79.jpg?v=1681989643', description: '300W solar-powered floodlight.', price: 'Contact for pricing' },
    { id: 26, name: '500W Solar Floodlight', category: 'Floodlights', image: 'https://pictures-kenya.jijistatic.com/46927055_NjIwLTYyMC1jM2Y2OWMzNTMy.webp', description: '500W solar-powered floodlight.', price: 'Contact for pricing' },

    // Seako Self-Priming Water Pumps
    { id: 27, name: 'Seako Self-Priming Water Pump (125W)', category: 'Water Pumps', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLuj8FppbZGd8qik0Nwjp1CFO5xRQd_5-bTA&s', description: '125W self-priming water pump.', price: 'Contact for pricing' },
    { id: 28, name: 'Seako Self-Priming Water Pump (250W)', category: 'Water Pumps', image: 'https://i.ebayimg.com/images/g/Kp0AAOSwR9FihLIT/s-l1200.jpg', description: '250W self-priming water pump.', price: 'Contact for pricing' },
    { id: 29, name: 'Seako Self-Priming Water Pump (750W)', category: 'Water Pumps', image: 'https://i.ebayimg.com/images/g/4yoAAOSwyhJj7~kY/s-l400.jpg', description: '750W self-priming water pump.', price: 'Contact for pricing' },

    // MC4 Connectors
    { id: 30, name: 'MC4 Connector (Singles)', category: 'MC4 Connectors', image: 'https://shop.thesunpays.co.za/cdn/shop/products/mc4-connector-500x500_800x.jpg?v=1559902879', description: 'MC4 connector single.', price: 'Contact for pricing' },
    { id: 31, name: 'MC4 Connector (4-Way)', category: 'MC4 Connectors', image: 'https://www.xyz.co.za/ProdImg/Big_wspvy4-2-.jpg', description: 'MC4 connector 4-way.', price: 'Contact for pricing' },
    { id: 32, name: 'MC4 Connector (3-Way)', category: 'MC4 Connectors', image: 'https://www.access12voltwarehouse.com.au/cdn/shop/products/solar_mc4_3_way_male_to_female_branch_connector_1.jpg?v=1649140606', description: 'MC4 connector 3-way.', price: 'Contact for pricing' },
    { id: 33, name: 'MC4 Connector (2-Way)', category: 'MC4 Connectors', image: 'https://solarshop.co.ke/wp-content/uploads/2024/03/2-branch.jpg', description: 'MC4 connector 2-way.', price: 'Contact for pricing' },
    { id: 34, name: 'MC4 Connector (6-Way)', category: 'MC4 Connectors', image: 'https://www.bougerv.com/cdn/shop/files/ISE156.png?v=1715681036', description: 'MC4 connector 6-way.', price: 'Contact for pricing' },

    // Aluminum Rails
    { id: 35, name: 'Aluminum Rail with Foot Clamps', category: 'Aluminum Rails', image: 'path-to-image', description: 'Aluminum rail with foot clamps.', price: 'Contact for pricing' },
    { id: 36, name: 'Aluminum Rail with End Clamps', category: 'Aluminum Rails', image: 'path-to-image', description: 'Aluminum rail with end clamps.', price: 'Contact for pricing' },
    { id: 37, name: 'Aluminum Rail with Mid Clamps', category: 'Aluminum Rails', image: 'path-to-image', description: 'Aluminum rail with mid clamps.', price: 'Contact for pricing' },

    // PV Cables
    { id: 38, name: 'PV Cable (4MM)', category: 'PV Cables', image: 'https://ecodeshpowersolutions.co.ke/wp-content/uploads/2021/03/Ecodesh-Product-5.jpg', description: '4MM PV cable.', price: 'Contact for pricing' },
    { id: 39, name: 'PV Cable (6MM)', category: 'PV Cables', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ZR1WXjloBXxFmW5zSxp6KqRVwRFRhBhkfQ&s', description: '6MM PV cable.', price: 'Contact for pricing' },

    // DC Breakers
    { id: 40, name: 'DC Breaker (20A)', category: 'DC Breakers', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSt-ZB1z3uGAxOc33uN-9fvTpiUlxs22fTSA&s', description: '20A DC breaker.', price: 'Contact for pricing' },
    { id: 41, name: 'DC Breaker (32A)', category: 'DC Breakers', image: 'https://radiantsolarshop.co.ke/wp-content/uploads/2024/07/Untitled-design.png', description: '32A DC breaker.', price: 'Contact for pricing' },
    { id: 42, name: 'DC Breaker (63A)', category: 'DC Breakers', image: 'https://www.hiteksolar.co.nz/cdn/shop/products/DC_Breakers_21997a43-d60d-481d-8b92-dcd4afba546f.jpeg?v=1571438791', description: '63A DC breaker.', price: 'Contact for pricing' },

    // Surge Protectors
    { id: 43, name: 'Surge Protector', category: 'Surge Protectors', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcCIAsfzoi-Edr7DIjiv1sqaZxJ1-wImoemA&s', description: 'Surge protector for electrical safety.', price: 'Contact for pricing' },

    // Battery Cables
    { id: 44, name: 'Battery Cable (25MM)', category: 'Battery Cables', image: 'https://perecon.co.ke/wp-content/uploads/2024/06/25mm-Battery-Cable.jpeg', description: '25MM battery cable.', price: 'Contact for pricing' },
    { id: 45, name: 'Battery Cable (35MM)', category: 'Battery Cables', image: 'https://www.sonopsolar.co.za/wp-content/uploads/2017/07/Battery-Cable-W.png', description: '35MM battery cable.', price: 'Contact for pricing' },
    { id: 46, name: 'Battery Cable (50MM)', category: 'Battery Cables', image: 'https://perecon.co.ke/wp-content/uploads/2024/06/50mm-Battery-Cable.jpeg', description: '50MM battery cable.', price: 'Contact for pricing' },

    // Cable Lugs
    { id: 47, name: 'Cable Lug (25MM)', category: 'Cable Lugs', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQ4YvuwJtlJ61OFkFb4kR-e0SpxoL98KiWw&s', description: '25MM cable lug.', price: 'Contact for pricing' },
    { id: 48, name: 'Cable Lug (35MM)', category: 'Cable Lugs', image: 'https://d1nmsnm7jsf6f9.cloudfront.net/wp-content/uploads/2013/08/13140150/p_7_3_8_738-thickbox_default-35mm-copper-cable-lug.jpg', description: '35MM cable lug.', price: 'Contact for pricing' },
    { id: 49, name: 'Cable Lug (50MM)', category: 'Cable Lugs', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZL6ydowUOZFj1qBpCqJ94w71t8vh4UT2S8Q&s', description: '50MM cable lug.', price: 'Contact for pricing' },

    // Consumers
    { id: 50, name: 'Consumer (2-Way)', category: 'Consumers', image: 'https://www.tronic.co.ke/cdn/shop/products/CU-ABS6_22fad638-36a6-4d52-8765-3f3db77deec4_grande.jpg?v=1678690811', description: '2-way consumer.', price: 'Contact for pricing' },
    { id: 51, name: 'Consumer (4-Way)', category: 'Consumers', image: 'https://www.tronic.co.ke/cdn/shop/products/DB-HA06-Vertical.jpg?v=1667375336', description: '4-way consumer.', price: 'Contact for pricing' },
    { id: 52, name: 'Consumer (6-Way)', category: 'Consumers', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyby5CbAYJ22bl9UXwBpfcV_iRN3Ys0rhMSQ&s', description: '6-way consumer.', price: 'Contact for pricing' },

    // AVS
    { id: 53, name: 'AVS (30A)', category: 'AVS', image: 'https://www.sollatek.com/wp-content/uploads/2014/06/AVS30-no-uk-text.png', description: '30A Automatic Voltage Switch (AVS).', price: 'Contact for pricing' },

    // Changeovers
    { id: 54, name: 'Change Over (40A)', category: 'Change Overs', image: 'https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/82/537985/1.jpg?1334', description: '40A change over switch.', price: 'Contact for pricing' },
    { id: 55, name: 'Change Over (63A)', category: 'Change Overs', image: 'https://www.tronic.co.ke/cdn/shop/products/CO-KTKO-32_06b44856-66d7-4c73-ba4b-3743c0b69af8.jpg?v=1667471259', description: '63A change over switch.', price: 'Contact for pricing' },

    // Battery Cages
    { id: 56, name: 'Battery Cage (2-Way)', category: 'Battery Cages', image: 'path-to-image', description: '2-way battery cage.', price: 'Contact for pricing' },
    { id: 57, name: 'Battery Cage (4-Way)', category: 'Battery Cages', image: 'path-to-image', description: '4-way battery cage.', price: 'Contact for pricing' },
    { id: 58, name: 'Battery Cage (6-Way)', category: 'Battery Cages', image: 'path-to-image', description: '6-way battery cage.', price: 'Contact for pricing' },
    { id: 59, name: 'Battery Cage (8-Way)', category: 'Battery Cages', image: 'path-to-image', description: '8-way battery cage.', price: 'Contact for pricing'},

    // AC Cables
    { id: 60, name: 'AC Cable (4MM)', category: 'AC Cables', image: 'https://5.imimg.com/data5/NC/AU/NZ/SELLER-14958750/ac-and-dc-cables-and-wires-500x500.jpg', description: '4MM AC cable.', price: 'Contact for pricing' },
    { id: 61, name: 'AC Cable (6MM)', category: 'AC Cables', image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/UF/PT/XZ/43697679/2-core-cable-500x500.jpg', description: '6MM AC cable.', price: 'Contact for pricing' },

    // MCBs
    { id: 62, name: 'MCB (16A)', category: 'MCBs', image: 'https://www.tronic.co.ke/cdn/shop/files/TRONICKENYAWHITE_7.png?v=1695121207', description: '16A Miniature Circuit Breaker (MCB).', price: 'Contact for pricing' },
    { id: 63, name: 'MCB (32A)', category: 'MCBs', image: 'https://www.tronic.co.ke/cdn/shop/files/TRONICKENYAWHITE_9.png?v=1695121338', description: '32A Miniature Circuit Breaker (MCB).', price: 'Contact for pricing' },

    // Solar Water Heaters
    { id: 64, name: 'Solar Water Heater (Flat Plate 200L)', category: 'Solar Water Heaters', image: 'https://5.imimg.com/data5/LR/DQ/MY-38611518/domestic-flat-plate-solar-water-heater-500x500.jpg', description: '200L flat plate solar water heater.', price: 'Contact for pricing' },
    { id: 65, name: 'Solar Water Heater (Flat Plate 300L)', category: 'Solar Water Heaters', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7iSwvEdoKLSKuzDNuKemonGF8CSucD8ZTJVgf3R55YrXr4MfdjQDHhoGXUBtcN5Q338&usqp=CAU', description: '300L flat plate solar water heater.', price: 'Contact for pricing' },
    { id: 66, name: 'Solar Water Heater (Flat Plate 150L)', category: 'Solar Water Heaters', image: 'https://image.made-in-china.com/2f0j00joZrsSOtGlbd/150L-Flat-Plate-Solar-Collector-Solar-Water-Heater-Base-Sale-for-Pitched-and-Flat-Roof.webp', description: '150L flat plate solar water heater.', price: 'Contact for pricing' },
    { id: 67, name: 'Solar Water Heater (Tubed 200L)', category: 'Solar Water Heaters', image: 'https://solarstore.co.ke/wp-content/uploads/2021/05/pressurized-solar-water-heaters-in-kenya.jpg', description: '200L tubed solar water heater.', price: 'Contact for pricing' },
    { id: 68, name: 'Solar Water Heater (Tubed 300L)', category: 'Solar Water Heaters', image: 'https://5.imimg.com/data5/GQ/DW/JJ/SELLER-67680688/solar-water-heater-jpg-500x500.jpg', description: '300L tubed solar water heater.', price: 'Contact for pricing' },
    { id: 69, name: 'Solar Water Heater (Tubed 150L)', category: 'Solar Water Heaters', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDw4dmSZomCho65nkq8Zed9KkmgVa0Xm2QWe1B62-RRq4sCti6wfFZ1ECtpt1G9KCKfE&usqp=CAU', description: '150L tubed solar water heater.', price: 'Contact for pricing' },

    // Heating Elements
    { id: 70, name: 'Heating Element (1" 1500W)', category: 'Heating Elements', image: 'https://solarshop.co.ke/wp-content/uploads/2024/05/Screwed-Heater-Element-1.5Kw-1.25-without-thermostat.png', description: '1” 1500W heating element.', price: 'Contact for pricing' },

    // TP Valve
    { id: 71, name: 'TP Valve for Solar Water Heaters', category: 'TP Valves', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_djpVN8AXFMROE_oOg--gendBszzvqR5WZBsQ6miNNL8OwP1btsGhW9JtQvVO0whVMw&usqp=CAU', description: 'Thermal protection valve for solar water heaters.', price: 'Contact for pricing' },

    // Magnesium Rod
    { id: 72, name: 'Magnesium Rod for Solar Water Heaters', category: 'Magnesium Rods', image: 'https://image.made-in-china.com/201f0j00lqpVEdsSAofk/Sunseeker-Solar-Water-Heater-Accessories-Mag-Bar-for-Non-Pressure-Solar-Water-Heater.webp', description: 'Magnesium rod for solar water heaters.', price: 'Contact for pricing' },

    // Evacuated Tubes
    { id: 73, name: 'Evacuated Tubes for Water Heaters', category: 'Evacuated Tubes', image: 'https://mybigorder.com/public/uploads/products/thumbnail/WK1aaZ7CreWLuATbyEdPQFmGSPnbmQUQ6xZgPXOQ.jpeg', description: 'Evacuated tubes for solar water heaters.', price: 'Contact for pricing' },
];

const categories = [
    'All',
    'Inverters',
    'Batteries',
    'Solar Panels',
    'Floodlights',
    'Water Pumps',
    'MC4 Connectors',
    'Aluminum Rails',
    'PV Cables',
    'DC Breakers',
    'Surge Protectors',
    'Battery Cables',
    'Cable Lugs',
    'Consumers',
    'AVS',
    'Change Overs',
    'Battery Cages',
    'AC Cables',
    'MCBs',
    'Solar Water Heaters',
    'Heating Elements',
    'TP Valves',
    'Magnesium Rods',
    'Evacuated Tubes'
];

// WhatsApp number for contact
const whatsappNumber = '+254706318757'; // Replace with your WhatsApp number

function Products() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Filter products based on selected category and search query
    const filteredProducts = products
        .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
        .filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <section className={styles.productPage}>
            <h1 className={styles.pageTitle}>Our Products</h1>
            <div className={styles.filterSection}>
                <h2 className={styles.filterTitle}>Filter by Category</h2>
                <div className={styles.filterContainer}>
                    <select
                        className={styles.filterSelect}
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className={styles.productList}>
                {filteredProducts.map(product => (
                    <div key={product.id} className={styles.productItem}>
                        <img src={product.image} alt={product.name} className={styles.productImage} />
                        <h2 className={styles.productName}>{product.name}</h2>
                        <p className={styles.productDescription}>{product.description}</p>
                        <p className={styles.productPrice}>{product.price}</p>
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}.`}
                            className={styles.purchaseButton}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Purchase
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Products;
