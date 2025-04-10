// Section Management
function showSection(sectionId) {
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
  });
  document.getElementById(sectionId).classList.remove('hidden');
}

// Initialize selects on page load
document.addEventListener('DOMContentLoaded', () => {
  // GPU Select Options
  const gpuSelects = ['gpu1', 'gpu2'];
  gpuSelects.forEach(selectId => {
    const select = document.getElementById(selectId);
    if (select) {
      gpuDetails.forEach(gpu => {
        const option = document.createElement('option');
        option.value = gpu.modell;
        option.textContent = gpu.modell;
        select.appendChild(option);
      });
    }
  });

  // CPU Select Options
  const cpuSelects = ['cpu1', 'cpu2'];
  cpuSelects.forEach(selectId => {
    const select = document.getElementById(selectId);
    if (select) {
      processorDetails.forEach(cpu => {
        const option = document.createElement('option');
        option.value = cpu.modell;
        option.textContent = cpu.modell;
        select.appendChild(option);
      });
    }
  });

  // Set home screen as active
  showSection('home-screen');
});

// Processor data
const processorDetails = [
  // Intel 13th Gen
  {
    marke: "Intel",
    modell: "Core i9-13900K",
    kerne: "24 (8P + 16E)",
    threads: "32",
    basistakt: "3.0 GHz",
    boosttakt: "5.8 GHz",
    cache: "36MB L3",
    tdp: "125W",
    ddr: "DDR4/DDR5",
    pcie: "PCIe 5.0",
    preis: "599.99 €",
    benchmark: "54255"
  },
  {
    marke: "Intel",
    modell: "Core i7-13700K",
    kerne: "16 (8P + 8E)",
    threads: "24",
    basistakt: "3.4 GHz",
    boosttakt: "5.4 GHz",
    cache: "30MB L3",
    tdp: "125W",
    ddr: "DDR4/DDR5",
    pcie: "PCIe 5.0",
    preis: "419.99 €",
    benchmark: "44362"
  },
  // Intel 12th Gen
  {
    marke: "Intel",
    modell: "Core i9-12900K",
    kerne: "16 (8P + 8E)",
    threads: "24",
    basistakt: "3.2 GHz",
    boosttakt: "5.2 GHz",
    cache: "30MB L3",
    tdp: "125W",
    ddr: "DDR4/DDR5",
    pcie: "PCIe 5.0",
    preis: "449.99 €",
    benchmark: "41647"
  },
  // Intel 11th Gen
  {
    marke: "Intel",
    modell: "Core i9-11900K",
    kerne: "8",
    threads: "16",
    basistakt: "3.5 GHz",
    boosttakt: "5.3 GHz",
    cache: "16MB L3",
    tdp: "125W",
    ddr: "DDR4",
    pcie: "PCIe 4.0",
    preis: "399.99 €",
    benchmark: "24824"
  },
  // AMD Ryzen 7000
  {
    marke: "AMD",
    modell: "Ryzen 9 7950X",
    kerne: "16",
    threads: "32",
    basistakt: "4.5 GHz",
    boosttakt: "5.7 GHz",
    cache: "64MB L3",
    tdp: "170W",
    ddr: "DDR5",
    pcie: "PCIe 5.0",
    preis: "699.99 €",
    benchmark: "51215"
  },
  // AMD Ryzen 5000
  {
    marke: "AMD",
    modell: "Ryzen 9 5950X",
    kerne: "16",
    threads: "32",
    basistakt: "3.4 GHz",
    boosttakt: "4.9 GHz",
    cache: "64MB L3",
    tdp: "105W",
    ddr: "DDR4",
    pcie: "PCIe 4.0",
    preis: "549.99 €",
    benchmark: "39473"
  },
  // AMD Ryzen 3000
  {
    marke: "AMD",
    modell: "Ryzen 9 3950X",
    kerne: "16",
    threads: "32",
    basistakt: "3.5 GHz",
    boosttakt: "4.7 GHz",
    cache: "64MB L3",
    tdp: "105W",
    ddr: "DDR4",
    pcie: "PCIe 4.0",
    preis: "449.99 €",
    benchmark: "32768"
  }
];

// Processor image URLs
const processorImages = {
  'Core i9-13900K': 'https://www.intel.com/content/dam/products/hero/foreground/processor-box-13th-gen-core-i9-unlocked-1x1.png',
  'Core i7-13700K': 'https://www.intel.com/content/dam/products/hero/foreground/processor-box-13th-gen-core-i7-unlocked-1x1.png',
  'Core i9-12900K': 'https://www.intel.com/content/dam/products/hero/foreground/processor-box-12th-gen-core-i9-unlocked-1x1.png',
  'Core i9-11900K': 'https://www.intel.com/content/dam/products/hero/foreground/processor-box-11th-gen-core-i9-unlocked-1x1.png',
  'Ryzen 9 7950X': 'https://www.amd.com/system/files/processor-ryzen-9-7950x.png',
  'Ryzen 9 5950X': 'https://www.amd.com/system/files/processor-ryzen-9-5950x.png',
  'Ryzen 9 3950X': 'https://www.amd.com/system/files/processor-ryzen-9-3950x.png'
};

// GPU image URLs and details from VideoCardBenchmark.net
const gpuDetails = [
  { 
    modell: 'RTX 4090', 
    manufacturer: 'Nvidia',
    architecture: 'Ada Lovelace',
    memory: '24GB GDDR6X',
    memoryBus: '384-bit',
    baseClock: '2.23 GHz',
    boostClock: '2.52 GHz',
    cudaCores: '16384',
    rtCores: '144',
    tensorCores: '576',
    tdp: '450W',
    pcie: 'PCIe 4.0',
    benchmark: '37137',
    preis: '1599 €'
  },
  {
    modell: 'RTX 4080',
    manufacturer: 'Nvidia',
    architecture: 'Ada Lovelace',
    memory: '16GB GDDR6X',
    memoryBus: '256-bit',
    baseClock: '2.21 GHz',
    boostClock: '2.51 GHz',
    cudaCores: '9728',
    rtCores: '76',
    tensorCores: '304',
    tdp: '320W',
    pcie: 'PCIe 4.0',
    benchmark: '29932',
    preis: '1199 €'
  },
  {
    modell: 'RX 7900 XTX',
    manufacturer: 'AMD',
    architecture: 'RDNA 3',
    memory: '24GB GDDR6',
    memoryBus: '384-bit',
    baseClock: '1.9 GHz',
    boostClock: '2.5 GHz',
    streamProcessors: '12288',
    rayAccelerators: '96',
    aiAccelerators: '192',
    tdp: '355W',
    pcie: 'PCIe 4.0',
    benchmark: '32318',
    preis: '999 €'
  },
  {
    modell: 'RX 7900 XT',
    manufacturer: 'AMD',
    architecture: 'RDNA 3',
    memory: '20GB GDDR6',
    memoryBus: '320-bit',
    baseClock: '1.5 GHz',
    boostClock: '2.4 GHz',
    streamProcessors: '10752',
    rayAccelerators: '84',
    aiAccelerators: '168',
    tdp: '315W',
    pcie: 'PCIe 4.0',
    benchmark: '29774',
    preis: '899 €'
  }
];

const gpuImages = {
  'RTX 4090': 'https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-4090.png',
  'RTX 4080': 'https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-4080.png',
  'RTX 4070 Ti': 'https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-4070-ti.png',
  'RTX 4070': 'https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-4070.png',
  'RTX 3090 Ti': 'https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3090-ti.png',
  'RTX 3090': 'https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3090.png',
  'RTX 3080 Ti': 'https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3080-ti.png',
  'RTX 3080': 'https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3080.png',
  'RTX 3070 Ti': 'https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3070-ti.png',
  'RTX 3070': 'https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3070.png',
  'RX 7900 XTX': 'https://www.amd.com/system/files/products/7900xtx.png',
  'RX 7900 XT': 'https://www.amd.com/system/files/products/7900xt.png',
  'RX 7800 XT': 'https://www.amd.com/system/files/products/7800xt.png',
  'RX 7700 XT': 'https://www.amd.com/system/files/products/7700xt.png',
  'RX 6950 XT': 'https://www.amd.com/system/files/products/6950xt.png',
  'RX 6900 XT': 'https://www.amd.com/system/files/products/6900xt.png',
  'RX 6800 XT': 'https://www.amd.com/system/files/products/6800xt.png',
  'RX 6800': 'https://www.amd.com/system/files/products/6800.png',
  'RX 6700 XT': 'https://www.amd.com/system/files/products/6700xt.png'
};


function zeigeProcessorVergleich() {
  const select1 = document.getElementById("cpu1");
  const select2 = document.getElementById("cpu2");
  const modell1 = select1.value;
  const modell2 = select2.value;

  if (modell1 === modell2) {
    document.getElementById("processorVergleichTabelle").innerHTML =
      "<p style='text-align:center; color:var(--accent-color);'>Bitte wähle zwei unterschiedliche Prozessoren aus.</p>";
    return;
  }

  const cpu1 = processorDetails.find(cpu => cpu.modell === modell1);
  const cpu2 = processorDetails.find(cpu => cpu.modell === modell2);

  if (cpu1 && cpu2) {
    let html = "<div class='comparison-container'>";

    // Add CPU images
    html += "<div style='display: flex; justify-content: space-around; margin-bottom: 20px;'>";
    html += `<div style='text-align: center;'><img src='${processorImages[cpu1.modell]}' alt='${cpu1.modell}' class='cpu-image'><h3>${cpu1.modell}</h3></div>`;
    html += `<div style='text-align: center;'><img src='${processorImages[cpu2.modell]}' alt='${cpu2.modell}' class='cpu-image'><h3>${cpu2.modell}</h3></div>`;
    html += "</div>";

    html += "<table class='comparison-table'>";
    html += "<thead><tr><th>Spezifikation</th><th>" + cpu1.modell + "</th><th>" + cpu2.modell + "</th></tr></thead>";
    html += "<tbody>";

    // Specs
    html += "<tr class='category-header'><td colspan='3'>Grundlegende Spezifikationen</td></tr>";
    html += "<tr><td>Hersteller</td><td>" + cpu1.marke + "</td><td>" + cpu2.marke + "</td></tr>";
    html += "<tr><td>Kerne</td><td>" + cpu1.kerne + "</td><td>" + cpu2.kerne + "</td></tr>";
    html += "<tr><td>Threads</td><td>" + cpu1.threads + "</td><td>" + cpu2.threads + "</td></tr>";
    html += "<tr><td>Basis-Takt</td><td>" + cpu1.basistakt + "</td><td>" + cpu2.basistakt + "</td></tr>";
    html += "<tr><td>Boost-Takt</td><td>" + cpu1.boosttakt + "</td><td>" + cpu2.boosttakt + "</td></tr>";
    html += "<tr><td>Cache</td><td>" + cpu1.cache + "</td><td>" + cpu2.cache + "</td></tr>";
    html += "<tr><td>TDP</td><td>" + cpu1.tdp + "</td><td>" + cpu2.tdp + "</td></tr>";

    // Technology
    html += "<tr class='category-header'><td colspan='3'>Technologie-Features</td></tr>";
    html += "<tr><td>RAM Support</td><td>" + cpu1.ddr + "</td><td>" + cpu2.ddr + "</td></tr>";
    html += "<tr><td>PCIe Version</td><td>" + cpu1.pcie + "</td><td>" + cpu2.pcie + "</td></tr>";

    // Performance & Price
    html += "<tr class='category-header'><td colspan='3'>Performance & Preis</td></tr>";
    html += "<tr><td>Benchmark Score</td><td>" + cpu1.benchmark + "</td><td>" + cpu2.benchmark + "</td></tr>";
    html += "<tr class='price-row'><td>Preis</td><td>" + cpu1.preis + "</td><td>" + cpu2.preis + "</td></tr>";

    html += "</tbody></table>";

    // Performance comparison bars
    html += "<div class='performance-comparison'>";
    html += "<h3>Performance-Vergleich</h3>";
    const benchmark1 = parseInt(cpu1.benchmark);
    const benchmark2 = parseInt(cpu2.benchmark);
    const maxBenchmark = Math.max(benchmark1, benchmark2);

    html += "<div class='benchmark-bars'>";
    html += "<div class='bar-container'>";
    html += "<div class='bar' style='width: " + (benchmark1 / maxBenchmark * 100) + "%'></div>";
    html += "<span>" + cpu1.modell + ": " + benchmark1 + " Punkte</span>";
    html += "</div>";
    html += "<div class='bar-container'>";
    html += "<div class='bar' style='width: " + (benchmark2 / maxBenchmark * 100) + "%'></div>";
    html += "<span>" + cpu2.modell + ": " + benchmark2 + " Punkte</span>";
    html += "</div>";
    html += "</div>";
    html += "</div>";

    html += "</div>";
    document.getElementById("processorVergleichTabelle").innerHTML = html;
  }
}

function zeigeVergleich() {
  const select1 = document.getElementById("gpu1");
  const select2 = document.getElementById("gpu2");
  const modell1 = select1.value;
  const modell2 = select2.value;

  if (modell1 === modell2) {
    document.getElementById("gpuVergleichTabelle").innerHTML =
      "<p style='text-align:center; color:var(--accent-color);'>Bitte wähle zwei unterschiedliche GPUs aus.</p>";
    return;
  }

  const gpu1 = gpuDetails.find(gpu => gpu.modell === modell1);
  const gpu2 = gpuDetails.find(gpu => gpu.modell === modell2);

  if (gpu1 && gpu2) {
    let html = "<div class='comparison-container'>";

    // Add GPU images
    html += "<div style='display: flex; justify-content: space-around; margin-bottom: 20px;'>";
    html += `<div style='text-align: center;'><img src='${gpuImages[gpu1.modell]}' alt='${gpu1.modell}' class='gpu-image'><h3>${gpu1.modell}</h3></div>`;
    html += `<div style='text-align: center;'><img src='${gpuImages[gpu2.modell]}' alt='${gpu2.modell}' class='gpu-image'><h3>${gpu2.modell}</h3></div>`;
    html += "</div>";

    html += "<table class='comparison-table'>";
    html += "<thead><tr><th>Spezifikation</th><th>" + gpu1.modell + "</th><th>" + gpu2.modell + "</th></tr></thead>";
    html += "<tbody>";
    
    // Basic Specifications
    html += "<tr class='category-header'><td colspan='3'>Grundlegende Spezifikationen</td></tr>";
    html += "<tr><td>Hersteller</td><td>" + gpu1.manufacturer + "</td><td>" + gpu2.manufacturer + "</td></tr>";
    html += "<tr><td>Architektur</td><td>" + gpu1.architecture + "</td><td>" + gpu2.architecture + "</td></tr>";
    html += "<tr><td>Basis-Takt</td><td>" + gpu1.baseClock + "</td><td>" + gpu2.baseClock + "</td></tr>";
    html += "<tr><td>Boost-Takt</td><td>" + gpu1.boostClock + "</td><td>" + gpu2.boostClock + "</td></tr>";
    
    // Memory Specifications
    html += "<tr class='category-header'><td colspan='3'>Speicher-Spezifikationen</td></tr>";
    html += "<tr><td>Speicher</td><td>" + gpu1.memory + "</td><td>" + gpu2.memory + "</td></tr>";
    html += "<tr><td>Speicherbus</td><td>" + gpu1.memoryBus + "</td><td>" + gpu2.memoryBus + "</td></tr>";
    
    // Processing Units
    html += "<tr class='category-header'><td colspan='3'>Recheneinheiten</td></tr>";
    if (gpu1.manufacturer === 'Nvidia' && gpu2.manufacturer === 'Nvidia') {
      html += "<tr><td>CUDA Kerne</td><td>" + gpu1.cudaCores + "</td><td>" + gpu2.cudaCores + "</td></tr>";
      html += "<tr><td>RT Kerne</td><td>" + gpu1.rtCores + "</td><td>" + gpu2.rtCores + "</td></tr>";
      html += "<tr><td>Tensor Kerne</td><td>" + gpu1.tensorCores + "</td><td>" + gpu2.tensorCores + "</td></tr>";
    } else if (gpu1.manufacturer === 'AMD' && gpu2.manufacturer === 'AMD') {
      html += "<tr><td>Stream Prozessoren</td><td>" + gpu1.streamProcessors + "</td><td>" + gpu2.streamProcessors + "</td></tr>";
      html += "<tr><td>Ray Accelerators</td><td>" + gpu1.rayAccelerators + "</td><td>" + gpu2.rayAccelerators + "</td></tr>";
      html += "<tr><td>AI Accelerators</td><td>" + gpu1.aiAccelerators + "</td><td>" + gpu2.aiAccelerators + "</td></tr>";
    } else {
      html += "<tr><td>Processing Units</td><td>" + (gpu1.cudaCores || gpu1.streamProcessors) + "</td><td>" + (gpu2.cudaCores || gpu2.streamProcessors) + "</td></tr>";
    }
    
    // Power & Interface
    html += "<tr class='category-header'><td colspan='3'>Stromverbrauch & Schnittstelle</td></tr>";
    html += "<tr><td>TDP</td><td>" + gpu1.tdp + "</td><td>" + gpu2.tdp + "</td></tr>";
    html += "<tr><td>PCIe Version</td><td>" + gpu1.pcie + "</td><td>" + gpu2.pcie + "</td></tr>";
    
    // Performance & Price
    html += "<tr class='category-header'><td colspan='3'>Performance & Preis</td></tr>";
    html += "<tr><td>Benchmark Score</td><td>" + gpu1.benchmark + "</td><td>" + gpu2.benchmark + "</td></tr>";
    html += "<tr class='price-row'><td>Preis</td><td>" + gpu1.preis + "</td><td>" + gpu2.preis + "</td></tr>";
    
    html += "</tbody></table>";

    document.getElementById("gpuVergleichTabelle").innerHTML = html;
  }
}