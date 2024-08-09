// src/components/Products.jsx
import React, { useState } from 'react';
import styles from './ProductsStyles.module.css';

// Comprehensive product data
const products = [
    // Inverters
    { id: 1, name: 'MUST Inverter', category: 'Inverters', image: 'https://atwinengineering.com/wp-content/uploads/2024/04/MUST-6kW-48V-Solar-Inverter-Hybrid-Low-Frequency-PV3000-VHM.jpg', description: 'Reliable and high-efficiency inverter.', price: 'Contact for pricing' },
    { id: 2, name: 'Daye Inverter', category: 'Inverters', image: 'path-to-image', description: 'High-efficiency inverter.', price: 'Contact for pricing' },
    { id: 3, name: 'TBB Inverter', category: 'Inverters', image: 'path-to-image', description: 'Durable inverter with great performance.', price: 'Contact for pricing' },
    { id: 4, name: 'SIZE Inverter (1-10KW)', category: 'Inverters', image: 'path-to-image', description: 'Adjustable inverter with a range from 1KW to 10KW.', price: 'Contact for pricing' },

    // Lithium Batteries
    { id: 5, name: 'Megatank Lithium Battery', category: 'Batteries', image: 'path-to-image', description: '5.2KWH high-capacity lithium battery.', price: 'Contact for pricing' },
    { id: 6, name: 'Amp Nova Lithium Battery', category: 'Batteries', image: 'path-to-image', description: 'Advanced 5.2KWH lithium battery.', price: 'Contact for pricing' },

    // Dry Cell Batteries
    { id: 7, name: 'Ritah Dry Cell Battery (100AH)', category: 'Batteries', image: 'path-to-image', description: 'Reliable dry cell battery with 100AH capacity.', price: 'Contact for pricing' },
    { id: 8, name: 'Ritah Dry Cell Battery (200AH)', category: 'Batteries', image: 'path-to-image', description: 'Durable dry cell battery with 200AH capacity.', price: 'Contact for pricing' },
    { id: 9, name: 'Ritah Dry Cell Battery (260AH)', category: 'Batteries', image: 'path-to-image', description: 'Heavy-duty dry cell battery with 260AH capacity.', price: 'Contact for pricing' },
    { id: 10, name: 'Ritah Dry Cell Battery (40AH)', category: 'Batteries', image: 'path-to-image', description: 'Compact dry cell battery with 40AH capacity.', price: 'Contact for pricing' },
    { id: 11, name: 'Ritah Dry Cell Battery (80AH)', category: 'Batteries', image: 'path-to-image', description: 'High-performance dry cell battery with 80AH capacity.', price: 'Contact for pricing' },
    { id: 12, name: 'Goldenmax Dry Cell Battery (100AH)', category: 'Batteries', image: 'path-to-image', description: 'High-quality dry cell battery with 100AH capacity.', price: 'Contact for pricing' },
    { id: 13, name: 'Goldenmax Dry Cell Battery (200AH)', category: 'Batteries', image: 'path-to-image', description: 'Robust dry cell battery with 200AH capacity.', price: 'Contact for pricing' },
    { id: 14, name: 'Goldenmax Dry Cell Battery (260AH)', category: 'Batteries', image: 'path-to-image', description: 'Heavy-duty dry cell battery with 260AH capacity.', price: 'Contact for pricing' },
    { id: 15, name: 'Goldenmax Dry Cell Battery (40AH)', category: 'Batteries', image: 'path-to-image', description: 'Reliable dry cell battery with 40AH capacity.', price: 'Contact for pricing' },
    { id: 16, name: 'Goldenmax Dry Cell Battery (80AH)', category: 'Batteries', image: 'path-to-image', description: 'Durable dry cell battery with 80AH capacity.', price: 'Contact for pricing' },

    // Solar Panels
    { id: 17, name: 'Solar Panels', category: 'Solar Panels', image: 'path-to-image', description: 'High-efficiency solar panels, priced at 26BOB per watt.', price: 'Contact for pricing' },

    // Solar Floodlights and Street Lights
    { id: 18, name: '25W Solar Floodlight', category: 'Floodlights', image: 'path-to-image', description: '25W solar-powered floodlight.', price: 'Contact for pricing' },
    { id: 19, name: '40W Solar Floodlight', category: 'Floodlights', image: 'path-to-image', description: '40W solar-powered floodlight.', price: 'Contact for pricing' },
    { id: 20, name: '60W Solar Floodlight', category: 'Floodlights', image: 'path-to-image', description: '60W solar-powered floodlight.', price: 'Contact for pricing' },
    { id: 21, name: '50W Solar Floodlight', category: 'Floodlights', image: 'path-to-image', description: '50W solar-powered floodlight.', price: 'Contact for pricing' },
    { id: 22, name: '100W Solar Floodlight', category: 'Floodlights', image: 'path-to-image', description: '100W solar-powered floodlight.', price: 'Contact for pricing' },
    { id: 23, name: '200W Solar Floodlight', category: 'Floodlights', image: 'path-to-image', description: '200W solar-powered floodlight.', price: 'Contact for pricing' },
    { id: 24, name: '150W Solar Floodlight', category: 'Floodlights', image: 'path-to-image', description: '150W solar-powered floodlight.', price: 'Contact for pricing' },
    { id: 25, name: '300W Solar Floodlight', category: 'Floodlights', image: 'path-to-image', description: '300W solar-powered floodlight.', price: 'Contact for pricing' },
    { id: 26, name: '500W Solar Floodlight', category: 'Floodlights', image: 'path-to-image', description: '500W solar-powered floodlight.', price: 'Contact for pricing' },

    // Seako Self-Priming Water Pumps
    { id: 27, name: 'Seako Self-Priming Water Pump (125W)', category: 'Water Pumps', image: 'path-to-image', description: '125W self-priming water pump.', price: 'Contact for pricing' },
    { id: 28, name: 'Seako Self-Priming Water Pump (250W)', category: 'Water Pumps', image: 'path-to-image', description: '250W self-priming water pump.', price: 'Contact for pricing' },
    { id: 29, name: 'Seako Self-Priming Water Pump (750W)', category: 'Water Pumps', image: 'path-to-image', description: '750W self-priming water pump.', price: 'Contact for pricing' },

    // MC4 Connectors
    { id: 30, name: 'MC4 Connector (Singles)', category: 'MC4 Connectors', image: 'path-to-image', description: 'MC4 connector single.', price: 'Contact for pricing' },
    { id: 31, name: 'MC4 Connector (4-Way)', category: 'MC4 Connectors', image: 'path-to-image', description: 'MC4 connector 4-way.', price: 'Contact for pricing' },
    { id: 32, name: 'MC4 Connector (3-Way)', category: 'MC4 Connectors', image: 'path-to-image', description: 'MC4 connector 3-way.', price: 'Contact for pricing' },
    { id: 33, name: 'MC4 Connector (2-Way)', category: 'MC4 Connectors', image: 'path-to-image', description: 'MC4 connector 2-way.', price: 'Contact for pricing' },
    { id: 34, name: 'MC4 Connector (6-Way)', category: 'MC4 Connectors', image: 'path-to-image', description: 'MC4 connector 6-way.', price: 'Contact for pricing' },

    // Aluminum Rails
    { id: 35, name: 'Aluminum Rail with Foot Clamps', category: 'Aluminum Rails', image: 'path-to-image', description: 'Aluminum rail with foot clamps.', price: 'Contact for pricing' },
    { id: 36, name: 'Aluminum Rail with End Clamps', category: 'Aluminum Rails', image: 'path-to-image', description: 'Aluminum rail with end clamps.', price: 'Contact for pricing' },
    { id: 37, name: 'Aluminum Rail with Mid Clamps', category: 'Aluminum Rails', image: 'path-to-image', description: 'Aluminum rail with mid clamps.', price: 'Contact for pricing' },

    // PV Cables
    { id: 38, name: 'PV Cable (4MM)', category: 'PV Cables', image: 'path-to-image', description: '4MM PV cable.', price: 'Contact for pricing' },
    { id: 39, name: 'PV Cable (6MM)', category: 'PV Cables', image: 'path-to-image', description: '6MM PV cable.', price: 'Contact for pricing' },

    // DC Breakers
    { id: 40, name: 'DC Breaker (20A)', category: 'DC Breakers', image: 'path-to-image', description: '20A DC breaker.', price: 'Contact for pricing' },
    { id: 41, name: 'DC Breaker (32A)', category: 'DC Breakers', image: 'path-to-image', description: '32A DC breaker.', price: 'Contact for pricing' },
    { id: 42, name: 'DC Breaker (63A)', category: 'DC Breakers', image: 'path-to-image', description: '63A DC breaker.', price: 'Contact for pricing' },

    // Surge Protectors
    { id: 43, name: 'Surge Protector', category: 'Surge Protectors', image: 'path-to-image', description: 'Surge protector for electrical safety.', price: 'Contact for pricing' },

    // Battery Cables
    { id: 44, name: 'Battery Cable (25MM)', category: 'Battery Cables', image: 'path-to-image', description: '25MM battery cable.', price: 'Contact for pricing' },
    { id: 45, name: 'Battery Cable (35MM)', category: 'Battery Cables', image: 'path-to-image', description: '35MM battery cable.', price: 'Contact for pricing' },
    { id: 46, name: 'Battery Cable (50MM)', category: 'Battery Cables', image: 'path-to-image', description: '50MM battery cable.', price: 'Contact for pricing' },

    // Cable Lugs
    { id: 47, name: 'Cable Lug (25MM)', category: 'Cable Lugs', image: 'path-to-image', description: '25MM cable lug.', price: 'Contact for pricing' },
    { id: 48, name: 'Cable Lug (35MM)', category: 'Cable Lugs', image: 'path-to-image', description: '35MM cable lug.', price: 'Contact for pricing' },
    { id: 49, name: 'Cable Lug (50MM)', category: 'Cable Lugs', image: 'path-to-image', description: '50MM cable lug.', price: 'Contact for pricing' },

    // Consumers
    { id: 50, name: 'Consumer (2-Way)', category: 'Consumers', image: 'path-to-image', description: '2-way consumer.', price: 'Contact for pricing' },
    { id: 51, name: 'Consumer (4-Way)', category: 'Consumers', image: 'path-to-image', description: '4-way consumer.', price: 'Contact for pricing' },
    { id: 52, name: 'Consumer (6-Way)', category: 'Consumers', image: 'path-to-image', description: '6-way consumer.', price: 'Contact for pricing' },

    // AVS
    { id: 53, name: 'AVS (30A)', category: 'AVS', image: 'path-to-image', description: '30A Automatic Voltage Switch (AVS).', price: 'Contact for pricing' },

    // Changeovers
    { id: 54, name: 'Change Over (40A)', category: 'Change Overs', image: 'path-to-image', description: '40A change over switch.', price: 'Contact for pricing' },
    { id: 55, name: 'Change Over (63A)', category: 'Change Overs', image: 'path-to-image', description: '63A change over switch.', price: 'Contact for pricing' },

    // Battery Cages
    { id: 56, name: 'Battery Cage (2-Way)', category: 'Battery Cages', image: 'path-to-image', description: '2-way battery cage.', price: 'Contact for pricing' },
    { id: 57, name: 'Battery Cage (4-Way)', category: 'Battery Cages', image: 'path-to-image', description: '4-way battery cage.', price: 'Contact for pricing' },
    { id: 58, name: 'Battery Cage (6-Way)', category: 'Battery Cages', image: 'path-to-image', description: '6-way battery cage.', price: 'Contact for pricing' },
    { id: 59, name: 'Battery Cage (8-Way)', category: 'Battery Cages', image: 'path-to-image', description: '8-way battery cage.', price: 'Contact for pricing'},

    // AC Cables
    { id: 60, name: 'AC Cable (4MM)', category: 'AC Cables', image: 'path-to-image', description: '4MM AC cable.', price: 'Contact for pricing' },
    { id: 61, name: 'AC Cable (6MM)', category: 'AC Cables', image: 'path-to-image', description: '6MM AC cable.', price: 'Contact for pricing' },

    // MCBs
    { id: 62, name: 'MCB (16A)', category: 'MCBs', image: 'path-to-image', description: '16A Miniature Circuit Breaker (MCB).', price: 'Contact for pricing' },
    { id: 63, name: 'MCB (32A)', category: 'MCBs', image: 'path-to-image', description: '32A Miniature Circuit Breaker (MCB).', price: 'Contact for pricing' },

    // Solar Water Heaters
    { id: 64, name: 'Solar Water Heater (Flat Plate 200L)', category: 'Solar Water Heaters', image: 'path-to-image', description: '200L flat plate solar water heater.', price: 'Contact for pricing' },
    { id: 65, name: 'Solar Water Heater (Flat Plate 300L)', category: 'Solar Water Heaters', image: 'path-to-image', description: '300L flat plate solar water heater.', price: 'Contact for pricing' },
    { id: 66, name: 'Solar Water Heater (Flat Plate 150L)', category: 'Solar Water Heaters', image: 'path-to-image', description: '150L flat plate solar water heater.', price: 'Contact for pricing' },
    { id: 67, name: 'Solar Water Heater (Tubed 200L)', category: 'Solar Water Heaters', image: 'path-to-image', description: '200L tubed solar water heater.', price: 'Contact for pricing' },
    { id: 68, name: 'Solar Water Heater (Tubed 300L)', category: 'Solar Water Heaters', image: 'path-to-image', description: '300L tubed solar water heater.', price: 'Contact for pricing' },
    { id: 69, name: 'Solar Water Heater (Tubed 150L)', category: 'Solar Water Heaters', image: 'path-to-image', description: '150L tubed solar water heater.', price: 'Contact for pricing' },

    // Heating Elements
    { id: 70, name: 'Heating Element (1" 1500W)', category: 'Heating Elements', image: 'path-to-image', description: '1” 1500W heating element.', price: 'Contact for pricing' },

    // TP Valve
    { id: 71, name: 'TP Valve for Solar Water Heaters', category: 'TP Valves', image: 'path-to-image', description: 'Thermal protection valve for solar water heaters.', price: 'Contact for pricing' },

    // Magnesium Rod
    { id: 72, name: 'Magnesium Rod for Solar Water Heaters', category: 'Magnesium Rods', image: 'path-to-image', description: 'Magnesium rod for solar water heaters.', price: 'Contact for pricing' },

    // Evacuated Tubes
    { id: 73, name: 'Evacuated Tubes for Water Heaters', category: 'Evacuated Tubes', image: 'path-to-image', description: 'Evacuated tubes for solar water heaters.', price: 'Contact for pricing' },
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
