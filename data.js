/**
 * DỮ LIỆU DỊCH VỤ & BẢNG GIÁ VPS - HSO COMMUNITY PORTAL
 * Bảng giá VPS Mod HSO, Dịch vụ game 6 Server và Bảng quy đổi ngọc thẻ Carot
 */

const SHOP_DATA = {
  config: {
    shopName: "VANHUNG VPS",
    tagline: "VanHungVPS - Dịch Vụ Thuê VPS Mod HSO & Nạp Thẻ Carot, Bán Vàng 6 Server Uy Tín",
    phone: "099.654.8564",
    zaloNumber: "0996548564",
    zaloLink: "https://zalo.me/0996548564",
    boxZaloLink: "https://zalo.me/0996548564",
    adminName: "Văn Hưng",
    bank: {
      bankId: "MB",
      accountNo: "0996548564",
      accountName: "NGUYEN VAN HUNG"
    }
  },

  // DANH SÁCH DỊCH VỤ GAME HSO
  services: [
    {
      id: "SV-GOLD",
      title: "Bán Vàng HSO 6 Server",
      icon: "💰",
      badge: "NHẮN TIN BÁO GIÁ",
      desc: "Cung cấp vàng số lượng lớn cho cả 6 server: Chiến Thần, Rồng Lửa, Phượng Hoàng, Nhân Mã, Kì Lân, Thiên Hà. Tỉ lệ vàng cập nhật theo ngày.",
      directChatOnly: true,
      rates: [],
      note: ""
    },
    {
      id: "SV-CAROT",
      title: "Nạp Ngọc - Mua Thẻ Carot Chiết Khấu",
      icon: "💎",
      badge: "CHIẾT KHẤU CAO",
      desc: "Đại lý phân phối mã thẻ Carot Teamobi chính hãng giá rẻ, nạp nhận trọn vẹn số lượng ngọc và các mốc khuyến mãi x2, x3.",
      rates: [
        "Thẻ Carot 10.000 đ: Giá chỉ 8.500 đ",
        "Thẻ Carot 20.000 đ: Giá chỉ 18.000 đ",
        "Thẻ Carot 50.000 đ: Giá chỉ 43.000 đ",
        "Thẻ Carot 100.000 đ: Giá chỉ 85.500 đ",
        "Thẻ Carot 200.000 đ: Giá chỉ 171.000 đ",
        "Thẻ Carot 500.000 đ: Giá chỉ 427.500 đ",
        "Thẻ Carot 1.000.000 đ: Giá chỉ 855.000 đ"
      ],
      note: "Nhận mã seri và mã pin ngay sau khi thanh toán hoặc hỗ trợ nạp thẳng."
    },
    {
      id: "SV-UP",
      title: "Cày Thuê Level & Up Đệ Tử 6 SV",
      icon: "⚡",
      badge: "UY TÍN SIÊU TỐC",
      desc: "Nhận cày thuê cấp độ, làm nhiệm vụ chính tuyến, úp đệ tử sơ sinh lên đệ vip theo yêu cầu cho anh em bận rộn.",
      rates: [
        "Up đệ tử sơ sinh: Giá thương lượng theo cấp",
        "Cày thuê level 1-100: Báo giá trực tiếp",
        "Treo nick cày vàng tổ đội trên dàn VPS riêng"
      ],
      note: "Bảo mật tài khoản tuyệt đối, cam kết giữ đồ an toàn 100%."
    },
    {
      id: "SV-GDTG",
      title: "Giao Dịch Trung Gian (GDTG) An Toàn",
      icon: "🤝",
      badge: "UY TÍN 100%",
      desc: "Nhận làm trung gian giữ tiền và tài sản game khi game thủ mua bán trao đổi để tránh bị lừa đảo (scam).",
      rates: [
        "Giao dịch dưới 500k: Phí 10.000 đ",
        "Giao dịch 500k - 2M: Phí 5% giá trị",
        "Giao dịch trên 2M: Phí thương lượng siêu rẻ"
      ],
      note: "Kiểm tra thông tin an toàn tuyệt đối trước khi giải ngân."
    }
  ],

  // BẢNG GIÁ THUÊ VPS HỖ TRỢ MOD HSO
  vpsPackages: [
    {
      id: "VPS-01",
      code: "VPS 1-1",
      name: "Gói 1 - CS 1-1-20",
      capacity: "Treo được 40 acc",
      price: 65000,
      marketPrice: 100000,
      period: "1 Tháng",
      badge: "TIẾT KIỆM 35%",
      isHot: false,
      cpu: "1 vCPU",
      ram: "1 GB",
      disk: "20 GB SSD",
      os: "Windows / Linux / Custom",
      network: "100Mbps - 1Gbps",
      recommendTabs: "Treo mượt 40 acc HSO cày cuốc",
      bonus: [
        "Treo cùng lúc đến 40 nick cày game mượt mà",
        "Cài sẵn MicroEmulator tối ưu cấu hình siêu nhẹ",
        "Tặng kèm Tool Mod HSO auto đánh quái, tự bơm máu/mana",
        "Quản lý điều khiển trên điện thoại iPhone/Android qua RD Client"
      ]
    },
    {
      id: "VPS-02",
      code: "VPS 1-2",
      name: "Gói 2 - CS 1-2-25",
      capacity: "Treo được 50 acc",
      price: 80000,
      marketPrice: 130000,
      period: "1 Tháng",
      badge: "HOT 🔥",
      isHot: true,
      cpu: "1 vCPU",
      ram: "2 GB",
      disk: "25 GB SSD",
      os: "Windows / Linux / Custom",
      network: "100Mbps - 1Gbps",
      recommendTabs: "Treo mượt 50 acc HSO",
      bonus: [
        "Treo ổn định 50 nick HSO liên tục 24/24",
        "RAM 2GB thoải mái mở tab không lo tràn bộ nhớ",
        "Tặng kèm Tool Mod HSO Pro auto nhặt đồ, auto hồi sinh",
        "Tự động kết nối lại (Auto Reconnect) khi mất mạng/bảo trì"
      ]
    },
    {
      id: "VPS-03",
      code: "VPS 2-4",
      name: "Gói 3 - CS 2-4-30",
      capacity: "Treo được 80 acc",
      price: 130000,
      marketPrice: 240000,
      period: "1 Tháng",
      badge: "BÁN CHẠY NHẤT 🔥",
      isHot: true,
      cpu: "2 vCPU",
      ram: "4 GB",
      disk: "30 GB SSD",
      os: "Windows / Linux / Custom",
      network: "100Mbps - 1Gbps",
      recommendTabs: "Treo mượt 80 acc (Cày vàng / Up đệ)",
      bonus: [
        "Treo mạnh mẽ 80 nick HSO dàn cày vàng tổ đội",
        "2 vCPU đa nhân siêu tốc, xử lý đồ họa mượt mà",
        "Tặng full trọn bộ Tool Mod HSO cày cuốc tự động",
        "Bảo hành uptime 99.99%, đổi pass VPS quản trị riêng tư 100%"
      ]
    },
    {
      id: "VPS-04",
      code: "VPS 4-8",
      name: "Gói 4 - CS 4-8-50",
      capacity: "Treo được 160 acc",
      price: 240000,
      marketPrice: 400000,
      period: "1 Tháng",
      badge: "SIÊU TRÂU 👑",
      isHot: false,
      cpu: "4 vCPU",
      ram: "8 GB",
      disk: "50 GB SSD",
      os: "Windows / Linux / Custom",
      network: "100Mbps - 1Gbps",
      recommendTabs: "Treo dàn farm 160 acc chuyên nghiệp",
      bonus: [
        "Dàn farm cực đại 160 acc buôn đồ, cày vàng số lượng lớn",
        "Cấu hình khủng 4 vCPU - 8GB RAM max hiệu năng game",
        "Băng thông mạng 1Gbps không giới hạn dung lượng tải",
        "Hỗ trợ kỹ thuật ưu tiên 24/7 trực tiếp từ Văn Hưng"
      ]
    }
  ],

  // CHƯƠNG TRÌNH ƯU ĐÃI KHI THUÊ / GIA HẠN NHIỀU THÁNG
  vpsPromotions: {
    title: "ƯU ĐÃI KHI MUA HOẶC GIA HẠN VPS NHIỀU THÁNG - TẶNG TOOL HỖ TRỢ MIỄN PHÍ 🔥",
    contactText: "Nhanh tay đặt hàng nhận ngay ưu đãi: Văn Hưng : 0996548564",
    items: [
      {
        duration: "Từ 3 Tháng",
        highlight: "TẶNG 1 AUTO TỰ CHỌN",
        reward: "Tặng 1 tool Auto bất kỳ: Auto Phó Bản / Auto Đập Đồ / Auto Thu Mỏ",
        badge: "TIẾT KIỆM",
        icon: "🍁"
      },
      {
        duration: "Từ 6 Tháng",
        highlight: "TẶNG AUTO + 1 PROXY 6 THÁNG",
        reward: "Tặng 1 tool Auto tự chọn + Tặng thêm 1 Proxy IPv4 sạch dùng 6 tháng",
        badge: "PHỔ BIẾN",
        icon: "🔥"
      },
      {
        duration: "Từ 12 Tháng",
        highlight: "TẶNG FULL 3 AUTO + 1 PROXY 12 THÁNG",
        reward: "Tặng trọn bộ Full 3 Auto (Phó Bản + Đập Đồ + Thu Mỏ) + Tặng 1 Proxy 12 tháng",
        badge: "VIP PRO 👑",
        icon: "👑"
      }
    ]
  },

  // BẢNG QUY ĐỔI NẠP THẺ CAROT & LƯỢNG / NGỌC HSO
  carotExchangeTable: [
    {
      denomination: "10.000 đ",
      sellPrice: "8.500 đ",
      gems: 13,
      kmX2: 22,
      kmX3: 32,
      firstRechargeX2: 26
    },
    {
      denomination: "20.000 đ",
      sellPrice: "18.000 đ",
      gems: 32,
      kmX2: 59,
      kmX3: 82,
      firstRechargeX2: 64
    },
    {
      denomination: "50.000 đ",
      sellPrice: "43.000 đ",
      gems: 91,
      kmX2: 161,
      kmX3: 231,
      firstRechargeX2: 182
    },
    {
      denomination: "100.000 đ",
      sellPrice: "85.500 đ",
      gems: 195,
      kmX2: 345,
      kmX3: 495,
      firstRechargeX2: 390
    },
    {
      denomination: "200.000 đ",
      sellPrice: "171.000 đ",
      gems: 455,
      kmX2: 805,
      kmX3: 1155,
      firstRechargeX2: 910
    },
    {
      denomination: "500.000 đ",
      sellPrice: "427.500 đ",
      gems: 1430,
      kmX2: 2530,
      kmX3: 3630,
      firstRechargeX2: 2860
    },
    {
      denomination: "1.000.000 đ",
      sellPrice: "855.000 đ",
      gems: 3250,
      kmX2: 5750,
      kmX3: 8250,
      firstRechargeX2: 6500
    }
  ]
};
