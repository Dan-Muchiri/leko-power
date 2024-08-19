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
        image: "https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/06/28/2023062813592005.png"
    },
    {
        id: 2,
        name: "SRNE Lithium Battery without Display",
        category: "Batteries",
        price: 160000,
        description: "5.12kWh, 100AH, 51.2V, without display, 20 years lifetime, 47kg",
        image: "https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/06/29/2023062914155555.png"
    },
    {
        id: 3,
        name: "SRNE Lithium Battery",
        category: "Batteries",
        price: 310000,
        description: "10.24kWh, 200AH, 51.2V, 20 years lifetime, 88kg",
        image: "https://img.ctmon.com.cn/oss/sren/userfiles/images/2024/06/14/2024061410375941.png"
    },
    {
        id: 4,
        name: "Megatank Lithium Battery All-in-One",
        category: "Batteries",
        price: 535000,
        description: "6KVA hybrid inverter, 10kWh lithium battery",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSR9EbRhXRxJPzJVa8d11PhliGtC_kPbjvnRTCd1fMa9i48gBzCAyaddNEcKPpXM3Cc-Uw5GdY_c7YNczHYr0jR_meHE0yI6_z-BquI9a4bjmY5Nna6h97t3p7_cLMX2iA573ZZYMOLbA&usqp=CAc"
    },
    {
        id: 5,
        name: "Megatank GL Lithium Battery",
        category: "Batteries",
        price: 180000,
        description: "5.12kWh, 100AH, 51.2V",
        image: "https://solarstore.co.ke/wp-content/uploads/2023/08/Megatank-5kWh-Lithium-Battery-in-kenya.jpg"
    },
    {
        id: 6,
        name: "Megatank Lithium Battery 24V",
        category: "Batteries",
        price: 50000,
        description: "75AH/1920Wh, 24V",
        image: "https://solarstore.co.ke/wp-content/uploads/2023/08/Megatank-5kWh-Lithium-Battery-in-kenya.jpg"
    },
    {
        id: 7,
        name: "Megatank Lithium Battery 12V",
        category: "Batteries",
        price: 30000,
        description: "75AH/960Wh, 12V",
        image: "https://solarstore.co.ke/wp-content/uploads/2023/08/Megatank-5kWh-Lithium-Battery-in-kenya.jpg"
    },
    {
        id: 8,
        name: "Luminous Tall Tubular Battery",
        category: "Batteries",
        price: 38000,
        description: "200AH, 12V",
        image: "https://kreatives.co.ke/public/uploads/all/BPRaaMn6XrkgyPOcf0D4wCPi5OuN5D787LsY7TAn.png"
    },
    {
        id: 9,
        name: "Ritar Battery 40AH",
        category: "Batteries",
        price: 10000,
        description: "40AH, 12V",
        image: "https://www.tronik.co.ke/wp-content/uploads/2023/08/Ritar-12V-40Ah-Lead-Sealed-maintenance-free-battery-in-Kenya.jpg"
    },
    {
        id: 10,
        name: "Ritar Battery 55AH",
        category: "Batteries",
        price: 13000,
        description: "55AH, 12V",
        image: "https://www.tronik.co.ke/wp-content/uploads/2023/08/Ritar-12V-40Ah-Lead-Sealed-maintenance-free-battery-in-Kenya.jpg"
    },
    {
        id: 11,
        name: "Ritar Battery 80AH",
        category: "Batteries",
        price: 16000,
        description: "80AH, 12V",
        image: "https://www.tronik.co.ke/wp-content/uploads/2023/08/Ritar-12V-40Ah-Lead-Sealed-maintenance-free-battery-in-Kenya.jpg"
    },
    {
        id: 12,
        name: "Ritar Battery 100AH",
        category: "Batteries",
        price: 20000,
        description: "100AH, 12V",
        image: "https://www.tronik.co.ke/wp-content/uploads/2023/08/Ritar-12V-40Ah-Lead-Sealed-maintenance-free-battery-in-Kenya.jpg"
    },
    {
        id: 13,
        name: "Ritar Battery 200AH",
        category: "Batteries",
        price: 38000,
        description: "200AH, 12V",
        image: "https://www.tronik.co.ke/wp-content/uploads/2023/08/Ritar-12V-40Ah-Lead-Sealed-maintenance-free-battery-in-Kenya.jpg"
    },
    {
        id: 14,
        name: "Ritar Battery 260AH",
        category: "Batteries",
        price: 48000,
        description: "260AH, 12V",
        image: "https://www.tronik.co.ke/wp-content/uploads/2023/08/Ritar-12V-40Ah-Lead-Sealed-maintenance-free-battery-in-Kenya.jpg"
    },
    /// Hybrid Inverters
    {
        id: 15,
        name: "SRNE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 45000,
        description: "3.3KVA, 24V, 80A, 450VDC (2 years warranty)",
        image: "https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/10/17/2023101717425461.png"
    },
    {
        id: 16,
        name: "SRNE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 60000,
        description: "5KVA, 48V, 80A, 145VDC (2 years warranty)",
        image: "https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/06/28/2023062811254588.png"
    },
    {
        id: 17,
        name: "SRNE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 68000,
        description: "5KVA, 48V, 100A, 500VDC (2 years warranty)",
        image: "https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/06/28/2023062811254588.png"
    },
    {
        id: 18,
        name: "SRNE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 80000,
        description: "5KVA, 48V, 100A, 500VDC (2 years warranty)",
        image: "https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/06/28/2023062811254588.png"
    },
    {
        id: 19,
        name: "SRNE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 120000,
        description: "6KVA, 48V, Low Frequency, 500VDC, 100A (2 years warranty)",
        image: "https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/06/29/2023062909386899.png"
    },
    {
        id: 20,
        name: "SRNE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 230000,
        description: "8KVA, 48V, 500VDC, 2 MPPTS @ 100A (2 years warranty)",
        image: "https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/06/29/2023062909386899.png"
    },
    {
        id: 21,
        name: "SRNE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 180000,
        description: "10KVA, 48V, High Frequency, 500VDC, 100A (2 years warranty)",
        image: "https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/10/17/2023101717252638.png"
    },
    {
        id: 22,
        name: "SRNE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 250000,
        description: "12KVA, 48V, Low Frequency, 500VDC, 100A (2 years warranty)",
        image: "https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/10/17/2023101717085759.png"
    },
    {
        id: 23,
        name: "SRNE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 230000,
        description: "12KVA, 3 Phase, High Frequency, 500VDC, 100A (2 years warranty)",
        image: "https://img.ctmon.com.cn/oss/sren/userfiles/images/2023/10/17/2023101717085759.png"
    },
    {
        id: 24,
        name: "MUST Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 27500,
        description: "1.5KVA, 12V, 60A",
        image: "https://thegreencamelltd.com/img/service/must2.jpg"
    },
    {
        id: 25,
        name: "MUST Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 35000,
        description: "2.2KVA, 24V, 60A",
        image: "https://thegreencamelltd.com/img/service/must2.jpg"
    },
    {
        id: 26,
        name: "MUST Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 38000,
        description: "3.2KVA, 24V, 60A",
        image: "https://thegreencamelltd.com/img/service/must2.jpg"
    },
    {
        id: 27,
        name: "MUST Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 43000,
        description: "3KVA, 24V, 80A",
        image: "https://thegreencamelltd.com/img/service/must2.jpg"
    },
    {
        id: 28,
        name: "MUST Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 48000,
        description: "3KVA, 24V, 80A, Low Frequency",
        image: "https://thegreencamelltd.com/img/service/must2.jpg"
    },
    {
        id: 29,
        name: "MUST Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 64000,
        description: "5KVA, 48V, 80A",
        image: "https://thegreencamelltd.com/img/service/must2.jpg"
    },
    {
        id: 30,
        name: "MUST Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 85000,
        description: "5KVA, 48V, 80A, Low Frequency",
        image: "https://thegreencamelltd.com/img/service/must2.jpg"
    },
    {
        id: 31,
        name: "MUST Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 80000,
        description: "5.2KVA, 48V, 100A",
        image: "https://thegreencamelltd.com/img/service/must2.jpg"
    },
    {
        id: 32,
        name: "MUST Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 96000,
        description: "6KVA, 48V, 100A, Low Frequency",
        image: "https://thegreencamelltd.com/img/service/must2.jpg"
    },
    {
        id: 33,
        name: "MUST Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 185000,
        description: "10KVA, 48V, 100A, Low Frequency",
        image: "https://thegreencamelltd.com/img/service/must2.jpg"
    },
    {
        id: 34,
        name: "TBB Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 72000,
        description: "3KVA, 24V, Low Frequency",
        image: "https://thegreencamelltd.com/img/service/Riio-sun-3000w.jpg"
    },
    {
        id: 35,
        name: "TBB Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 105000,
        description: "5KVA, 48V, 60A, Low Frequency",
        image: "https://thegreencamelltd.com/img/service/Riio-sun-3000w.jpg"
    },
    {
        id: 36,
        name: "TBB Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 155000,
        description: "6KVA, 48V, 60A, Low Frequency",
        image: "https://thegreencamelltd.com/img/service/Riio-sun-3000w.jpg"
    },
    {
        id: 37,
        name: "TBB Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 260000,
        description: "10KVA, 48V, 120A, Low Frequency",
        image: "https://thegreencamelltd.com/img/service/Riio-sun-3000w.jpg"
    },
    {
        id: 38,
        name: "TBB Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 460000,
        description: "15KVA, 48V, 120A, Low Frequency",
        image: "https://thegreencamelltd.com/img/service/Riio-sun-3000w.jpg"
    },
    {
        id: 39,
        name: "DEYE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 185000,
        description: "5KVA, 48V, 135A, 425VDC",
        image: "https://cat.co.ke/wp-content/uploads/2022/02/DEYE-5KW-48v-Single-Phase-Hybrid-Inverter.webp"
    },
    {
        id: 40,
        name: "DEYE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 265000,
        description: "8KVA, 48V, 190A, 425VDC",
        image: "https://cat.co.ke/wp-content/uploads/2022/02/DEYE-5KW-48v-Single-Phase-Hybrid-Inverter.webp"
    },
    {
        id: 41,
        name: "DEYE Hybrid Inverter",
        category: "Hybrid Inverters",
        price: 360000,
        description: "12KVA, 48V, 240A, 650VDC, 3 Phase",
        image: "https://cat.co.ke/wp-content/uploads/2022/02/DEYE-5KW-48v-Single-Phase-Hybrid-Inverter.webp"
    },
    {
        id: 42,
        name: "Solar Panel",
        category: "Solar Panels",
        price: 13200,
        description: "550W Solar Panel",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLNpfuyJMIIbiQdg7QS2ABfuHV6FoECLTLjw&s"
    },
    {
        id: 43,
        name: "Solar Panels",
        category: "Solar Panels",
        price: "28 BOB per watt",
        description: "150W - 460W Solar Panels",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLNpfuyJMIIbiQdg7QS2ABfuHV6FoECLTLjw&s"
    },
    {
        id: 44,
        name: "Floodlight 25W",
        category: "Floodlights",
        price: 3000,
        description: "25W Floodlight",
        image: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/414136/1.jpg?0710"
    },
    {
        id: 45,
        name: "Floodlight 40W",
        category: "Floodlights",
        price: 3500,
        description: "40W Floodlight",
        image: "https://5.imimg.com/data5/SELLER/Default/2021/1/XE/VL/LE/13100888/25w-solar-flood-light-500x500.jpg"
    },
    {
        id: 46,
        name: "Floodlight 60W",
        category: "Floodlights",
        price: 4500,
        description: "60W Floodlight",
        image: "https://5.imimg.com/data5/SELLER/Default/2021/1/XE/VL/LE/13100888/25w-solar-flood-light-500x500.jpg"
    },
    {
        id: 47,
        name: "Floodlight 100W",
        category: "Floodlights",
        price: 5500,
        description: "100W Floodlight",
        image: "https://5.imimg.com/data5/SELLER/Default/2021/1/XE/VL/LE/13100888/25w-solar-flood-light-500x500.jpg"
    },
    {
        id: 48,
        name: "Floodlight 200W",
        category: "Floodlights",
        price: 7000,
        description: "200W Floodlight",
        image: "https://5.imimg.com/data5/SELLER/Default/2021/1/XE/VL/LE/13100888/25w-solar-flood-light-500x500.jpg"
    },
    {
        id: 49,
        name: "Floodlight 300W",
        category: "Floodlights",
        price: 9000,
        description: "300W Floodlight",
        image: "https://5.imimg.com/data5/SELLER/Default/2021/1/XE/VL/LE/13100888/25w-solar-flood-light-500x500.jpg"
    },
    {
        id: 50,
        name: "Streetlight 60W",
        category: "Streetlights",
        price: 7000,
        description: "60W Streetlight",
        image: "https://5.imimg.com/data5/SELLER/Default/2021/1/XE/VL/LE/13100888/25w-solar-flood-light-500x500.jpg"
    },
    {
        id: 51,
        name: "Streetlight 100W",
        category: "Streetlights",
        price: 8000,
        description: "100W Streetlight",
        image: "https://www.tronic.co.ke/cdn/shop/products/EST-SL27-10-DL.jpg?v=1678690898"
    },
    {
        id: 52,
        name: "Streetlight 200W",
        category: "Streetlights",
        price: 10000,
        description: "200W Streetlight",
        image: "https://www.tronic.co.ke/cdn/shop/products/EST-SL27-10-DL.jpg?v=1678690898"
    },
    {
        id: 53,
        name: "Streetlight 300W",
        category: "Streetlights",
        price: 25000,
        description: "300W Streetlight",
        image: "https://www.tronic.co.ke/cdn/shop/products/EST-SL27-10-DL.jpg?v=1678690898"
    },
    {
        id: 54,
        name: "Self-Priming Pump 125W, 0.17HP",
        category: "Self-Priming Pumps",
        price: 3000,
        description: "125W, 0.17HP Self-Priming Pump",
        image: "https://s.alicdn.com/@sc04/kf/H14c4d34e26b0431da9a871d5a506370e8.jpg_300x300.jpg"
    },
    {
        id: 55,
        name: "Self-Priming Pump 250W, 0.34HP",
        category: "Self-Priming Pumps",
        price: 3500,
        description: "250W, 0.34HP Self-Priming Pump",
        image: "https://i.ebayimg.com/images/g/Kp0AAOSwR9FihLIT/s-l1200.jpg"
    },
    {
        id: 56,
        name: "Self-Priming Pump 750W, 1HP",
        category: "Self-Priming Pumps",
        price: 4500,
        description: "750W, 1HP Self-Priming Pump",
        image: "https://i.ebayimg.com/images/g/Kp0AAOSwR9FihLIT/s-l1200.jpg"
    },
    {
        id: 57,
        name: "Hober Pump Inverter 2.2KW Single Phase",
        category: "Hober Pump Inverters",
        price: 65000,
        description: "2.2KW Single Phase Hober Pump Inverter",
        image: "https://solarshop.co.ke/wp-content/uploads/2024/03/Hober-2.2Kw-Hybrid-Solar-Water-Pumping-inverter-best-price-in-Nairobi-Kenya-East-and-Central-Africa.webp"
    },
    {
        id: 58,
        name: "Hober Pump Inverter 3.7KW 3-Phase",
        category: "Hober Pump Inverters",
        price: 78000,
        description: "3.7KW 3-Phase Hober Pump Inverter",
        image: "https://solarshop.co.ke/wp-content/uploads/2024/03/Hober-2.2Kw-Hybrid-Solar-Water-Pumping-inverter-best-price-in-Nairobi-Kenya-East-and-Central-Africa.webp"
    },
    {
        id: 59,
        name: "Hober Pump Inverter 5.5KW 3-Phase",
        category: "Hober Pump Inverters",
        price: 80000,
        description: "5.5KW 3-Phase Hober Pump Inverter",
        image: "https://solarshop.co.ke/wp-content/uploads/2024/03/Hober-2.2Kw-Hybrid-Solar-Water-Pumping-inverter-best-price-in-Nairobi-Kenya-East-and-Central-Africa.webp"
    },
    {
        id: 60,
        name: "Hober Pump Inverter 7.5KW 3-Phase",
        category: "Hober Pump Inverters",
        price: 90000,
        description: "7.5KW 3-Phase Hober Pump Inverter",
        image: "https://solarshop.co.ke/wp-content/uploads/2024/03/Hober-2.2Kw-Hybrid-Solar-Water-Pumping-inverter-best-price-in-Nairobi-Kenya-East-and-Central-Africa.webp"
    },
    {
        id: 61,
        name: "Hober Pump Inverter 11KW 3-Phase",
        category: "Hober Pump Inverters",
        price: 110000,
        description: "11KW 3-Phase Hober Pump Inverter",
        image: "https://solarshop.co.ke/wp-content/uploads/2024/03/Hober-2.2Kw-Hybrid-Solar-Water-Pumping-inverter-best-price-in-Nairobi-Kenya-East-and-Central-Africa.webp"
    },
    {
        id: 62,
        name: "Hober Pump Inverter 15KW 3-Phase",
        category: "Hober Pump Inverters",
        price: 125000,
        description: "15KW 3-Phase Hober Pump Inverter",
        image: "https://solarshop.co.ke/wp-content/uploads/2024/03/Hober-2.2Kw-Hybrid-Solar-Water-Pumping-inverter-best-price-in-Nairobi-Kenya-East-and-Central-Africa.webp"
    },
    {
        id: 63,
        name: "Hober Pump Inverter 18.5KW 3-Phase",
        category: "Hober Pump Inverters",
        price: 170000,
        description: "18.5KW 3-Phase Hober Pump Inverter",
        image: "https://solarshop.co.ke/wp-content/uploads/2024/03/Hober-2.2Kw-Hybrid-Solar-Water-Pumping-inverter-best-price-in-Nairobi-Kenya-East-and-Central-Africa.webp"
    },
    {
        id: 64,
        name: "Hober DC Pump 200W with Controller",
        category: "Hober DC Pump Plus Controller",
        price: 55000,
        description: "200W, 0.26HP, 36V, 1.3M³/h, 73M (HEAD)",
        image: "https://hobertek.com/wp-content/uploads/2023/09/solar-centrifure-pump-.webp"
    },
    {
        id: 65,
        name: "Hober DC Pump 400W with Controller",
        category: "Hober DC Pump Plus Controller",
        price: 60000,
        description: "400W, 0.53HP, 48V, 7.2M³/h, 25M (HEAD)",
        image: "https://hobertek.com/wp-content/uploads/2023/09/solar-centrifure-pump-.webp"
    },
    {
        id: 66,
        name: "Hober DC Pump 500W with Controller",
        category: "Hober DC Pump Plus Controller",
        price: 62000,
        description: "500W, 0.67HP, 48V, 2.8M³/h, 85M (HEAD)",
        image: "https://hobertek.com/wp-content/uploads/2023/09/solar-centrifure-pump-.webp"
    },
    {
        id: 67,
        name: "Hober DC Pump 600W with Controller",
        category: "Hober DC Pump Plus Controller",
        price: 70000,
        description: "600W, 0.8HP, 48V, 3.2M³/h, 69M (HEAD)",
        image: "https://hobertek.com/wp-content/uploads/2023/09/solar-centrifure-pump-.webp"
    },
    {
        id: 68,
        name: "Hober DC Pump 750W with Controller",
        category: "Hober DC Pump Plus Controller",
        price: 80000,
        description: "750W, 1HP, 110V, 2.7M³/h, 170M (HEAD)",
        image: "https://hobertek.com/wp-content/uploads/2023/09/solar-centrifure-pump-.webp"
    },
    {
        id: 69,
        name: "Hober DC Pump 1100W with Controller",
        category: "Hober DC Pump Plus Controller",
        price: 85000,
        description: "1100W, 1.5HP, 110V, 7.2M³/h, 68M (HEAD)",
        image: "https://hobertek.com/wp-content/uploads/2023/09/solar-centrifure-pump-.webp"
    },
    {
        id: 70,
        name: "Hober DC Pump 1500W with Controller",
        category: "Hober DC Pump Plus Controller",
        price: 90000,
        description: "1500W, 2HP, 110V, 3.2M³/h, 191M (HEAD)",
        image: "https://hobertek.com/wp-content/uploads/2023/09/solar-centrifure-pump-.webp"
    },
    {
        id: 71,
        name: "PV Cable 4mm",
        category: "Solar Accessories",
        price: 180,
        description: "4mm PV Cable",
        image: "https://ecodeshpowersolutions.co.ke/wp-content/uploads/2021/03/Ecodesh-Product-5.jpg"
    },
    {
        id: 72,
        name: "PV Cable 6mm",
        category: "Solar Accessories",
        price: 200,
        description: "6mm PV Cable",
        image: "https://ecodeshpowersolutions.co.ke/wp-content/uploads/2021/03/Ecodesh-Product-5.jpg"
    },
    {
        id: 73,
        name: "PV Cable 10mm",
        category: "Solar Accessories",
        price: 350,
        description: "10mm PV Cable",
        image: "https://ecodeshpowersolutions.co.ke/wp-content/uploads/2021/03/Ecodesh-Product-5.jpg"
    },
    {
        id: 74,
        name: "Battery Cable 25mm",
        category: "Solar Accessories",
        price: 700,
        description: "25mm Battery Cable",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUNtnUdp-VTYuhXb2sYbXnts-vVSo09LdGA&s"
    },
    {
        id: 75,
        name: "Battery Cable 35mm",
        category: "Solar Accessories",
        price: 800,
        description: "35mm Battery Cable",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUNtnUdp-VTYuhXb2sYbXnts-vVSo09LdGA&s"
    },
    {
        id: 76,
        name: "Battery Cable 50mm",
        category: "Solar Accessories",
        price: 1500,
        description: "50mm Battery Cable",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUNtnUdp-VTYuhXb2sYbXnts-vVSo09LdGA&s"
    },
    {
        id: 77,
        name: "DC Breaker 20A, 32A, 63A, 550VDC, 2 Pole",
        category: "Solar Accessories",
        price: 2500,
        description: "DC Breaker 20A, 32A, 63A, 550VDC, 2 Pole",
        image: "https://solarshop.co.ke/wp-content/uploads/2024/03/Suntree-Solar-DC-MCB-63A-2Pole.jpg"
    },
    {
        id: 78,
        name: "DC Breaker 20A, 32A, 63A, 1000VDC, 4 Pole",
        category: "Solar Accessories",
        price: 4500,
        description: "DC Breaker 20A, 32A, 63A, 1000VDC, 4 Pole",
        image: "https://solarshop.co.ke/wp-content/uploads/2024/03/Suntree-Solar-DC-MCB-63A-2Pole.jpg"
    },
    {
        id: 79,
        name: "DC MCCB, 100A, 160A, 200A, 250A, 2 Pole, 1000VDC",
        category: "Solar Accessories",
        price: 10000,
        description: "DC MCCB, 100A, 160A, 200A, 250A, 2 Pole, 1000VDC",
        image: "https://solarshop.co.ke/wp-content/uploads/2024/03/Suntree-Solar-DC-MCB-63A-2Pole.jpg"
    },
    {
        id: 80,
        name: "Surge Protector 40A, 550VDC, 2 Pole",
        category: "Solar Accessories",
        price: 4000,
        description: "Surge Protector 40A, 550VDC, 2 Pole",
        image: "https://solarshop.co.ke/wp-content/uploads/2024/03/suntree-2pole.jpg"
    },
    {
        id: 81,
        name: "Surge Protector 40A, 1000VDC, 4 Pole",
        category: "Solar Accessories",
        price: 5500,
        description: "Surge Protector 40A, 1000VDC, 4 Pole",
        image: "https://solarshop.co.ke/wp-content/uploads/2024/03/suntree-2pole.jpg"
    },
    {
        id: 82,
        name: "Battery Fuse 150A, 160A, 200A, 250A, 1000VDC, Single Pole",
        category: "Solar Accessories",
        price: 6500,
        description: "Battery Fuse 150A, 160A, 200A, 250A, 1000VDC, Single Pole",
        image: "https://onlineshop.gcsolar.co.za/wp-content/uploads/2022/03/250A-Fuse.jpg"
    },
    {
        id: 83,
        name: "Battery Fuse 100A, 1000VDC, Single Pole",
        category: "Solar Accessories",
        price: 5000,
        description: "Battery Fuse 100A, 1000VDC, Single Pole",
        image: "https://onlineshop.gcsolar.co.za/wp-content/uploads/2022/03/250A-Fuse.jpg"
    },
    {
        id: 84,
        name: "Battery Fuse 150A, 160A, 200A, 250A, 1000VDC, Three Pole",
        category: "Solar Accessories",
        price: 15000,
        description: "Battery Fuse 150A, 160A, 200A, 250A, 1000VDC, Three Pole",
        image: "https://onlineshop.gcsolar.co.za/wp-content/uploads/2022/03/250A-Fuse.jpg"
    },
    {
        id: 85,
        name: "AVS 30A",
        category: "Solar Accessories",
        price: 2200,
        description: "30A AVS",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nF0uekYfYDPgP8dmZepXwFXMXdkLni1LlA&s"
    },
    {
        id: 86,
        name: "AVS 63A Single Phase",
        category: "Solar Accessories",
        price: 3500,
        description: "63A Single Phase AVS",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nF0uekYfYDPgP8dmZepXwFXMXdkLni1LlA&s"
    },
    {
        id: 87,
        name: "AVS 63A Three Phase",
        category: "Solar Accessories",
        price: 5500,
        description: "63A Three Phase AVS",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nF0uekYfYDPgP8dmZepXwFXMXdkLni1LlA&s"
    },
    {
        id: 88,
        name: "MC4 Single Connectors",
        category: "Solar Accessories",
        price: 500,
        description: "Single MC4 Connectors",
        image: "https://shop.thesunpays.co.za/cdn/shop/products/mc4-connector-500x500_800x.jpg?v=1559902879"
    },
    {
        id: 89,
        name: "MC4 Connectors 2 Way",
        category: "Solar Accessories",
        price: 900,
        description: "2 Way MC4 Connectors",
        image: "https://solarwarehousesa.com/cdn/shop/files/mc4-y-connector-2-way-to-1-solar-341_631x.png?v=1706232287"
    },
    {
        id: 90,
        name: "MC4 Connectors 3 Way",
        category: "Solar Accessories",
        price: 1200,
        description: "3 Way MC4 Connectors",
        image: "https://secure-rite.co.za/cdn/shop/products/mc4y3-1connector_248x203.png?v=1659364597"
    },
    {
        id: 91,
        name: "MC4 Connectors 4 Way",
        category: "Solar Accessories",
        price: 1500,
        description: "4 Way MC4 Connectors",
        image: "https://energymall.ng/wp-content/uploads/2022/05/3.jpeg"
    },
    {
        id: 92,
        name: "Automatic Change Over 63A, 4P",
        category: "Solar Accessories",
        price: 9000,
        description: "63A, 4P Automatic Change Over",
        image: "https://m.media-amazon.com/images/I/91dfHfA5RwL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 93,
        name: "Automatic Changeover 63A, 2P",
        category: "Solar Accessories",
        price: 6000,
        description: "63A, 2P Automatic Changeover",
        image: "https://m.media-amazon.com/images/I/91dfHfA5RwL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 94,
        name: "Change Over Switch 63A, 3P",
        category: "Solar Accessories",
        price: 4500,
        description: "63A, 3P Change Over Switch",
        image: "https://image.made-in-china.com/202f0j00WHYqCThavQoO/Dual-Power-Sf-1-0-2-1p-2p-3p-4p-20A-32A-63A-Modular-Changeover-Switch.webp"
    },
    {
        id: 95,
        name: "Change Over Switch 40A, 3P",
        category: "Solar Accessories",
        price: 3000,
        description: "40A, 3P Change Over Switch",
        image: "https://image.made-in-china.com/202f0j00WHYqCThavQoO/Dual-Power-Sf-1-0-2-1p-2p-3p-4p-20A-32A-63A-Modular-Changeover-Switch.webp"
    },
    {
        id: 96,
        name: "PV Disconnect 32A, 1000VDC, 4 Pole with Enclosure",
        category: "Solar Accessories",
        price: 6000,
        description: "PV Disconnect 32A, 1000VDC, 4 Pole with Enclosure",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9YgGEEEO7QFVagKubOykKJ34l30rIkWZP_w&s"
    },
    {
        id: 97,
        name: "4 Way Enclosure Box",
        category: "Solar Accessories",
        price: 2500,
        description: "4 Way Enclosure Box",
        image: "https://www.tronic.co.ke/cdn/shop/products/DBRC04-ME_a327d70a-8d65-4871-b844-79d6fe726111.jpg?v=1695128741"
    },
    {
        id: 98,
        name: "6 Way Enclosure Box",
        category: "Solar Accessories",
        price: 3500,
        description: "6 Way Enclosure Box",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_t_qbEPRrbTjXQJ3nM74YTjR_RxRO3qyGaw&s"
    },
    {
        id: 99,
        name: "9 Way Enclosure Box",
        category: "Solar Accessories",
        price: 4500,
        description: "9 Way Enclosure Box",
        image: "https://m.media-amazon.com/images/I/61aJmFKNkEL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 100,
        name: "12 Way Enclosure Box",
        category: "Solar Accessories",
        price: 5500,
        description: "12 Way Enclosure Box",
        image: "https://image.made-in-china.com/318f0j00ZQiUqVjSZIbl/IP6512way%E8%A7%86%E9%A2%91.mp4.webp"
    },
    {
        id: 101,
        name: "24 Way Enclosure Box",
        category: "Solar Accessories",
        price: 8000,
        description: "24 Way Enclosure Box",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jKGS8n3U1qtN6gZIHqRZuKyJgavo85nYMA&s"
    },
    {
        id: 102,
        name: "Aluminum Rail, 4.8Mtrs, Heavy Gauge",
        category: "Mounting Structures",
        price: 4800,
        description: "Heavy Gauge Aluminum Rail, 4.8Mtrs",
        image: "https://4.imimg.com/data4/PT/FJ/MY-8373804/aluminiumprofile_sra-500x500.jpg"
    },
    {
        id: 103,
        name: "Mid Clamp 35mm",
        category: "Mounting Structures",
        price: 250,
        description: "35mm Mid Clamp for Solar Panels",
        image: "https://voltaconsolar.com/cdn/shop/products/middle-clamp-35mm-for-solar-panel-mounting-rails-361511.jpg?v=1709566514"
    },
    {
        id: 104,
        name: "End Clamp 35mm",
        category: "Mounting Structures",
        price: 250,
        description: "35mm End Clamp for Solar Panels",
        image: "https://www.gemani.co.ke/wp-content/uploads/2022/09/end-clamp_2.jpg"
    },
    {
        id: 105,
        name: "Splicing Kit/Rail Connector 150mm",
        category: "Mounting Structures",
        price: 300,
        description: "150mm Splicing Kit/Rail Connector",
        image: "https://ph-test-11.slatic.net/p/5de58058f2f93f6b9eda4ef3ac22e907.jpg"
    },
    {
        id: 106,
        name: "Long L-Feet Kit",
        category: "Mounting Structures",
        price: 350,
        description: "Includes L-Feet, Tmodule, M8 Screw, Bolt, EPDM Pad",
        image: "https://static.wixstatic.com/media/5623f5_a07b78c0f486471d9ba4d38d3906634a~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5623f5_a07b78c0f486471d9ba4d38d3906634a~mv2.jpg"
    },
    {
        id: 107,
        name: "Short L-Feet Kit",
        category: "Mounting Structures",
        price: 350,
        description: "Includes L-Feet, Tmodule, M8 Screw, Bolt, EPDM Pad",
        image: "https://static.wixstatic.com/media/5623f5_a07b78c0f486471d9ba4d38d3906634a~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5623f5_a07b78c0f486471d9ba4d38d3906634a~mv2.jpg"
    },
    {
        id: 108,
        name: "Mini Rails 300mm Long Plus Self Drilling Screws and EPDM Pad",
        category: "Mounting Structures",
        price: 600,
        description: "Mini Rails 300mm Long with Self Drilling Screws and EPDM Pad",
        image: "https://euntimcocdn.blob.core.windows.net/web-product-images/BML38W16_w1.jpg"
    },
    {
        id: 109,
        name: "Perforated Angle Line 2.2Mtrs",
        category: "Mounting Structures",
        price: 3000,
        description: "2.2Mtrs Perforated Angle Line",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/6/429370442/IP/NI/UF/4460671/mild-steel-framing-channel-500x500.jpg"
    },
    {
        id: 110,
        name: "Rail Clamp",
        category: "Mounting Structures",
        price: 250,
        description: "Rail Clamp for Solar Panel Mounting",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvAQJxjkXieHDyIYGBDSYhmoGL_Ck2rQiC6g&s"
    },
    {
        id: 111,
        name: "Earthing Lug",
        category: "Mounting Structures",
        price: 200,
        description: "Earthing Lug for Solar Panel Systems",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7zbPA065mD02v4gIqXzyTpfrrQ0iQIlm5UQ&s"
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
