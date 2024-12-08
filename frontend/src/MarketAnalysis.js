import React, { useState, useEffect, useRef } from 'react';
import Gujaratagri from './assets/images/Gujaratagri.jpg'; // Adjust the path as necessary
import Image2 from './assets/images/agri.jpg'; // Add your second image
import Image3 from './assets/images/agri2.jpg'; // Add your third image
import MarketAnalyImage from './assets/images/marketanaly.jpeg'; // New image
import AgriImage from './assets/images/agriintro.jpg'; // Image for the snapshot section
import { yellow } from '@mui/material/colors';
import stats from './assets/images/statsagri.jpeg'
import { Chart, registerables } from 'chart.js';
import infogrph from "./assets/images/agristats1.jpeg"
import infogrph1 from "./assets/images/agriproduction.jpeg"
import gujagro from "./assets/images/gujaratagro.jpeg"
import infographicsImage from './assets/images/Infographics.jpeg'; // Path to your infographics image

Chart.register(...registerables);

const images = [Gujaratagri, Image2, Image3]; // Array of images for the slider

const sectors = [
    'Agriculture and Allied Industries',
    'Gems and Jewelleries',
    'Textile Industry',
]; // Array of sectors for the dropdown

const MarketAnalysis = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to manage current image index
    const [isOpen, setIsOpen] = useState(false); // Dropdown visibility
    const [activeTab, setActiveTab] = useState('SNAPSHOT'); // State to manage active tab
    const [isVisible, setIsVisible] = useState(false); // State to manage visibility for animation
    const [selectedSector, setSelectedSector] = useState('Choose Sector'); // Default sector
    const [showImage, setShowImage] = useState(false); // State to control image visibility

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Change image every 5 seconds
        }, 5000); // Change the duration as needed

        // Trigger the sliding animation after the component mounts
        setIsVisible(true);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const toggleDropdown = () => setIsOpen((prev) => !prev);
    const handleSectorSelect = (sector) => {
        setSelectedSector(sector);
        setIsOpen(false); // Close dropdown after selection
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab); // Update the active tab
        if (tab === 'REPORTS') {
            setShowImage(true); // Show image when Reports tab is clicked
        } else {
            setShowImage(false); // Hide image for other tabs
        }
    };

    const styles = {
        header: {
            position: 'relative',
            textAlign: 'center',
            padding: '50px 20px',
            backgroundImage: `url(${images[currentImageIndex]})`, // Use the current image
            backgroundSize: 'cover', // Cover the entire header
            backgroundPosition: 'center', // Center the image
            color: 'white', // Change text color for better visibility
            minHeight: '50vh', // Set height for the header
            transition: 'background-image 0.5s ease-in-out', // Smooth transition for background image
        },
        overlay: {
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better text visibility
            zIndex: 1,
        },
        title: {
            fontSize: '3rem', // Increased font size for emphasis
            marginBottom: '20px',
            position: 'relative',
            zIndex: 2, // Ensure title is above the overlay
            fontWeight: 'bold', // Make the title bold
            textTransform: 'uppercase', // Make the text uppercase
            letterSpacing: '2px', // Add letter spacing for a more modern look
            fontFamily: 'Roboto, sans-serif', // Use the imported font
            color: '#FFD700', // Change title color to gold
            opacity: isVisible ? 1 : 0, // Fade in effect
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)', // Slide in effect
            transition: 'opacity 0.5s ease, transform 0.5s ease', // Animation for opacity and transform
        },
        description: {
            fontSize: '1.5rem', // Increased font size for better readability
            marginBottom: '30px',
            position: 'relative',
            zIndex: 2, // Ensure description is above the overlay
            fontWeight: '400', // Normal weight for description
            textAlign: 'center', // Center the description
            fontFamily: 'Open Sans, sans-serif', // Use the imported font
            color: '#FFFFFF', // Change description color to white
            opacity: isVisible ? 1 : 0, // Fade in effect
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)', // Slide in effect
            transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s', // Animation for opacity and transform
        },
        marketImage: {
            width: '100%', // Make the image responsive
            height: 'auto', // Maintain aspect ratio
            marginTop: '20px', // Space above the image
        },
        tabContainer: {
            display: 'flex',
            justifyContent: 'center',
            margin: '20px 0',
        },
        tab: {
            padding: '10px 20px',
            cursor: 'pointer',
            backgroundColor: activeTab === 'SNAPSHOT' ? '#ff9800' : '#f8f9fa', // Highlight active tab
            color: activeTab === 'SNAPSHOT' ? '#fff' : '#000', // Change text color based on active tab
            border: '1px solid #ccc',
            borderRadius: '5px',
            margin: '0 5px',
            transition: 'background-color 0.3s ease',
        },
        content: {
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        dropdownContainer: {
            position: 'relative',
            display: 'inline-block',
        },
        dropdown: {
            padding: '10px 20px',
            cursor: 'pointer',
            backgroundColor: '#f8f9fa',
            border: '1px solid #ccc',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
        },
        dropdownMenu: {
            position: 'absolute',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            zIndex: 2,
            marginTop: '5px',
        },
        dropdownItem: {
            padding: '10px 20px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ',
        },
        dropdownItemHover: {
            backgroundColor: '#ffee58', // Change background on hover
        },
    };

    // Chart.js setup
    const marketSizeChartRef = useRef(null);
    const productionChartRef = useRef(null);

    useEffect(() => {
        if (marketSizeChartRef.current && productionChartRef.current) {
            const ctx1 = marketSizeChartRef.current.getContext('2d');
            const marketSizeChart = new Chart(ctx1, {
                type: 'bar',
                data: {
                    labels: ['FY18', 'FY19', 'FY20', 'FY21', 'FY22', 'FY23', 'FY24'],
                    datasets: [{
                        label: 'Gross Value Added (US$ billion)',
                        data: [283.68, 267.90, 276.37, 279.00, 259.71, 288.78, 277.01],
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Value (US$ billion)'
                            }
                        }
                    }
                }
            });

            const ctx2 = productionChartRef.current.getContext('2d');
            const productionChart = new Chart(ctx2, {
                type: 'pie',
                data: {
                    labels: ['Wheat', 'Pulses', 'Oilseeds', 'Coarse Cereals'],
                    datasets: [{
                        label: 'Rabi Area Sown in 2023-24 (million hectares)',
                        data: [34.16, 11.10, 5.74, 3.93],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)'
                        ],
                        borderWidth: 1,
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Rabi Area Sown in 2023-24'
                        }
                    }
                }
            });

            return () => {
                marketSizeChart.destroy();
                productionChart.destroy();
            };
        }
    }, [activeTab]); // Ensure effect runs when activeTab changes

    return (
        <div>
            <div style={styles.header}>
                <div style={styles.overlay}></div>
                <h1 style={styles.title}>Transforming the Textile Industry: Unleashing Market Growth in Gujarat!</h1>
                <p style={styles.description}>
                    The Gujarat textiles and apparel market is set to transform, projected to reach US$ 350 billion by 2030 with exports hitting US$100 billion!
                </p>
                <div style={{ position: 'relative', display: 'inline-block', zIndex: 2 }}>
                    <button
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#FFD700',
                            color: '#000',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                        }}
                        onClick={toggleDropdown}
                    >
                        {selectedSector} <span>&#9660;</span>
                    </button>
                    {isOpen && (
                        <div
                            style={{
                                position: 'absolute',
                                backgroundColor: '#fff',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                zIndex: 3,
                                marginTop: '5px',
                                textAlign: 'left',
                            }}
                        >
                            {sectors.map((sector) => (
                                <div
                                    key={sector}
                                    style={{
                                        padding: '10px 20px',
                                        cursor: 'pointer',
                                        borderBottom: '1px solid #ddd',
                                    }}
                                    onClick={() => handleSectorSelect(sector)}
                                >
                                    {sector}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* New Banner Section (Before Image) */}
            <div style={{
                backgroundColor: '#ff9800', // Orange background
                padding: '20px',
                textAlign: 'center',
                color: '#FFFFFF', // White text color
                fontSize: '2rem', // Font size
                fontWeight: 'bold', // Bold text
                textTransform: 'uppercase', // Uppercase text
                borderRadius: '0 0 20px 20px', // Rounded corners
                marginTop: '-5px', // Adjust margin as needed
            }}>
                Advantage Gujarat
            </div>

            {/* Image Section */}
            <img src={MarketAnalyImage} alt="Market Analysis" style={styles.marketImage} />

            {/* Tab Navigation */}
            <div style={styles.tabContainer}>
                {['SNAPSHOT', 'SHOWCASE', 'INFOGRAPHICS', 'REPORTS', 'RELATED NEWS'].map((tab) => (
                    <div
                        key={tab}
                        style={{
                            ...styles.tab,
                            ...(activeTab === tab ? styles.tabHover : {}),
                        }}
                        onClick={() => handleTabClick(tab)}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ff9800'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activeTab === tab ? '#ff9800' : '#f8f9fa'}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            

            {/* Tab Content */}
            <div style={styles.content}>
                {activeTab === 'SNAPSHOT' && (
                    <div style={{ display: 'flex', padding: '20px', textAlign: 'left' }}>
                        <div style={{ flex: 1 }}>
                            <h2 style={{ color: 'green' }}>Agriculture and Allied Industries Industry Report</h2>
                            <p>Aug, 2024</p>
                            <h3>INTRODUCTION</h3>
                            <p>
                                Gross State Domestic Product (GSDP) for the agriculture sector in Gujarat from FY 2012 to FY 2022, showcasing a consistent growth trajectory over the decade. The GSDP increased from ₹0.8 trillion in FY 2012 to ₹1.76 trillion in FY 2022, reflecting sustained development in Gujarat's agricultural sector. Despite a decline in FY 2013 to ₹0.68 trillion and a stagnation phase between FY 2015 and FY 2016 at ₹0.94 trillion, the sector witnessed significant recovery and growth from FY 2017 onwards. Major milestones include a notable increase in FY 2020 to ₹1.48 trillion, followed by ₹1.61 trillion in FY 2021, before peaking at ₹1.76 trillion in FY 2022.
                            </p>
                            <p>
                                This growth has been driven by various factors, including robust state policies like the Sujalam Sufalam Yojana for irrigation and the Krishi Mahotsav initiative, which promoted modern farming techniques. Investments in water resource management, such as the Narmada Canal and micro-irrigation systems, provided crucial support for agriculture. Additionally, technological advancements like GIS mapping, AI-based crop monitoring, and drones enhanced efficiency and productivity. Gujarat's focus on crop diversification, including high-value crops such as cotton, groundnut, and cereals, along with an increase in horticulture production, further contributed to this growth.
                            </p>
                            <p>
                                The state’s strong supply chains and market linkages also enabled farmers to access domestic and international markets, boosting exports of key products like cotton, spices, marine products, and processed food items. In FY 2022-23, Gujarat emerged as a leader in agricultural exports, benefiting from the increasing global demand for its high-quality produce. Investments and foreign direct investment (FDI) in agriculture and food processing have further strengthened Gujarat’s position.
                            </p>
                            <p>
                                Overall, the consistent rise in agricultural GSDP highlights Gujarat’s strategic focus on sustainable farming practices, modern technology adoption, and export-oriented growth. This growth positions Gujarat as a model state in agricultural development and a significant contributor to India’s agrarian economy.
                            </p>

                            {/* Market Size Section */}
                            <h3 style={{ color: 'green' }}>MARKET SIZE</h3>
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: 1 }}>
                                    <h4>Market Size Statistics</h4>
                                    <p>
                                        According to Inc42, the Indian agricultural sector is predicted to increase to US$ 24 billion by 2025. Indian food and grocery market is the world’s sixth largest, with retail contributing 70% of the sales.
                                    </p>
                                    <p>
                                        As per the First Advance Estimates for 2023-24 (Kharif only), total foodgrain production in the country is estimated at 148.5 million tonnes.
                                    </p>
                                    <p>
                                        Rabi crop area has from 709.09 lakh hectares in 2022-23 to 709.29 lakh hectares in 2022-23.
                                    </p>
                                    <p>
                                        In 2022-23 (as per the second advance estimate), India's horticulture output is expected to have hit a record 351.92 million tonnes (MT), an increase of about 4.74 million tonnes (1.37%) as compared to the year 2021-22.
                                    </p>
                                    <p>
                                        The Agriculture and Allied industry sector witnessed some major developments, investments, and support from the Government in the recent past. Between April 2000-March 2024, FDI in agriculture services stood at US$ 3.08 billion.
                                    </p>
                                    <p>
                                        According to the Department for Promotion of Industry and Internal Trade (DPIIT), the Indian food processing industry has cumulatively attracted a Foreign Direct Investment (FDI) equity inflow of about US$ 12.58 billion between April 2000-March 2024. This accounts for 1.85% of total FDI inflows received across industries.
                                    </p>
                                    <p>
                                        During 2024-25 (April-May), processed vegetables accounted for US$ 122.91 million, miscellaneous processed items accounted for US$ 302.07 million and processed fruits & juices accounted for US$ 143.51 million.
                                    </p>
                                    <p>
                                        Rapid population expansion in India is the main factor driving the industry. The rising income levels in rural and urban areas, which have contributed to an increase in the demand for agricultural products across the nation, provide additional support for this. In accordance with this, the market is being stimulated by the growing adoption of cutting-edge techniques including biotechnology, artificial intelligence (AI), e-commerce platforms, etc.
                                    </p>
                                </div>
                                <img src={stats} alt="Market Size Statistics" style={{ width: '500px', height: '300px', objectFit: 'cover', marginLeft: '20px' }} />
                            </div>
                        </div>
                        <img src={AgriImage} alt="Agriculture in Gujarat" style={{ width: '300px', height: '300px', objectFit: 'cover', marginLeft: '20px' }} />
                    </div>
                )}
                {activeTab === 'SHOWCASE' && (
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                            <h2 style={{ color: 'green' }}>GODREJ AGROVET</h2>
                            <p>
                                Godrej Agrovet is part of Godrej Group, one of the largest Indian conglomerates. The company has interests in diversified agriculture-related businesses. It operates across five business verticals which include animal feed, crop protection, oil palm, dairy and poultry and processed foods. Animal feed is the largest business of the company, contributing over 51.1% of its revenues till the third quarter of FY24. It is one of the largest organized players in India's compound animal feed market.
                            </p>
                            <p>The revenue of the company reached Rs. 2,144.47 crore (US$ 257.7 million) in the fourth quarter of FY24.</p>
                            <p>The consolidated net profit of the company reached Rs. 65.48 crore (US$ 7.9 million) in the fourth quarter of FY24.</p>
                            <a href="#" style={{ color: 'blue', textDecoration: 'underline' }}>Company Website</a>
                            <button style={{ marginTop: '10px', padding: '5px 10px' }}>Read More</button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                            <h2 style={{ color: 'green' }}>RALLIS INDIA</h2>
                            <p>
                                Rallis, a Tata Enterprise, is a subsidiary of Tata Chemicals, with its business presence in the farm essentials vertical. It is one of India’s leading crop care companies. The company’s 6,000+ dealers and 70,000+ retailers reach a vast multitude of India's farmers covering more than 80% of India's districts and exports to over 58 countries. Rallis is known for its deep understanding of Indian agriculture, sustained contact with farmers, quality agrochemicals, branding and marketing expertise and its strong product portfolio of comprehensive crop care solutions. Agricultural solutions from the company benefit more than five million farmers.
                            </p>
                            <p>The net profit of the company reached Rs. 48 crore (US$ 5.8 million) in the first quarter of FY25.</p>
                            <a href="#" style={{ color: 'blue', textDecoration: 'underline' }}>Company Website</a>
                            <button style={{ marginTop: '10px', padding: '5px 10px' }}>Read More</button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                            <h2 style={{ color: 'green' }}>BRITANNIA INDUSTRIES LTD</h2>
                            <p>
                                Britannia is one of the leading food companies in India with a legacy of more than 100 years. Today, it is among the most trusted food brands in India. Its portfolio includes biscuits, bread, cakes, rusk, and dairy products including cheese, beverages, milk, and yogurt. It is the largest brand in the organised bread market. The company has a reach across five million retail outlets and 50% of the Indian households through its range of products.
                            </p>
                            <p>The consolidated net profit of the company reached Rs. 504.88 crore (US$ 60.7 million) in the first quarter of FY25.</p>
                            <a href="#" style={{ color: 'blue', textDecoration: 'underline' }}>Company Website</a>
                            <button style={{ marginTop: '10px', padding: '5px 10px' }}>Read More</button>
                        </div>
                    </div>
                )}
                {activeTab === 'INFOGRAPHICS' && (
                    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                        <h2 style={{ color: 'green', textAlign: 'center' }}>Agriculture and Allied Industries Infographics</h2>
                        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginBottom: '20px' }}>
                            <div style={{ width: '45%', marginBottom: '20px' }}>
                                <canvas ref={marketSizeChartRef}></canvas>
                                <p style={{ textAlign: 'center', marginTop: '10px' }}>Gross Value Added (US$ billion) over the years.</p>
                            </div>
                            <div style={{ width: '45%', height: '300px', marginBottom: '20px' }}>
                                <canvas ref={productionChartRef} style={{ height: '100%' }}></canvas>
                                <p style={{ textAlign: 'center', marginTop: '10px' }}>Rabi Area Sown in 2023-24 by crop type.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '20px' }}>
                            <img src={gujagro} alt="Focus Crops Cluster of Gujarat" style={{ width: '600px', marginRight: '20px' }} />
                            <div style={{ marginLeft: '20px' }}>
                                <h2 style={{ color: 'green' }}>Advantage Gujarat</h2>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                    <li>8 Agro-climatic zones</li>
                                    <li>Diversity of climate and cropping</li>
                                    <li>40+ major crops</li>
                                    <li>Strong market infrastructure system</li>
                                    <li>Increasing adoption of Hi-tech Agriculture</li>
                                    <li>1600 km of long coastal belt</li>
                                    <li>Total Geographical Area: 19.6 million ha</li>
                                    <li>Net Area Sown: 9 million ha</li>
                                    <li>Total Cropped Area: 13.9 million ha</li>
                                    <li>Net Irrigated Area: 4.32 million ha</li>
                                </ul>
                            </div>
                        </div>
                        <img src={infogrph} alt="Agriculture Stats" style={{ width: '600px', marginTop: '20px' }} />
                        <img src={infogrph1} alt="Agriculture Production" style={{ width: '600px', marginTop: '20px', paddingLeft:'50px' }} />
                       
                    </div>
                )}
                {activeTab === 'REPORTS' && (
                    <div style={{ padding: '20px', textAlign: 'center' }}>
                        <h2 style={{ color: 'green' }}>Infographics Report</h2>
                        <img
                            src={infographicsImage}
                            alt="Infographics"
                            style={{
                                width: '100%', // Ensure the image takes full width
                                height: 'auto', // Maintain aspect ratio
                                maxWidth: '800px', // Optional: limit max width for better appearance
                            }}
                        />
                    </div>
                )}
                {activeTab === 'RELATED NEWS' && (
                    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                        <h2 style={{ color: 'green', textAlign: 'center' }}>Related News</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {[
                                {
                                    date: '4 Dec 24',
                                    title: "India's advancing role in global trade competitiveness...",
                                    content: "India strengthens its global trade dominance with significant export growth in petroleum oils, agrochemicals, semiconductors, and precious stones, supported by Make in India and production-linked incentives."
                                },
                                {
                                    date: '3 Dec 24',
                                    title: "Why the biomass industry is booming in India...",
                                    content: "India is rapidly becoming a global leader in biomass energy, with over 200 GW of installed capacity, supporting renewable energy goals and rural economic development while addressing pollution from crop residue burning."
                                },
                                {
                                    date: '25 Nov 24',
                                    title: "India proposes seven key pillars to expand ties with Caribbean as leader of Global South...",
                                    content: "Prime Minister Mr. Narendra Modi outlined seven pillars to strengthen India-Caricom ties, including healthcare, food security, and renewable energy, as India and Guyana signed 10 MoUs across key sectors for enhanced cooperation."
                                },
                                {
                                    date: '13 Nov 24',
                                    title: "India secures position in top 10 countries in Patents, Trademarks, and Industrial Designs: WIPO 2024 Report...",
                                    content: "India ranks sixth globally in patent filings, with a 15.7% growth in applications and a 36.4% rise in industrial design filings, showcasing rapid progress in its intellectual property ecosystem."
                                },
                                {
                                    date: '6 Nov 24',
                                    title: "Government estimates record 119.93 mt rice output for the year 2024-25 Kharif season...",
                                    content: "India's rice production is set to reach a record 119.93 million tonnes in the 2024-25 kharif season, driven by favourable monsoon conditions and increased acreage, while total foodgrain production is estimated at 164.70 million tonnes."
                                },
                            ].map((news, index) => (
                                <div key={index} style={{
                                    border: '1px solid #ccc',
                                    borderRadius: '5px',
                                    padding: '15px',
                                    backgroundColor: '#f9f9f9',
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    cursor: 'pointer',
                                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
                                }}>
                                    <h3 style={{ margin: '0', color: '#333' }}>{news.date}</h3>
                                    <h4 style={{ margin: '5px 0', color: 'green' }}>{news.title}</h4>
                                    <p style={{ margin: '0', color: '#555' }}>{news.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MarketAnalysis;
