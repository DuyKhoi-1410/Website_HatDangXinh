import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Quote, ArrowRight } from 'lucide-react';

export default function BrandStorySection() {
  return (
    <section id="story" className="relative py-24 sm:py-32 bg-[#050807] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#00C995]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Editorial Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden border border-[#00C995]/30 shadow-2xl group bg-gradient-to-b from-[#082a1f] to-[#041610] p-4 sm:p-5"
            >
              <div className="relative aspect-4/3 sm:aspect-square overflow-hidden rounded-2xl">
                <img
                  src="/images/triet-ly-thuong-hieu.jpg"
                  alt="Triết lý dinh dưỡng Hạt Dáng Xinh"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041610]/80 via-transparent to-transparent opacity-50" />
              </div>

              {/* Quote pill on image */}
              <div className="relative mt-4 p-5 rounded-2xl bg-[#062A1F]/90 backdrop-blur-md border border-[#00C995]/25 shadow-xl">
                <Quote className="w-6 h-6 text-[#FFC52E] mb-2 opacity-80" />
                <p className="text-xs sm:text-sm text-[#F4EBD8] font-serif italic leading-relaxed">
                  "Ăn vặt không còn là nỗi lo về calo hay đường dầu mỡ, mà trở thành khoảnh khắc tiếp thêm năng lượng lành mạnh và trọn vẹn mỗi ngày."
                </p>
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#00C995]/15">
                  <span className="text-[11px] text-[#00C995] font-bold tracking-wider uppercase">
                    — HẠT DÁNG XINH
                  </span>
                  <span className="text-[10px] text-[#FFC52E] font-medium">
                    100% Nông Sản Tuyển Chọn
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Editorial Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062A1F] border border-[#00C995]/30 text-[#00C995] text-xs font-bold uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFC52E]" />
              Triết Lý Thương Hiệu
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                NHỎ GỌN TRONG TỪNG GÓI.
              </h2>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#00C995] tracking-tight leading-tight">
                TRỌN VẸN TRONG TỪNG LỰA CHỌN.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-sm sm:text-base text-[#D1C5AE]/90 leading-relaxed font-normal"
            >
              <p>
                Ý tưởng phát triển dòng sản phẩm <strong className="text-white">HẠT DÁNG XINH</strong> bắt nguồn từ mong muốn tạo ra những món ăn nhẹ tiện dụng, lành mạnh nhưng không hề đơn điệu. Thay vì ăn vặt thiếu kiểm soát với các thực phẩm chế biến sẵn nhiều dầu mỡ và đường tinh luyện, mỗi cá nhân đều xứng đáng có những lựa chọn thơm ngon, bùi béo tự nhiên và minh bạch về thành phần.
              </p>

              <p>
                Bằng việc tuyển chọn đa dạng các nguyên liệu nông sản mộc mạc như hạt điều, hạt sen sấy, đậu phộng rang, bánh yến mạch, granola, bắp rang nổ khí nóng cùng trái cây sấy dẻo, mỗi công thức được cân đo định lượng chuẩn xác từng gam. Nhờ đó, người tiêu dùng dễ dàng kiểm soát mức năng lượng nạp vào trong từng khung giờ làm việc hoặc học tập.
              </p>

              <p>
                Dù là một gói snack nhỏ gọn 30k mang theo trong túi xách, một combo 3 bữa được chia nhịp khoa học hay một set quà 3 hũ trang nhã biếu tặng, Hạt Dáng Xinh luôn hướng đến sự đồng hành bền bỉ cùng lối sống tích cực và hiện đại của bạn.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4 flex items-center gap-4"
            >
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00C995] hover:bg-[#00e0a6] text-[#050807] font-extrabold text-xs sm:text-sm transition-all shadow-lg shadow-[#00C995]/20 cursor-pointer"
              >
                <span>Khám phá bộ sưu tập ngay</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
