/**
 * HSO COMMUNITY WEB APPLICATION
 * Xử lý logic hiển thị gói VPS Mod HSO, Dịch vụ game & Bảng quy đổi thẻ Carot
 */

document.addEventListener('DOMContentLoaded', () => {
  initShopBranding();
  renderVpsPromotions(SHOP_DATA.vpsPromotions);
  renderVpsPackages(SHOP_DATA.vpsPackages);
  renderServices(SHOP_DATA.services);
  renderCarotTable(SHOP_DATA.carotExchangeTable);
  selectCalcDenom(100000);
  setupTabSwitching();
  setupModalListeners();
});

// 1. ÁP DỤNG CẤU HÌNH SHOP LÊN GIAO DIỆN
function initShopBranding() {
  const cfg = SHOP_DATA.config;
  
  const brandTitle = document.getElementById('brandTitle');
  if (brandTitle) brandTitle.textContent = cfg.shopName;
  
  const heroShopName = document.getElementById('heroShopName');
  if (heroShopName) heroShopName.textContent = cfg.shopName;

  const navZaloBtn = document.getElementById('navZaloBtn');
  if (navZaloBtn) navZaloBtn.href = cfg.zaloLink;

  const floatZaloBtn = document.getElementById('floatZaloBtn');
  if (floatZaloBtn) floatZaloBtn.href = cfg.zaloLink;

  const footerZalo = document.getElementById('footerZalo');
  if (footerZalo) footerZalo.href = cfg.zaloLink;

  const footerPhone = document.getElementById('footerPhone');
  if (footerPhone) footerPhone.textContent = cfg.phone;
}

// 2. RENDER CHƯƠNG TRÌNH ƯU ĐÃI VPS
function renderVpsPromotions(promo) {
  const container = document.getElementById('vpsPromoBanner');
  if (!container || !promo) return;

  const zaloUrl = `https://zalo.me/${SHOP_DATA.config.zaloNumber}?text=${encodeURIComponent('Chào Văn Hưng, mình muốn tư vấn thuê VPS treo game HSO nhận ưu đãi tặng tool mod!')}`;

  container.innerHTML = `
    <div class="vps-promo-header">
      <h3 class="vps-promo-title">
        <span>🔥</span> ${promo.title}
      </h3>
      <p class="vps-promo-sub">Tặng trọn bộ Auto Mod HSO (Phó bản, Đập đồ, Thu mỏ) và Proxy siêu sạch khi thuê hoặc gia hạn!</p>
    </div>

    <div class="vps-promo-grid">
      ${promo.items.map((item, idx) => `
        <div class="vps-promo-card ${idx === 2 ? 'promo-vip' : ''}">
          <div class="vps-promo-top">
            <div class="vps-promo-duration">
              <span>${item.icon}</span> ${item.duration}
            </div>
            <span class="vps-promo-badge">${item.badge}</span>
          </div>
          <div style="font-weight:700; color:var(--primary-gold-light); font-size:12px;">${item.highlight}</div>
          <div class="vps-promo-reward">${item.reward}</div>
        </div>
      `).join('')}
    </div>

    <div class="vps-promo-footer">
      <div class="vps-promo-hotline">
        <span>💸</span> ${promo.contactText}
      </div>
      <a href="${zaloUrl}" target="_blank" class="btn-primary" style="padding:8px 18px; font-size:13px; text-decoration:none;">
        💬 Nhận Ưu Đãi Qua Zalo Ngay
      </a>
    </div>
  `;
}

let currentVpsPeriod = 1;

// 3. RENDER DANH SÁCH GÓI VPS MOD HSO (HỖ TRỢ CHỌN CHU KỲ 1, 3, 6, 12 THÁNG)
function renderVpsPackages(vpsList, selectedMonths = 1) {
  const container = document.getElementById('vpsGrid');
  if (!container || !vpsList) return;

  container.innerHTML = vpsList.map(vps => {
    const isHot = vps.isHot;
    const totalPrice = vps.price * selectedMonths;
    const periodLabel = selectedMonths === 1 ? '1 Tháng' : `${selectedMonths} Tháng`;
    
    // Bonus incentives based on selected period
    let periodBonusTag = '';
    let periodBonusList = [...vps.bonus];
    
    if (selectedMonths === 3) {
      periodBonusTag = '<div class="vps-period-bonus-chip gold">🎁 Tặng 1 Tool Auto tự chọn (Phó bản/Đập đồ/Thu mỏ)</div>';
      periodBonusList.unshift('⭐ ƯU ĐÃI 3T: Tặng 1 Tool Auto bất kỳ dùng trọn đời');
    } else if (selectedMonths === 6) {
      periodBonusTag = '<div class="vps-period-bonus-chip cyan">🔥 Tặng 1 Auto + Tặng 1 Proxy IPv4 sạch 6 tháng</div>';
      periodBonusList.unshift('⭐ ƯU ĐÃI 6T: Tặng 1 Tool Auto + 1 Proxy IPv4 sạch 6 tháng');
    } else if (selectedMonths === 12) {
      periodBonusTag = '<div class="vps-period-bonus-chip purple">👑 VIP: TẶNG TRỌN BỘ 3 AUTO + 1 PROXY 12 THÁNG</div>';
      periodBonusList.unshift('⭐ VIP PRO 12T: Tặng FULL 3 Auto (Phó Bản + Đập Đồ + Thu Mỏ) + 1 Proxy 12 tháng');
    }

    const zaloContactMsg = encodeURIComponent(`Chào Văn Hưng, mình muốn thuê ${vps.name} thời hạn ${periodLabel} (${formatVND(totalPrice)}) kèm Tool Mod HSO.`);
    const zaloUrl = `https://zalo.me/${SHOP_DATA.config.zaloNumber}?text=${zaloContactMsg}`;

    return `
      <div class="vps-card ${isHot ? 'hot-package' : ''}">
        ${vps.isHot ? `<div class="vps-hot-badge">${vps.badge}</div>` : ''}

        <div class="vps-header">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
            <span style="font-size:12px; font-weight:800; color:var(--text-dim); text-transform:uppercase;">${vps.code || vps.id}</span>
            ${!vps.isHot ? `<span style="font-size:10px; font-weight:700; background:rgba(16,185,129,0.15); color:var(--neon-green); padding:2px 8px; border-radius:12px; border:1px solid rgba(16,185,129,0.3);">${vps.badge}</span>` : ''}
          </div>
          <h3 class="vps-name">${vps.name}</h3>
          <div class="vps-capacity-tag">
            <span>⚡</span> ${vps.capacity || vps.recommendTabs}
          </div>
        </div>

        <div class="vps-price-box">
          <span class="vps-price">${formatVND(totalPrice)}</span>
          <span class="vps-period">/ ${periodLabel}</span>
          ${selectedMonths > 1 ? `<span class="vps-market-price">(${formatVND(vps.price)}/tháng)</span>` : (vps.marketPrice ? `<span class="vps-market-price">(Bên khác: ${formatVND(vps.marketPrice)})</span>` : '')}
        </div>

        ${periodBonusTag}

        <div class="vps-recommend-badge">
          🎮 ${vps.recommendTabs}
        </div>

        <ul class="vps-specs-list">
          <li>
            <span class="spec-label">⚙️ Vi xử lý (CPU)</span>
            <span class="spec-value">${vps.cpu}</span>
          </li>
          <li>
            <span class="spec-label">🧠 Bộ nhớ (RAM)</span>
            <span class="spec-value" style="color:var(--neon-cyan);">${vps.ram}</span>
          </li>
          <li>
            <span class="spec-label">💾 Ổ cứng SSD</span>
            <span class="spec-value">${vps.disk}</span>
          </li>
          <li>
            <span class="spec-label">🌐 Băng thông Mạng</span>
            <span class="spec-value" style="color:var(--neon-green);">${vps.network}</span>
          </li>
          <li>
            <span class="spec-label">🖥️ Hệ điều hành</span>
            <span class="spec-value">${vps.os}</span>
          </li>
        </ul>

        <div style="font-size:11px; font-weight:700; color:var(--primary-gold); text-transform:uppercase; margin-bottom:8px; letter-spacing:0.5px;">
          🎁 ƯU ĐÃI & TOOL TẶNG KÈM:
        </div>

        <ul class="vps-perks">
          ${periodBonusList.map(b => `<li>${b}</li>`).join('')}
        </ul>

        <div class="vps-actions">
          <a href="${zaloUrl}" target="_blank" class="btn-primary" style="justify-content:center; padding:13px 18px; font-size:14px; font-weight:800; text-decoration:none; background:linear-gradient(135deg, #0068ff, #0084ff); border-color:#38bdf8; box-shadow:0 4px 15px rgba(0, 104, 255, 0.4);">
            <span>💬</span> Nhắn Zalo Thuê Ngay (Văn Hưng)
          </a>
        </div>
      </div>
    `;
  }).join('');
}

// BỘ CHUYỂN CHU KỲ THANH TOÁN VPS (1, 3, 6, 12 THÁNG)
window.setVpsPeriod = function(months) {
  currentVpsPeriod = months;
  document.querySelectorAll('#vpsPeriodTabs .cycle-tab-btn').forEach(btn => {
    const p = parseInt(btn.getAttribute('data-period'), 10);
    btn.classList.toggle('active', p === months);
  });
  renderVpsPackages(SHOP_DATA.vpsPackages, months);
};

// MÁY TÍNH QUY ĐỔI THẺ CAROT & TIẾT KIỆM THÔNG MINH
window.selectCalcDenom = function(amount) {
  document.querySelectorAll('.calc-chip').forEach(chip => {
    const chipText = chip.textContent.replace(/\D/g, '');
    const chipAmount = parseInt(chipText, 10);
    chip.classList.toggle('active', chipAmount === amount);
  });

  const item = SHOP_DATA.carotExchangeTable.find(x => {
    const val = parseInt(x.denomination.replace(/\D/g, ''), 10);
    return val === amount;
  }) || SHOP_DATA.carotExchangeTable[3]; // default 100k

  const payNum = parseInt(item.sellPrice.replace(/\D/g, ''), 10);
  const saveNum = amount - payNum;
  const savePercent = ((saveNum / amount) * 100).toFixed(1);

  const resPay = document.getElementById('calcResPay');
  const resSave = document.getElementById('calcResSave');
  const resBase = document.getElementById('calcResBase');
  const resX2 = document.getElementById('calcResX2');
  const resX3 = document.getElementById('calcResX3');
  const resFirst = document.getElementById('calcResFirst');
  const calcZaloCta = document.getElementById('calcZaloCta');

  if (resPay) resPay.textContent = item.sellPrice;
  if (resSave) resSave.textContent = `Tiết kiệm: ${formatVND(saveNum)} (${savePercent}%)`;
  if (resBase) resBase.textContent = `${item.gems.toLocaleString('vi-VN')} 💎`;
  if (resX2) resX2.textContent = `${item.kmX2.toLocaleString('vi-VN')} 💎`;
  if (resX3) resX3.textContent = `${item.kmX3.toLocaleString('vi-VN')} 💎`;
  if (resFirst) resFirst.textContent = `${item.firstRechargeX2.toLocaleString('vi-VN')} 💎`;

  if (calcZaloCta) {
    const zaloMsg = encodeURIComponent(`Chào Văn Hưng, mình muốn mua thẻ Carot mệnh giá ${item.denomination} (giá shop ${item.sellPrice}) để nạp nhận ${item.kmX2} ngọc HSO!`);
    calcZaloCta.href = `https://zalo.me/${SHOP_DATA.config.zaloNumber}?text=${zaloMsg}`;
  }
};

// 4. RENDER DỊCH VỤ GAME HSO
function renderServices(services) {
  const container = document.getElementById('serviceGrid');
  if (!container || !services) return;

  container.innerHTML = services.map(srv => {
    const zaloMsg = encodeURIComponent(`Chào shop, mình muốn sử dụng dịch vụ: ${srv.title}`);
    const zaloUrl = `https://zalo.me/${SHOP_DATA.config.zaloNumber}?text=${zaloMsg}`;

    return `
      <div class="service-card">
        <div class="service-top">
          <div class="service-icon">${srv.icon}</div>
          <span class="badge-tag badge-discount">${srv.badge}</span>
        </div>

        <h3 class="service-title">${srv.title}</h3>
        <p class="service-desc">${srv.desc}</p>

        <ul class="service-rates">
          ${srv.rates.map(r => `<li>${r}</li>`).join('')}
        </ul>

        <div class="service-note">📌 ${srv.note}</div>

        <a href="${zaloUrl}" target="_blank" class="btn-primary" style="margin-top:auto; justify-content:center; padding:10px 16px; font-size:13px;">
          💬 Đặt Dịch Vụ Qua Zalo
        </a>
      </div>
    `;
  }).join('');
}

// 5. RENDER BẢNG QUY ĐỔI NGỌC THẺ CAROT (ĐÃ BỎ HOÀN TOÀN CỘT VÀ THÔNG TIN NGUỒN NHẬP)
function renderCarotTable(carotData) {
  const container = document.getElementById('carotTableBody');
  if (!container || !carotData) return;

  container.innerHTML = carotData.map(item => {
    const zaloMsg = encodeURIComponent(`Chào Văn Hưng, mình muốn mua thẻ Carot mệnh giá ${item.denomination} (Giá shop: ${item.sellPrice}) để nạp ngọc HSO!`);
    const zaloUrl = `https://zalo.me/${SHOP_DATA.config.zaloNumber}?text=${zaloMsg}`;

    return `
      <tr>
        <td class="col-denom">${item.denomination}</td>
        <td class="col-sell">${item.sellPrice}</td>
        <td class="col-gems">${item.gems} 💎</td>
        <td class="col-x2">${item.kmX2} 💎</td>
        <td class="col-x3">${item.kmX3} 💎</td>
        <td class="col-first">${item.firstRechargeX2} 💎</td>
        <td>
          <a href="${zaloUrl}" target="_blank" class="btn-buy-carot">
            <span>💬</span> Nạp Ngay
          </a>
        </td>
      </tr>
    `;
  }).join('');
}

// 6. CHUYỂN ĐỔI TAB TOÀN CỤC
window.switchTab = function(tabId) {
  // Đồng bộ nút tab chính
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Đồng bộ thanh menu Navbar trên cùng
  document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
  if (tabId === 'tabVps') {
    const btn = document.getElementById('navVpsBtn');
    if (btn) btn.classList.add('active');
  } else if (tabId === 'tabDichVu') {
    const btn = document.getElementById('navDichVuBtn');
    if (btn) btn.classList.add('active');
  }

  // Đồng bộ nút thanh điều hướng dưới cùng trên điện thoại
  const mobVps = document.getElementById('mobNavVps');
  const mobDichVu = document.getElementById('mobNavDichVu');
  if (mobVps) mobVps.classList.toggle('active', tabId === 'tabVps');
  if (mobDichVu) mobDichVu.classList.toggle('active', tabId === 'tabDichVu');

  // Hiển thị tab được chọn
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });

  const activeContent = document.getElementById(tabId);
  if (activeContent) {
    activeContent.classList.add('active');
  }

  // Cuộn trang mượt mà xuống nội dung
  const targetSection = document.querySelector('.main-tabs-wrapper');
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

function setupTabSwitching() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      window.switchTab(targetTab);
    });
  });
}

// CHUYỂN HƯỚNG LIÊN HỆ THUÊ VPS QUA ZALO
window.openVpsPaymentModal = function(vpsId) {
  const vps = SHOP_DATA.vpsPackages.find(v => v.id === vpsId);
  const vpsName = vps ? `${vps.name} (${vps.code})` : 'VPS Mod HSO';
  const vpsPrice = vps ? formatVND(vps.price) : '';
  const zaloSupportMsg = encodeURIComponent(`Chào Văn Hưng, mình muốn đặt thuê gói ${vpsName} giá ${vpsPrice}/tháng. Hỗ trợ tư vấn và cài Tool Mod HSO giúp mình nhé!`);
  window.open(`https://zalo.me/${SHOP_DATA.config.zaloNumber}?text=${zaloSupportMsg}`, '_blank');
};

// ĐÓNG MỞ MODAL & TIỆN ÍCH
window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('open');
};

function setupModalListeners() {
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('open'));
    }
  });
}

window.copyText = function(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Đã sao chép: ${text}`);
  }).catch(() => {
    showToast(`Đã sao chép!`);
  });
};

function showToast(message) {
  let toast = document.getElementById('toastMsg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastMsg';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function formatVND(amount) {
  return amount.toLocaleString('vi-VN') + ' đ';
}
