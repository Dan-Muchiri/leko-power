// src/components/Products.jsx
import React, { useState , useEffect } from 'react';
import styles from './ProductsStyles.module.css';

// Comprehensive product data
const products = [
    // Batteries
    {
        id: 1,
        name: "SRNE Lithium Battery with Display",
        category: "Batteries",
        price: 170000,
        description: "5.12kWh, 100AH, 51.2V, with display, 20 years lifetime, 47kg",
        image: null
    },
    {
        id: 2,
        name: "SRNE Lithium Battery without Display",
        category: "Batteries",
        price: 160000,
        description: "5.12kWh, 100AH, 51.2V, without display, 20 years lifetime, 47kg",
        image: null
    },
    {
        id: 3,
        name: "SRNE Lithium Battery",
        category: "Batteries",
        price: 310000,
        description: "10.24kWh, 200AH, 51.2V, 20 years lifetime, 88kg",
        image: null
    },
    {
        id: 4,
        name: "Megatank Lithium Battery All-in-One",
        category: "Batteries",
        price: 535000,
        description: "6KVA hybrid inverter, 10kWh lithium battery",
        image: "src/assets/products/megatank-all-in-one.jpeg"
    },
    {
        id: 5,
        name: "Megatank GL Lithium Battery",
        category: "Batteries",
        price: 180000,
        description: "5.12kWh, 100AH, 51.2V",
        image: null
    },
    {
        id: 6,
        name: "Megatank Lithium Battery 24V",
        category: "Batteries",
        price: 50000,
        description: "75AH/1920Wh, 24V",
        image: null
    },
    {
        id: 7,
        name: "Megatank Lithium Battery 12V",
        category: "Batteries",
        price: 30000,
        description: "75AH/960Wh, 12V",
        image: null
    },
    {
        id: 8,
        name: "Luminous Tall Tubular Battery",
        category: "Batteries",
        price: 38000,
        description: "200AH, 12V",
        image: null
    },
    {
        id: 9,
        name: "Ritar Battery 40AH",
        category: "Batteries",
        price: 10000,
        description: "40AH, 12V",
        image: null
    },
    {
        id: 10,
        name: "Ritar Battery 55AH",
        category: "Batteries",
        price: 13000,
        description: "55AH, 12V",
        image: null
    },
    {
        id: 11,
        name: "Ritar Battery 80AH",
        category: "Batteries",
        price: 16000,
        description: "80AH, 12V",
        image: null
    },
    {
        id: 12,
        name: "Ritar Battery 100AH",
        category: "Batteries",
        price: 20000,
        description: "100AH, 12V",
        image: null
    },
    {
        id: 13,
        name: "Ritar Battery 200AH",
        category: "Batteries",
        price: 38000,
        description: "200AH, 12V",
        image: null
    },
    {
        id: 14,
        name: "Ritar Battery 260AH",
        category: "Batteries",
        price: 48000,
        description: "260AH, 12V",
        image: null
    },
    /// Hybrid Inverters
    {
        id: 15,
        name: "SRNE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 45000,
        description: "3.3KVA, 24V, 80A, 450VDC (2 years warranty)",
        image: null
    },
    {
        id: 16,
        name: "SRNE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 60000,
        description: "5KVA, 48V, 80A, 145VDC (2 years warranty)",
        image: null
    },
    {
        id: 17,
        name: "SRNE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 68000,
        description: "5KVA, 48V, 100A, 500VDC (2 years warranty)",
        image: null
    },
    {
        id: 18,
        name: "SRNE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 80000,
        description: "5KVA, 48V, 100A, 500VDC (2 years warranty)",
        image: null
    },
    {
        id: 19,
        name: "SRNE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 120000,
        description: "6KVA, 48V, Low Frequency, 500VDC, 100A (2 years warranty)",
        image: null
    },
    {
        id: 20,
        name: "SRNE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 230000,
        description: "8KVA, 48V, 500VDC, 2 MPPTS @ 100A (2 years warranty)",
        image: null
    },
    {
        id: 21,
        name: "SRNE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 180000,
        description: "10KVA, 48V, High Frequency, 500VDC, 100A (2 years warranty)",
        image: null
    },
    {
        id: 22,
        name: "SRNE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 250000,
        description: "12KVA, 48V, Low Frequency, 500VDC, 100A (2 years warranty)",
        image: null
    },
    {
        id: 23,
        name: "SRNE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 230000,
        description: "12KVA, 3 Phase, High Frequency, 500VDC, 100A (2 years warranty)",
        image: null
    },
    {
        id: 24,
        name: "MUST Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 27500,
        description: "1.5KVA, 12V, 60A",
        image: null
    },
    {
        id: 25,
        name: "MUST Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 35000,
        description: "2.2KVA, 24V, 60A",
        image: null
    },
    {
        id: 26,
        name: "MUST Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 38000,
        description: "3.2KVA, 24V, 60A",
        image: null
    },
    {
        id: 27,
        name: "MUST Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 43000,
        description: "3KVA, 24V, 80A",
        image: null
    },
    {
        id: 28,
        name: "MUST Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 48000,
        description: "3KVA, 24V, 80A, Low Frequency",
        image: null
    },
    {
        id: 29,
        name: "MUST Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 64000,
        description: "5KVA, 48V, 80A",
        image: null
    },
    {
        id: 30,
        name: "MUST Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 85000,
        description: "5KVA, 48V, 80A, Low Frequency",
        image: null
    },
    {
        id: 31,
        name: "MUST Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 80000,
        description: "5.2KVA, 48V, 100A",
        image: null
    },
    {
        id: 32,
        name: "MUST Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 96000,
        description: "6KVA, 48V, 100A, Low Frequency",
        image: null
    },
    {
        id: 33,
        name: "MUST Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 185000,
        description: "10KVA, 48V, 100A, Low Frequency",
        image: null
    },
    {
        id: 34,
        name: "TBB Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 72000,
        description: "3KVA, 24V, Low Frequency",
        image: null
    },
    {
        id: 35,
        name: "TBB Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 105000,
        description: "5KVA, 48V, 60A, Low Frequency",
        image: null
    },
    {
        id: 36,
        name: "TBB Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 155000,
        description: "6KVA, 48V, 60A, Low Frequency",
        image: null
    },
    {
        id: 37,
        name: "TBB Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 260000,
        description: "10KVA, 48V, 120A, Low Frequency",
        image: null
    },
    {
        id: 38,
        name: "TBB Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 460000,
        description: "15KVA, 48V, 120A, Low Frequency",
        image: null
    },
    {
        id: 39,
        name: "DEYE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 185000,
        description: "5KVA, 48V, 135A, 425VDC",
        image: null
    },
    {
        id: 40,
        name: "DEYE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 265000,
        description: "8KVA, 48V, 190A, 425VDC",
        image: null
    },
    {
        id: 41,
        name: "DEYE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 360000,
        description: "12KVA, 48V, 240A, 650VDC, 3 Phase",
        image: null
    },
    {
        id: 42,
        name: "Solar Panel",
        category: "Solar Panels",
        price: 13200,
        description: "550W Solar Panel",
        image: null
    },
    {
        id: 43,
        name: "Solar Panels",
        category: "Solar Panels",
        price: "28 BOB per watt",
        description: "150W - 460W Solar Panels",
        image: null
    },
    {
        id: 44,
        name: "Floodlight 25W",
        category: "Floodlights",
        price: 3000,
        description: "25W Floodlight",
        image: null
    },
    {
        id: 45,
        name: "Floodlight 40W",
        category: "Floodlights",
        price: 3500,
        description: "40W Floodlight",
        image: null
    },
    {
        id: 46,
        name: "Floodlight 60W",
        category: "Floodlights",
        price: 4500,
        description: "60W Floodlight",
        image: null
    },
    {
        id: 47,
        name: "Floodlight 100W",
        category: "Floodlights",
        price: 5500,
        description: "100W Floodlight",
        image: null
    },
    {
        id: 48,
        name: "Floodlight 200W",
        category: "Floodlights",
        price: 7000,
        description: "200W Floodlight",
        image: null
    },
    {
        id: 49,
        name: "Floodlight 300W",
        category: "Floodlights",
        price: 9000,
        description: "300W Floodlight",
        image: null
    },
    {
        id: 50,
        name: "Streetlight 60W",
        category: "Streetlights",
        price: 7000,
        description: "60W Streetlight",
        image: null
    },
    {
        id: 51,
        name: "Streetlight 100W",
        category: "Streetlights",
        price: 8000,
        description: "100W Streetlight",
        image: null
    },
    {
        id: 52,
        name: "Streetlight 200W",
        category: "Streetlights",
        price: 10000,
        description: "200W Streetlight",
        image: null
    },
    {
        id: 53,
        name: "Streetlight 300W",
        category: "Streetlights",
        price: 25000,
        description: "300W Streetlight",
        image: null
    },
    {
        id: 54,
        name: "Self-Priming Pump 125W, 0.17HP",
        category: "Self-Priming Pumps",
        price: 3000,
        description: "125W, 0.17HP Self-Priming Pump",
        image: null
    },
    {
        id: 55,
        name: "Self-Priming Pump 250W, 0.34HP",
        category: "Self-Priming Pumps",
        price: 3500,
        description: "250W, 0.34HP Self-Priming Pump",
        image: null
    },
    {
        id: 56,
        name: "Self-Priming Pump 750W, 1HP",
        category: "Self-Priming Pumps",
        price: 4500,
        description: "750W, 1HP Self-Priming Pump",
        image: null
    },
    {
        id: 57,
        name: "Hober Pump Inverter 2.2KW Single Phase",
        category: "Hober Pump Inverters",
        price: 65000,
        description: "2.2KW Single Phase Hober Pump Inverter",
        image: null
    },
    {
        id: 58,
        name: "Hober Pump Inverter 3.7KW 3-Phase",
        category: "Hober Pump Inverters",
        price: 78000,
        description: "3.7KW 3-Phase Hober Pump Inverter",
        image: null
    },
    {
        id: 59,
        name: "Hober Pump Inverter 5.5KW 3-Phase",
        category: "Hober Pump Inverters",
        price: 80000,
        description: "5.5KW 3-Phase Hober Pump Inverter",
        image: null
    },
    {
        id: 60,
        name: "Hober Pump Inverter 7.5KW 3-Phase",
        category: "Hober Pump Inverters",
        price: 90000,
        description: "7.5KW 3-Phase Hober Pump Inverter",
        image: null
    },
    {
        id: 61,
        name: "Hober Pump Inverter 11KW 3-Phase",
        category: "Hober Pump Inverters",
        price: 110000,
        description: "11KW 3-Phase Hober Pump Inverter",
        image: null
    },
    {
        id: 62,
        name: "Hober Pump Inverter 15KW 3-Phase",
        category: "Hober Pump Inverters",
        price: 125000,
        description: "15KW 3-Phase Hober Pump Inverter",
        image: null
    },
    {
        id: 63,
        name: "Hober Pump Inverter 18.5KW 3-Phase",
        category: "Hober Pump Inverters",
        price: 170000,
        description: "18.5KW 3-Phase Hober Pump Inverter",
        image: null
    },
    {
        id: 64,
        name: "Hober DC Pump 200W with Controller",
        category: "Hober DC Pump Plus Controller",
        price: 55000,
        description: "200W, 0.26HP, 36V, 1.3M³/h, 73M (HEAD)",
        image: null
    },
    {
        id: 65,
        name: "Hober DC Pump 400W with Controller",
        category: "Hober DC Pump Plus Controller",
        price: 60000,
        description: "400W, 0.53HP, 48V, 7.2M³/h, 25M (HEAD)",
        image: null
    },
    {
        id: 66,
        name: "Hober DC Pump 500W with Controller",
        category: "Hober DC Pump Plus Controller",
        price: 62000,
        description: "500W, 0.67HP, 48V, 2.8M³/h, 85M (HEAD)",
        image: null
    },
    {
        id: 67,
        name: "Hober DC Pump 600W with Controller",
        category: "Hober DC Pump Plus Controller",
        price: 70000,
        description: "600W, 0.8HP, 48V, 3.2M³/h, 69M (HEAD)",
        image: null
    },
    {
        id: 68,
        name: "Hober DC Pump 750W with Controller",
        category: "Hober DC Pump Plus Controller",
        price: 80000,
        description: "750W, 1HP, 110V, 2.7M³/h, 170M (HEAD)",
        image: null
    },
    {
        id: 69,
        name: "Hober DC Pump 1100W with Controller",
        category: "Hober DC Pump Plus Controller",
        price: 85000,
        description: "1100W, 1.5HP, 110V, 7.2M³/h, 68M (HEAD)",
        image: null
    },
    {
        id: 70,
        name: "Hober DC Pump 1500W with Controller",
        category: "Hober DC Pump Plus Controller",
        price: 90000,
        description: "1500W, 2HP, 110V, 3.2M³/h, 191M (HEAD)",
        image: null
    },
    {
        id: 71,
        name: "PV Cable 4mm",
        category: "Solar Accessories",
        price: 180,
        description: "4mm PV Cable",
        image: null
    },
    {
        id: 72,
        name: "PV Cable 6mm",
        category: "Solar Accessories",
        price: 200,
        description: "6mm PV Cable",
        image: null
    },
    {
        id: 73,
        name: "PV Cable 10mm",
        category: "Solar Accessories",
        price: 350,
        description: "10mm PV Cable",
        image: null
    },
    {
        id: 74,
        name: "Battery Cable 25mm",
        category: "Solar Accessories",
        price: 700,
        description: "25mm Battery Cable",
        image: null
    },
    {
        id: 75,
        name: "Battery Cable 35mm",
        category: "Solar Accessories",
        price: 800,
        description: "35mm Battery Cable",
        image: null
    },
    {
        id: 76,
        name: "Battery Cable 50mm",
        category: "Solar Accessories",
        price: 1500,
        description: "50mm Battery Cable",
        image: null
    },
    {
        id: 77,
        name: "DC Breaker 20A, 32A, 63A, 550VDC, 2 Pole",
        category: "Solar Accessories",
        price: 2500,
        description: "DC Breaker 20A, 32A, 63A, 550VDC, 2 Pole",
        image: null
    },
    {
        id: 78,
        name: "DC Breaker 20A, 32A, 63A, 1000VDC, 4 Pole",
        category: "Solar Accessories",
        price: 4500,
        description: "DC Breaker 20A, 32A, 63A, 1000VDC, 4 Pole",
        image: null
    },
    {
        id: 79,
        name: "DC MCCB, 100A, 160A, 200A, 250A, 2 Pole, 1000VDC",
        category: "Solar Accessories",
        price: 10000,
        description: "DC MCCB, 100A, 160A, 200A, 250A, 2 Pole, 1000VDC",
        image: null
    },
    {
        id: 80,
        name: "Surge Protector 40A, 550VDC, 2 Pole",
        category: "Solar Accessories",
        price: 4000,
        description: "Surge Protector 40A, 550VDC, 2 Pole",
        image: null
    },
    {
        id: 81,
        name: "Surge Protector 40A, 1000VDC, 4 Pole",
        category: "Solar Accessories",
        price: 5500,
        description: "Surge Protector 40A, 1000VDC, 4 Pole",
        image: null
    },
    {
        id: 82,
        name: "Battery Fuse 150A, 160A, 200A, 250A, 1000VDC, Single Pole",
        category: "Solar Accessories",
        price: 6500,
        description: "Battery Fuse 150A, 160A, 200A, 250A, 1000VDC, Single Pole",
        image: null
    },
    {
        id: 83,
        name: "Battery Fuse 100A, 1000VDC, Single Pole",
        category: "Solar Accessories",
        price: 5000,
        description: "Battery Fuse 100A, 1000VDC, Single Pole",
        image: null
    },
    {
        id: 84,
        name: "Battery Fuse 150A, 160A, 200A, 250A, 1000VDC, Three Pole",
        category: "Solar Accessories",
        price: 15000,
        description: "Battery Fuse 150A, 160A, 200A, 250A, 1000VDC, Three Pole",
        image: null
    },
    {
        id: 85,
        name: "AVS 30A",
        category: "Solar Accessories",
        price: 2200,
        description: "30A AVS",
        image: null
    },
    {
        id: 86,
        name: "AVS 63A Single Phase",
        category: "Solar Accessories",
        price: 3500,
        description: "63A Single Phase AVS",
        image: null
    },
    {
        id: 87,
        name: "AVS 63A Three Phase",
        category: "Solar Accessories",
        price: 5500,
        description: "63A Three Phase AVS",
        image: null
    },
    {
        id: 88,
        name: "MC4 Single Connectors",
        category: "Solar Accessories",
        price: 500,
        description: "Single MC4 Connectors",
        image: null
    },
    {
        id: 89,
        name: "MC4 Connectors 2 Way",
        category: "Solar Accessories",
        price: 900,
        description: "2 Way MC4 Connectors",
        image: null
    },
    {
        id: 90,
        name: "MC4 Connectors 3 Way",
        category: "Solar Accessories",
        price: 1200,
        description: "3 Way MC4 Connectors",
        image: null
    },
    {
        id: 91,
        name: "MC4 Connectors 4 Way",
        category: "Solar Accessories",
        price: 1500,
        description: "4 Way MC4 Connectors",
        image: null
    },
    {
        id: 92,
        name: "Automatic Change Over 63A, 4P",
        category: "Solar Accessories",
        price: 9000,
        description: "63A, 4P Automatic Change Over",
        image: null
    },
    {
        id: 93,
        name: "Automatic Changeover 63A, 2P",
        category: "Solar Accessories",
        price: 6000,
        description: "63A, 2P Automatic Changeover",
        image: null
    },
    {
        id: 94,
        name: "Change Over Switch 63A, 3P",
        category: "Solar Accessories",
        price: 4500,
        description: "63A, 3P Change Over Switch",
        image: null
    },
    {
        id: 95,
        name: "Change Over Switch 40A, 3P",
        category: "Solar Accessories",
        price: 3000,
        description: "40A, 3P Change Over Switch",
        image: null
    },
    {
        id: 96,
        name: "PV Disconnect 32A, 1000VDC, 4 Pole with Enclosure",
        category: "Solar Accessories",
        price: 6000,
        description: "PV Disconnect 32A, 1000VDC, 4 Pole with Enclosure",
        image: null
    },
    {
        id: 97,
        name: "4 Way Enclosure Box",
        category: "Solar Accessories",
        price: 2500,
        description: "4 Way Enclosure Box",
        image: null
    },
    {
        id: 98,
        name: "6 Way Enclosure Box",
        category: "Solar Accessories",
        price: 3500,
        description: "6 Way Enclosure Box",
        image: null
    },
    {
        id: 99,
        name: "9 Way Enclosure Box",
        category: "Solar Accessories",
        price: 4500,
        description: "9 Way Enclosure Box",
        image: null
    },
    {
        id: 100,
        name: "12 Way Enclosure Box",
        category: "Solar Accessories",
        price: 5500,
        description: "12 Way Enclosure Box",
        image: null
    },
    {
        id: 101,
        name: "24 Way Enclosure Box",
        category: "Solar Accessories",
        price: 8000,
        description: "24 Way Enclosure Box",
        image: null
    },
    {
        id: 102,
        name: "Aluminum Rail, 4.8Mtrs, Heavy Gauge",
        category: "Mounting Structures",
        price: 4800,
        description: "Heavy Gauge Aluminum Rail, 4.8Mtrs",
        image: null
    },
    {
        id: 103,
        name: "Mid Clamp 35mm",
        category: "Mounting Structures",
        price: 250,
        description: "35mm Mid Clamp for Solar Panels",
        image: null
    },
    {
        id: 104,
        name: "End Clamp 35mm",
        category: "Mounting Structures",
        price: 250,
        description: "35mm End Clamp for Solar Panels",
        image: null
    },
    {
        id: 105,
        name: "Splicing Kit/Rail Connector 150mm",
        category: "Mounting Structures",
        price: 300,
        description: "150mm Splicing Kit/Rail Connector",
        image: null
    },
    {
        id: 106,
        name: "Long L-Feet Kit",
        category: "Mounting Structures",
        price: 350,
        description: "Includes L-Feet, Tmodule, M8 Screw, Bolt, EPDM Pad",
        image: null
    },
    {
        id: 107,
        name: "Short L-Feet Kit",
        category: "Mounting Structures",
        price: 350,
        description: "Includes L-Feet, Tmodule, M8 Screw, Bolt, EPDM Pad",
        image: null
    },
    {
        id: 108,
        name: "Mini Rails 300mm Long Plus Self Drilling Screws and EPDM Pad",
        category: "Mounting Structures",
        price: 600,
        description: "Mini Rails 300mm Long with Self Drilling Screws and EPDM Pad",
        image: null
    },
    {
        id: 109,
        name: "Perforated Angle Line 2.2Mtrs",
        category: "Mounting Structures",
        price: 3000,
        description: "2.2Mtrs Perforated Angle Line",
        image: null
    },
    {
        id: 110,
        name: "Rail Clamp",
        category: "Mounting Structures",
        price: 250,
        description: "Rail Clamp for Solar Panel Mounting",
        image: null
    },
    {
        id: 111,
        name: "Earthing Lug",
        category: "Mounting Structures",
        price: 200,
        description: "Earthing Lug for Solar Panel Systems",
        image: null
    }  
];

const categories = [
    "All",
    "Batteries",
    "Hybrid Inverters",
    "Solar Panels",
    "Floodlights",
    "Streetlights",
    "Self-Priming Pumps",
    "Hober Pump Inverters",
    "Hober DC Pump Plus Controller",
    "Solar Accessories",
    "Mounting Structures"
];



// WhatsApp number for contact
const whatsappNumber = '+254708005538'; // Replace with your WhatsApp number

function Products() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top of the page
    }, []); // Empty dependency array ensures this runs only on mount
    
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Filter products based on selected category and search query
    const filteredProducts = products
        .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
        .filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));

    const percentageIncrease = 0.10;

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
                        <div className={styles.priceContainer}>
                        <span className={styles.initialPrice}>{(product.price * (1 + percentageIncrease)).toFixed(2)}</span>
                        <span className={styles.finalPrice}>{product.price} KSH</span>
                        </div>

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
