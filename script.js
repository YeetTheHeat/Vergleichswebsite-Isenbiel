// GPU image URLs - replace with actual image URLs
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

    //  Comparison table code (needs to be added from original, which is currently missing)
    html += "<table class='comparison-table'>";
    html += "</table>"; //Placeholder - needs actual table data
    document.getElementById("gpuVergleichTabelle").innerHTML = html;
  }
}