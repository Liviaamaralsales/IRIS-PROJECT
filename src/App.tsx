/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft, Plus, X, Activity, ShieldAlert, Radio } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

// Definição do tipo para os dados da região
interface RegionData {
  id: string;
  name: string;
  alert: 'High' | 'Medium' | 'Low';
  sensors: number;
  description: string;
  lastUpdate: string;
  coordinates: { top: string; left: string };
}

// Dados simulados das regiões do Brasil
const REGIONS: RegionData[] = [
  { 
    id: 'north', 
    name: 'North Region', 
    alert: 'Low', 
    sensors: 154, 
    description: 'Stable conditions. Monitoring focused on remote forest areas. Low incidence of vector-borne diseases reported this month.',
    lastUpdate: '10 mins ago',
    coordinates: { top: '25%', left: '30%' }
  },
  { 
    id: 'northeast', 
    name: 'Northeast Region', 
    alert: 'Medium', 
    sensors: 287, 
    description: 'Increased mosquito activity detected in coastal urban centers. Preventive measures are being reinforced in local clinics.',
    lastUpdate: '2 hours ago',
    coordinates: { top: '35%', left: '75%' }
  },
  { 
    id: 'central', 
    name: 'Central-West', 
    alert: 'High', 
    sensors: 192, 
    description: 'Critical alert in Tocantins (TO). High concentration of rodent activity in urban drainage systems. Immediate intervention recommended.',
    lastUpdate: 'Just now',
    coordinates: { top: '50%', left: '50%' }
  },
  { 
    id: 'southeast', 
    name: 'Southeast Region', 
    alert: 'Medium', 
    sensors: 512, 
    description: 'High density monitoring active. Seasonal variations within expected limits, but vigilance remains high in metropolitan areas.',
    lastUpdate: '45 mins ago',
    coordinates: { top: '70%', left: '65%' }
  },
  { 
    id: 'south', 
    name: 'South Region', 
    alert: 'Low', 
    sensors: 305, 
    description: 'All sensors operational. Low risk of zoonosis transmission. Weather conditions are currently unfavorable for vector proliferation.',
    lastUpdate: '5 hours ago',
    coordinates: { top: '85%', left: '45%' }
  },
];

export default function App() {
  const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'All' | 'High' | 'Medium' | 'Low'>('All');

  // Lógica de filtragem
  const filteredRegions = REGIONS.filter(region => {
    const matchesSearch = region.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'All' || region.alert === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="app-container">
      {/* CABEÇALHO */}
      <header className="header">
        <button className="back-button">
          <ArrowLeft size={32} color="black" />
        </button>
        <h1 className="header-title">Information</h1>
      </header>

      {/* CONTAINER PRINCIPAL */}
      <main className="main-content">
        
        {/* CARD 1: MAPA DE MONITORAMENTO (INTERATIVO + FILTROS) */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
        >
          <h2 className="card-title">National Monitoring Map</h2>

          {/* CONTROLES DE BUSCA E FILTRO */}
          <div className="controls-container">
            <input 
              type="text"
              placeholder="Search region..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            
            <div className="filters-scroll">
              {['All', 'High', 'Medium', 'Low'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f as any)}
                  className={`filter-button ${filter === f ? 'active' : ''}`}
                >
                  {f} {f !== 'All' ? 'Alert' : ''}
                </button>
              ))}
            </div>
          </div>
          
          {/* Área do Mapa com Hotspots Filtrados */}
          <div className="map-container">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Mapa_do_Brasil_por_regi%C3%B5es.PNG" alt="Mapa do Brasil"
              className="map-image"
              referrerPolicy="no-referrer"
            />
            
            {/* Renderização dos Hotspots Filtrados */}
            <AnimatePresence>
              {filteredRegions.map((region) => (
                <motion.button
                  key={region.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  onClick={() => setSelectedRegion(region)}
                  style={{ top: region.coordinates.top, left: region.coordinates.left }}
                  className="hotspot"
                >
                  <span className={`ping-effect ${
                    region.alert === 'High' ? 'bg-red-alert' : region.alert === 'Medium' ? 'bg-green-alert' : 'bg-yellow-alert'
                  }`}></span>
                  
                  <div className={`marker ${
                    region.alert === 'High' ? 'bg-red-alert' : region.alert === 'Medium' ? 'bg-green-alert' : 'bg-yellow-alert'
                  }`} />
                </motion.button>
              ))}
            </AnimatePresence>

            {filteredRegions.length === 0 && (
              <div style={{ position: 'absolute', color: '#9ca3af', fontSize: '0.875rem' }}>
                No regions found for this filter.
              </div>
            )}
          </div>

          <div className="legend-grid">
            <div>
              <p className="legend-title">Sensor Distribution</p>
              <p className="legend-text">Indicated by the orange dots</p>
            </div>
            <div>
              <p className="legend-title">Region on Alert</p>
              <ul className="legend-list">
                <li className="legend-list-item">
                  <span>High alert</span>
                  <div className="legend-color-box bg-red-alert" />
                </li>
                <li className="legend-list-item">
                  <span>Medium alert</span>
                  <div className="legend-color-box bg-green-alert" />
                </li>
                <li className="legend-list-item">
                  <span>Low alert</span>
                  <div className="legend-color-box bg-yellow-alert" />
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* CARD 2: NOTÍCIAS */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card news-card"
        >
          <div className="news-accent-bar" />
          <h2 className="card-title">News Section</h2>
          <div className="news-item">
            <h3 className="news-item-title">“Dia D” de Vacinação Contra a Dengue.</h3>
            <p className="news-item-text">
              The Ministry of Health begins the national mobilization to apply the Qdenga vaccine in priority municipalities. Check the IRIS map for the health units closest to you.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button className="plus-button">
                <Plus size={24} />
              </button>
            </div>
          </div>
        </motion.section>

        {/* CARD 3: ONE HEALTH */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card one-health-card"
        >
          <h2 className="card-title">One Health</h2>
          <div className="one-health-item">
            <h3 className="news-item-title" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Zoonosis surveillance</h3>
            <p style={{ fontSize: '0.875rem', color: '#1f2937', fontWeight: 500, lineHeight: 1.6 }}>
              Expansion of AI to detect rodents in monitored drains in the Southeast. Risk of Leptospirosis reduced by 15% in areas with preventive alerts for irregular disposal.
            </p>
          </div>
        </motion.section>

      </main>

      {/* MODAL DE DETALHES DA REGIÃO */}
      <AnimatePresence>
        {selectedRegion && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRegion(null)}
              className="modal-overlay"
            />
            
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bottom-sheet"
            >
              <div className="modal-header">
                <div>
                  <h3 className="modal-title">{selectedRegion.name}</h3>
                  <p className="modal-subtitle">Last update: {selectedRegion.lastUpdate}</p>
                </div>
                <button onClick={() => setSelectedRegion(null)} className="close-button">
                  <X size={24} />
                </button>
              </div>

              <div className="stats-grid">
                <div className={`stat-card alert-${selectedRegion.alert.toLowerCase()}`}>
                  <ShieldAlert size={32} className="alert-icon" />
                  <span className="stat-label">Alert Level</span>
                  <span className="stat-value">{selectedRegion.alert}</span>
                </div>

                <div className="stat-card bg-orange-soft">
                  <Radio size={32} className="text-orange" />
                  <span className="stat-label text-orange">Active Sensors</span>
                  <span className="stat-value text-orange">{selectedRegion.sensors}</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="sensor-health-box">
                  <h4 style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Radio size={20} className="text-orange" />
                    Sensor Health Status
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 'bold', color: '#6b7280' }}>
                      <span>Operational</span>
                      <span>94%</span>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-fill" style={{ width: '94%' }} />
                    </div>
                    <div className="sensor-legend">
                      <span className="legend-item"><div className="dot" style={{ backgroundColor: '#22c55e' }} /> 145 Active</span>
                      <span className="legend-item"><div className="dot" style={{ backgroundColor: '#facc15' }} /> 6 Maintenance</span>
                      <span className="legend-item"><div className="dot" style={{ backgroundColor: '#ef4444' }} /> 3 Offline</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>Recent Regional Alerts</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      { time: '08:45 AM', event: 'Sensor #402 detected high humidity' },
                      { time: 'Yesterday', event: 'Maintenance completed on Sector 4' }
                    ].map((alert, i) => (
                      <div key={i} className="timeline-item">
                        <div className="timeline-dot" />
                        <div>
                          <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{alert.time}</p>
                          <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>{alert.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: '#eff6ff', borderRadius: '1rem', color: '#3b82f6' }}>
                    <Activity size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '0.25rem' }}>Status Analysis</h4>
                    <p style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.6 }}>
                      {selectedRegion.description}
                    </p>
                  </div>
                </div>

                <button className="primary-button">
                  Download Regional Report
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
