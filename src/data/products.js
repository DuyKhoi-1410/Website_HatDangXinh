/**
 * HẠT DÁNG XINH - MASTER PRODUCT DATA
 * Quản lý tập trung toàn bộ dữ liệu sản phẩm, định lượng, calo ước tính và giá bán.
 * Tuyệt đối giữ nguyên giá bán và số liệu theo brief dự án.
 */

export const formatPrice = (amount) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  })
    .format(amount)
    .replace('₫', 'đ');
};

export const CATEGORIES = [
  { id: 'all', name: 'Tất cả sản phẩm', count: 7 },
  { id: 'snack', name: 'Snack lẻ dinh dưỡng (30.000đ)', count: 5 },
  { id: 'combo', name: 'Combo 3 bữa nhẹ (80.000đ)', count: 1 },
  { id: 'giftset', name: 'Set quà tặng 3 hũ (249.000đ)', count: 1 },
];

export const PRODUCTS = [
  {
    id: 'sp01',
    slug: 'nutty-energy-box',
    name: 'Nutty Energy Box',
    category: 'snack',
    categoryName: 'Snack Lẻ',
    price: 30000,
    weight: '33,6g',
    calories: '182 – 187 kcal',
    caloriesVal: 185,
    tag: 'Bán chạy nhất',
    tagColor: 'emerald',
    featured: true,
    available: true,
    shortDescription: 'Trải nghiệm ăn nhẹ bùi béo, cung cấp năng lượng nhanh từ các loại hạt thượng hạng.',
    description: 'Sự kết hợp của đậu phộng, hạt sen và hạt điều tạo nên trải nghiệm ăn nhẹ bùi béo, hấp dẫn. Mỗi gói được cân đo chính xác định lượng, phù hợp cho người cần nạp năng lượng tập trung và lành mạnh.',
    tasteProfile: 'Bùi béo, thơm ngậy tự nhiên, giòn bùi',
    idealTiming: 'Buổi tối hoặc xế chiều sau giờ làm việc',
    packaging: 'Gói màng nhôm bảo quản cao cấp 3 lớp, chống ẩm',
    images: [
      '/images/nutty-energy-box.png',
      'https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    ],
    ingredients: [
      { name: 'Đậu phộng', weight: '18,5g', percentage: 55 },
      { name: 'Hạt sen', weight: '6,7g', percentage: 20 },
      { name: 'Hạt điều', weight: '8,4g', percentage: 25 },
    ],
    highlights: [
      'Định lượng chuẩn 33,6g/gói tiện lợi',
      '182 – 187 kcal ước tính vừa vặn cho một bữa ăn phụ',
      'Hạt điều và hạt sen sấy nguyên vị'
    ]
  },
  {
    id: 'sp02',
    slug: 'oat-fruit-vitality',
    name: 'Oat & Fruit Vitality',
    category: 'snack',
    categoryName: 'Snack Lẻ',
    price: 30000,
    weight: '33g',
    calories: '109 – 112 kcal',
    caloriesVal: 110,
    tag: 'Ít Calo Nhất',
    tagColor: 'gold',
    featured: true,
    available: true,
    shortDescription: 'Yến mạch, chuối sấy dẻo và granola giòn thơm - món ăn nhẹ thanh mát.',
    description: 'Sự kết hợp giữa yến mạch, chuối sấy, hướng dương và granola tạo nên hương vị đa dạng, phù hợp cho những lúc cần một món ăn nhẹ thanh lành, dễ tiêu hóa.',
    tasteProfile: 'Chua ngọt tự nhiên, giòn rụm của granola và yến mạch',
    idealTiming: 'Nửa buổi sáng (9h - 10h) hoặc trước khi tập nhẹ',
    packaging: 'Gói màng nhôm bảo quản cao cấp 3 lớp, chống ẩm',
    images: [
      '/images/oat-fruit-vitality.jpg',
      'https://images.unsplash.com/photo-1517093709594-5544719001b9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=900&q=80',
    ],
    ingredients: [
      { name: 'Bánh yến mạch', weight: '16,5g', percentage: 50 },
      { name: 'Hạt hướng dương', weight: '6,6g', percentage: 20 },
      { name: 'Chuối sấy', weight: '6,6g', percentage: 20 },
      { name: 'Granola', weight: '3,3g', percentage: 10 },
    ],
    highlights: [
      'Chỉ 109 – 112 kcal, thích hợp theo dõi năng lượng',
      'Chuối sấy dẻo ngọt tự nhiên không gắt',
      'Granola giòn rụm bổ sung chất xơ'
    ]
  },
  {
    id: 'sp03',
    slug: 'crispy-pop-veggie',
    name: 'Crispy Pop & Veggie',
    category: 'snack',
    categoryName: 'Snack Lẻ',
    price: 30000,
    weight: '51,6g',
    calories: '178 kcal',
    caloriesVal: 178,
    tag: 'Giòn Rụm Độc Đáo',
    tagColor: 'emerald',
    featured: true,
    available: true,
    shortDescription: 'Sự hòa quyện giòn tan giữa bắp rang khí nóng, khoai lang sấy và chuối sấy.',
    description: 'Sự hòa quyện giữa bắp rang, đậu phộng, khoai lang và chuối sấy, mang đến trải nghiệm giòn thơm và nhiều tầng hương vị, thay thế hoàn hảo cho các loại snack chiên dầu mỡ.',
    tasteProfile: 'Giòn xốp của bắp, bùi của đậu phộng, ngọt dịu khoai và chuối',
    idealTiming: 'Giờ nghỉ xế chiều (15h - 16h) cùng trà ấm',
    packaging: 'Gói màng nhôm bảo quản cao cấp 3 lớp, chống ẩm',
    images: [
      '/images/crispy-pop-veggie.jpg',
      'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    ],
    ingredients: [
      { name: 'Bắp rang', weight: '23,2g', percentage: 45 },
      { name: 'Khoai lang', weight: '12,9g', percentage: 25 },
      { name: 'Đậu phộng', weight: '10,3g', percentage: 20 },
      { name: 'Chuối sấy', weight: '5,2g', percentage: 10 },
    ],
    highlights: [
      'Khối lượng hào phóng 51,6g/gói',
      'Năng lượng ước tính 178 kcal',
      'Sự kết hợp độc đáo giữa bắp nổ giòn và củ quả sấy'
    ]
  },
  {
    id: 'sp04',
    slug: 'lotus-granola-delight',
    name: 'Lotus & Granola Delight',
    category: 'snack',
    categoryName: 'Snack Lẻ',
    price: 30000,
    weight: '29,1g',
    calories: '122 – 132 kcal',
    caloriesVal: 127,
    tag: 'Thanh Tao Hương Sen',
    tagColor: 'gold',
    featured: true,
    available: true,
    shortDescription: 'Hạt sen sấy giòn bùi kết hợp granola thơm lừng và hạt điều hảo hạng.',
    description: 'Sự kết hợp giữa hạt sen, granola, hạt hướng dương và hạt điều tạo nên hương vị bùi thơm đặc trưng. Một lựa chọn ăn vặt thanh khiết mang đậm nét truyền thống hòa quyện hiện đại.',
    tasteProfile: 'Bùi béo thanh nhẹ hạt sen, giòn thơm granola và hạt điều',
    idealTiming: 'Buổi sáng nhẹ nhàng hoặc giờ làm việc cần thư giãn',
    packaging: 'Gói màng nhôm bảo quản cao cấp 3 lớp, chống ẩm',
    images: [
      '/images/lotus-granola-delight.jpg',
      'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=900&q=80',
    ],
    ingredients: [
      { name: 'Hạt sen', weight: '11,6g', percentage: 40 },
      { name: 'Granola', weight: '7,3g', percentage: 25 },
      { name: 'Hạt hướng dương', weight: '5,8g', percentage: 20 },
      { name: 'Hạt điều', weight: '4,4g', percentage: 15 },
    ],
    highlights: [
      'Hạt sen sấy chiếm tới 11,6g',
      'Năng lượng ước tính 122 – 132 kcal',
      'Vị ngọt mộc không sử dụng hương liệu nhân tạo'
    ]
  },
  {
    id: 'sp05',
    slug: 'daily-balanced-mix',
    name: 'Daily Balanced Mix',
    category: 'snack',
    categoryName: 'Snack Lẻ',
    price: 30000,
    weight: '52g',
    calories: '160 – 163 kcal',
    caloriesVal: 161,
    tag: 'Đa Dạng 5 Vị',
    tagColor: 'emerald',
    featured: true,
    available: true,
    shortDescription: 'Công thức cân bằng phong phú giữa 5 loại nguyên liệu tự nhiên chọn lọc.',
    description: 'Sự kết hợp phong phú giữa bắp rang, yến mạch, hạt sen, khoai lang và hạt điều, tạo nên một lựa chọn ăn nhẹ đa dạng. Đầy đủ các sắc thái từ giòn xốp đến bùi béo trong một gói nhỏ.',
    tasteProfile: 'Đa tầng vị giác: giòn, bùi, thơm mộc, xốp nhẹ',
    idealTiming: 'Bất cứ khoảnh khắc nào bạn muốn nhâm nhi lành mạnh',
    packaging: 'Gói màng nhôm bảo quản cao cấp 3 lớp, chống ẩm',
    images: [
      '/images/daily-balanced-mix.jpg',
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&w=900&q=80',
    ],
    ingredients: [
      { name: 'Bắp rang', weight: '15,6g', percentage: 30 },
      { name: 'Bánh yến mạch', weight: '13g', percentage: 25 },
      { name: 'Khoai lang', weight: '10,4g', percentage: 20 },
      { name: 'Hạt sen', weight: '7,8g', percentage: 15 },
      { name: 'Hạt điều', weight: '5,2g', percentage: 10 },
    ],
    highlights: [
      'Khối lượng 52g đầy đặn',
      'Cân đối 160 – 163 kcal',
      'Gồm 5 loại nguyên liệu hòa quyện hoàn hảo'
    ]
  },
  {
    id: 'combo-01',
    slug: 'daily-3-meal-snack-combo',
    name: 'Daily 3-Meal Snack Combo',
    category: 'combo',
    categoryName: 'Combo Dinh Dưỡng',
    price: 80000,
    weight: '115g (3 gói)',
    calories: '459 – 468 kcal',
    caloriesVal: 463,
    tag: 'Tiết Kiệm & Khoa Học',
    tagColor: 'gold',
    featured: true,
    available: true,
    shortDescription: '3 khoảnh khắc – 1 combo dinh dưỡng hoàn chỉnh cho cả ngày làm việc năng động.',
    description: 'Giải pháp ăn nhẹ khoa học được thiết kế riêng theo 3 nhịp sinh học trong ngày: Nửa buổi sáng cần sự thanh nhẹ sảng khoái, xế chiều giòn rụm giải tỏa căng thẳng, buổi tối bổ sung dưỡng chất bùi ngậy mà không gây nặng bụng.',
    tasteProfile: 'Hành trình 3 tầng vị: Thanh dịu sáng -> Giòn rụm chiều -> Bùi béo tối',
    idealTiming: 'Trọn vẹn 1 ngày: 9:30 | 15:30 | 20:30',
    packaging: 'Túi zip hoặc hộp giấy kraft eco-friendly bọc ngoài 3 gói riêng lẻ',
    images: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517093709594-5544719001b9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&w=900&q=80'
    ],
    comboTimeline: [
      {
        step: 'GÓI 01',
        time: 'NỬA BUỔI SÁNG',
        timeHour: '09:30 AM',
        productName: 'Oat & Fruit Vitality',
        weight: '40g',
        calories: '132 – 136 kcal',
        desc: 'Cung cấp năng lượng tinh sạch từ yến mạch và chuối sấy dẻo, giữ tinh thần làm việc hứng khởi.',
        icon: 'Sun',
      },
      {
        step: 'GÓI 02',
        time: 'XẾ CHIỀU',
        timeHour: '15:30 PM',
        productName: 'Crispy Pop & Veggie',
        weight: '40g',
        calories: '138 kcal',
        desc: 'Giòn tan bắp rang và củ quả sấy, xua tan cơn đói nhẹ và uể oải giờ văn phòng.',
        icon: 'Coffee',
      },
      {
        step: 'GÓI 03',
        time: 'BUỔI TỐI',
        timeHour: '20:30 PM',
        productName: 'Nutty Energy Box',
        weight: '35g',
        calories: '190 – 194 kcal',
        desc: 'Đậu phộng, hạt sen và hạt điều bùi béo, êm dịu dạ dày cho giấc ngủ ngon.',
        icon: 'Moon',
      },
    ],
    ingredients: [
      { name: 'Oat & Fruit (Sáng)', weight: '40g', percentage: 35 },
      { name: 'Crispy Pop (Chiều)', weight: '40g', percentage: 35 },
      { name: 'Nutty Energy (Tối)', weight: '35g', percentage: 30 },
    ],
    highlights: [
      'Trọn bộ 3 gói riêng biệt với tổng 115g',
      'Tổng năng lượng theo công bố dự án: 459 – 468 kcal (Đánh dấu kiểm tra)',
      'Giá combo 80.000đ tiết kiệm và tiện lợi'
    ],
    note: 'Lưu ý: Giữ nguyên số liệu tổng năng lượng do dự án cung cấp và đánh dấu để kiểm tra lại trước khi công bố chính thức.'
  },
  {
    id: 'gift-01',
    slug: 'healthy-daily-mini-set-3-hu',
    name: 'Healthy Daily Mini – Set 3 Hũ',
    category: 'giftset',
    categoryName: 'Set Quà Tặng',
    price: 249000,
    weight: '450g (3 hũ x 150g)',
    calories: '1.825 – 1.858 kcal',
    caloriesVal: 1840,
    tag: 'Set Quà Sang Trọng',
    tagColor: 'gold',
    featured: true,
    available: true,
    shortDescription: 'Gửi trao dinh dưỡng – Gửi trọn yêu thương trong hộp quà tặng sang trọng 3 hũ cao cấp.',
    description: 'Bộ quà tặng cao cấp gồm 3 hũ snack dinh dưỡng chọn lọc, được đóng gói chỉn chu trong hũ PET nắp nhôm chống ẩm và hộp quà giấy cứng tinh xảo. Món quà sức khỏe trọn vẹn gửi đến người thân, đồng nghiệp và đối tác.',
    tasteProfile: '3 trải nghiệm độc lập: Hũ Năng Lượng Đậm Đà · Hũ Thanh Mát Trái Cây · Hũ Giòn Xốp Vui Miệng',
    idealTiming: 'Biếu tặng người thân, đối tác hoặc dùng cho cả gia đình',
    packaging: '3 hũ PET 150g nắp nhôm sang trọng + Hộp quà giấy cứng mỹ thuật + Nơ lụa & thiệp viết tay',
    images: [
      '/images/healthy-daily-mini-giftset.jpg',
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&w=900&q=80',
    ],
    jars: [
      {
        number: 'HŨ 01',
        title: 'Nutty Energy',
        weight: '150g',
        calories: '814 – 832 kcal',
        desc: 'Hạt dinh dưỡng bùi béo nguyên bản, bổ sung năng lượng dồi dào.',
        ingredientsList: [
          'Đậu phộng rang: 67,5g (405 kcal)',
          'Hạt sen sấy: 30g (111 kcal)',
          'Hạt điều: 22,5g (124 – 136 kcal)',
          'Hạnh nhân: 30g (174 – 180 kcal)'
        ]
      },
      {
        number: 'HŨ 02',
        title: 'Oat & Fruit',
        weight: '150g',
        calories: '494 – 509 kcal',
        desc: 'Sự hòa quyện ngọt ngào của yến mạch, chuối dẻo và granola.',
        ingredientsList: [
          'Bánh yến mạch: 75g (187,5 kcal)',
          'Hạt hướng dương: 30g (171 kcal)',
          'Chuối sấy: 30g (90 kcal)',
          'Granola: 15g (45 – 60 kcal)'
        ]
      },
      {
        number: 'HŨ 03',
        title: 'Crispy Pop',
        weight: '150g',
        calories: '517 kcal',
        desc: 'Bắp nổ khí nóng giòn xốp hòa cùng khoai lang và chuối sấy ngọt bùi.',
        ingredientsList: [
          'Bắp rang khí nóng: 67,5g (243 kcal)',
          'Đậu phộng rang: 30g (180 kcal)',
          'Khoai lang sấy: 37,5g (48,75 kcal)',
          'Chuối sấy: 15g (45 kcal)'
        ]
      }
    ],
    ingredients: [
      { name: 'Hũ 01 - Nutty Energy', weight: '150g', percentage: 33.3 },
      { name: 'Hũ 02 - Oat & Fruit', weight: '150g', percentage: 33.3 },
      { name: 'Hũ 03 - Crispy Pop', weight: '150g', percentage: 33.4 },
    ],
    highlights: [
      'Tổng khối lượng 450g (3 hũ x 150g) tinh tế',
      'Tổng năng lượng ước tính: 1.825 – 1.858 kcal',
      'Bao bì hũ PET riêng biệt + Hộp quà giấy cứng sang trọng',
      'Giá bán: 249.000 VNĐ/set'
    ]
  }
];

export const BRAND_VALUES = [
  {
    number: '01',
    title: 'ĐA DẠNG HƯƠNG VỊ',
    desc: 'Nhiều công thức phối trộn từ các thành phần hạt, ngũ cốc và trái cây sấy khác nhau, không gây ngán.',
    icon: 'Sparkles'
  },
  {
    number: '02',
    title: 'ĐỊNH LƯỢNG RÕ RÀNG',
    desc: 'Mỗi sản phẩm đều có khối lượng chi tiết từng gam và thông tin năng lượng ước tính minh bạch.',
    icon: 'Scale'
  },
  {
    number: '03',
    title: 'LỰA CHỌN LINH HOẠT',
    desc: 'Đáp ứng mọi nhu cầu: gói snack lẻ mang theo, combo 3 bữa cân đối hoặc set quà tặng trao gửi thân tình.',
    icon: 'Layers'
  },
  {
    number: '04',
    title: 'THIẾT KẾ TIỆN LỢI',
    desc: 'Quy cách đóng gói thông minh, hiện đại, dễ dàng bảo quản và đồng hành cùng lối sống năng động.',
    icon: 'PackageCheck'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    name: 'LỰA CHỌN NGUYÊN LIỆU',
    desc: 'Tuyển chọn kỹ lưỡng các nguyên liệu tự nhiên như đậu phộng, hạt sen, hạt điều, hướng dương, yến mạch và trái cây sấy.',
    badge: 'Nguồn Gốc Tự Nhiên'
  },
  {
    step: '02',
    name: 'PHỐI TRỘN',
    desc: 'Các thành phần được kết hợp theo tỷ lệ và định lượng riêng của từng công thức nhằm tối ưu trải nghiệm vị giác.',
    badge: 'Công Thức Cân Bằng'
  },
  {
    step: '03',
    name: 'ĐỊNH LƯỢNG VÀ ĐÓNG GÓI',
    desc: 'Mỗi dòng sản phẩm được cân đo chính xác từng gam, đóng gói bảo quản theo quy cách màng nhôm và hũ PET chuyên dụng.',
    badge: 'Chính Xác Từng Gam'
  },
  {
    step: '04',
    name: 'SẴN SÀNG ĐẾN TAY KHÁCH HÀNG',
    desc: 'Các sản phẩm hoàn thiện thành từng gói snack lẻ tiện lợi, combo 3 bữa nhịp nhàng hoặc set quà tặng trang nhã.',
    badge: 'Trao Gửi Trọn Vẹn'
  }
];

export const INGREDIENT_SPOTLIGHT = [
  {
    name: 'Hạt Điều',
    desc: 'Bùi béo, thơm ngậy đặc trưng, nguồn năng lượng thực vật dồi dào.',
    image: '/images/hat-dieu.png',
    color: '#00C995'
  },
  {
    name: 'Hạt Sen Sấy',
    desc: 'Giòn xốp thanh nhẹ, mang phong vị truyền thống mộc mạc.',
    image: '/images/hat-sen-say.png',
    color: '#FFC52E'
  },
  {
    name: 'Yến Mạch & Granola',
    desc: 'Ngũ cốc vàng giòn rụm, bổ sung chất xơ tự nhiên cho bữa nhẹ.',
    image: 'https://images.unsplash.com/photo-1517093709594-5544719001b9?auto=format&fit=crop&w=400&q=80',
    color: '#00C995'
  },
  {
    name: 'Bắp Rang Khí Nóng',
    desc: 'Nở xốp nhẹ tênh, thơm bùi không ngấy, trải nghiệm giòn tan.',
    image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=400&q=80',
    color: '#FFC52E'
  },
  {
    name: 'Chuối & Khoai Lang Sấy',
    desc: 'Ngọt dịu tự nhiên từ nông sản Việt, tạo tầng hương vị đa dạng.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80',
    color: '#00C995'
  }
];

export const FAQS = [
  {
    q: 'Hạt Dáng Xinh hiện có những sản phẩm nào?',
    a: 'Hiện tại Hạt Dáng Xinh cung cấp 3 nhóm sản phẩm chính: 5 dòng Snack lẻ dinh dưỡng (Nutty Energy Box, Oat & Fruit Vitality, Crispy Pop & Veggie, Lotus & Granola Delight, Daily Balanced Mix), Daily 3-Meal Snack Combo (gồm 3 gói cho Sáng - Chiều - Tối) và Set quà tặng cao cấp Healthy Daily Mini (gồm 3 hũ 150g sang trọng).'
  },
  {
    q: 'Giá một gói snack là bao nhiêu?',
    a: 'Tất cả 5 sản phẩm snack dinh dưỡng lẻ của Hạt Dáng Xinh đều có mức giá đồng nhất là 30.000 VNĐ/gói. Combo 3-Meal có giá 80.000 VNĐ/combo và Set quà 3 hũ có giá 249.000 VNĐ/set.'
  },
  {
    q: 'Combo 3 khẩu phần gồm những gì?',
    a: 'Daily 3-Meal Snack Combo (80.000 VNĐ) gồm 3 gói riêng biệt: Gói 01 (Nửa buổi sáng: Oat & Fruit Vitality 40g, 132–136 kcal), Gói 02 (Xế chiều: Crispy Pop & Veggie 40g, 138 kcal), và Gói 03 (Buổi tối: Nutty Energy Box 35g, 190–194 kcal). Tổng khối lượng 115g với năng lượng ước tính 459–468 kcal.'
  },
  {
    q: 'Set quà Healthy Daily Mini có bao nhiêu hũ?',
    a: 'Set quà Healthy Daily Mini (249.000 VNĐ) gồm 3 hũ PET nắp nhôm cao cấp, mỗi hũ 150g (tổng trọng lượng 450g), đựng trong hộp quà giấy cứng sang trọng kèm thiệp. 3 hũ gồm: Hũ 01 Nutty Energy, Hũ 02 Oat & Fruit và Hũ 03 Crispy Pop.'
  },
  {
    q: 'Sản phẩm có trọng lượng bao nhiêu?',
    a: 'Từng sản phẩm có định lượng chuẩn: Nutty Energy Box (33,6g), Oat & Fruit Vitality (33g), Crispy Pop & Veggie (51,6g), Lotus & Granola Delight (29,1g), Daily Balanced Mix (52g). Combo 3 gói có tổng trọng lượng 115g và Set quà 3 hũ có tổng 450g.'
  },
  {
    q: 'Làm sao để đặt hàng?',
    a: 'Quý khách có thể bấm "Thêm vào giỏ" ngay trên website, sau đó kiểm tra giỏ hàng và điền thông tin người nhận (Họ tên, SĐT, Địa chỉ) để hoàn tất đơn hàng nhanh chóng với hình thức COD hoặc chuyển khoản ngân hàng.'
  },
  {
    q: 'Có thể mua số lượng lớn không?',
    a: 'Có. Hạt Dáng Xinh sẵn sàng phục vụ các đơn hàng snack văn phòng định kỳ, quà tặng sự kiện doanh nghiệp hoặc quà tặng sức khỏe số lượng lớn. Quý khách có thể để lại thông tin trong mục ghi chú hoặc liên hệ hotline thương hiệu để được hỗ trợ báo giá ưu đãi.'
  }
];
