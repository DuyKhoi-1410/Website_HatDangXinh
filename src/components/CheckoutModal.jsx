import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, CreditCard, Truck, AlertCircle, ShoppingBag, ArrowLeft, Printer, Sparkles, Building2, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../data/CartContext';
import { formatPrice } from '../data/products';

export default function CheckoutModal() {
  const { isCheckoutOpen, setIsCheckoutOpen, cart, totalPrice, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: 'Đà Nẵng',
    notes: '',
    paymentMethod: 'cod', // 'cod' | 'bank_transfer'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);
  const [copiedBank, setCopiedBank] = useState(false);

  if (!isCheckoutOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 150000;
  const shippingFee = totalPrice >= FREE_SHIPPING_THRESHOLD ? 0 : 20000;
  const finalTotal = totalPrice + shippingFee;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Vui lòng nhập họ và tên';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^(0[3|5|7|8|9])[0-9]{8}$/.test(formData.phone.replace(/\s/g, ''))) {
      errs.phone = 'Số điện thoại không hợp lệ (10 chữ số)';
    }
    if (!formData.address.trim()) {
      errs.address = 'Vui lòng nhập địa chỉ giao hàng cụ thể';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock API request timing
    setTimeout(() => {
      const orderId = 'HDX-' + Math.floor(100000 + Math.random() * 900000);
      const orderSummary = {
        id: orderId,
        date: new Date().toLocaleString('vi-VN'),
        customer: { ...formData },
        items: [...cart],
        subtotal: totalPrice,
        shippingFee,
        total: finalTotal,
      };

      setCompletedOrder(orderSummary);
      setIsSubmitting(false);
      clearCart();

      // Confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00C995', '#FFC52E', '#F4EBD8', '#062A1F'],
        });
      } catch (err) {
        console.log(err);
      }
    }, 900);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setCompletedOrder(null);
    setFormData({
      fullName: '',
      phone: '',
      address: '',
      city: 'Đà Nẵng',
      notes: '',
      paymentMethod: 'cod',
    });
  };

  const copyBankInfo = () => {
    navigator.clipboard?.writeText('HẠT DÁNG XINH - 0123456789 (Vietcombank)');
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#062A1F] border border-[#00C995]/30 rounded-3xl shadow-2xl overflow-hidden z-10 text-[#F4EBD8] max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#00C995]/15 flex items-center justify-between bg-[#041c14] flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#00C995]/20 text-[#00C995]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  {completedOrder ? 'Xác Nhận Đơn Hàng' : 'Đặt Hàng & Thanh Toán'}
                </h3>
                <p className="text-xs text-[#D1C5AE]/70">
                  {completedOrder ? 'Cảm ơn bạn đã tin chọn Hạt Dáng Xinh' : 'Thông tin người nhận và hình thức thanh toán'}
                </p>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-xl text-[#D1C5AE] hover:text-white hover:bg-[#00C995]/20 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-8 overflow-y-auto flex-1">
            {completedOrder ? (
              /* ORDER SUCCESS CONFIRMATION VIEW */
              <div className="space-y-6">
                <div className="text-center py-4">
                  <div className="w-16 h-16 rounded-full bg-[#00C995]/20 border border-[#00C995] flex items-center justify-center text-[#00C995] mx-auto mb-3">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#00C995] bg-[#00C995]/15 px-3 py-1 rounded-full">
                    Đã Ghi Nhận Thành Công
                  </span>
                  <h2 className="text-2xl font-display font-bold text-white mt-2">
                    CẢM ƠN BẠN ĐÃ ĐẶT HÀNG!
                  </h2>
                  <p className="text-sm text-[#D1C5AE]/80 max-w-md mx-auto mt-1">
                    Đơn hàng của bạn đang được tiếp nhận và xử lý. Đội ngũ Hạt Dáng Xinh sẽ liên hệ sớm để xác nhận và giao đến bạn.
                  </p>
                </div>

                {/* Receipt Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#041a12] border border-[#00C995]/25 space-y-4">
                  <div className="flex flex-wrap items-center justify-between pb-3 border-b border-[#00C995]/15 text-xs">
                    <div>
                      <span className="text-[#D1C5AE]/60">Mã đơn hàng:</span>{' '}
                      <strong className="text-lg text-[#FFC52E] font-mono ml-1">{completedOrder.id}</strong>
                    </div>
                    <div className="text-[#D1C5AE]/60">
                      Thời gian: <span className="text-white">{completedOrder.date}</span>
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="text-[#D1C5AE]/60">Người nhận:</p>
                      <p className="font-semibold text-white mt-0.5">{completedOrder.customer.fullName}</p>
                      <p className="text-[#00C995] font-mono">{completedOrder.customer.phone}</p>
                    </div>
                    <div>
                      <p className="text-[#D1C5AE]/60">Địa chỉ giao hàng:</p>
                      <p className="font-semibold text-white mt-0.5">
                        {completedOrder.customer.address}, {completedOrder.customer.city}
                      </p>
                      {completedOrder.customer.notes && (
                        <p className="text-[#D1C5AE]/60 italic mt-0.5">Ghi chú: "{completedOrder.customer.notes}"</p>
                      )}
                    </div>
                  </div>

                  {/* Payment status */}
                  <div className="p-3 rounded-xl bg-[#062A1F] border border-[#00C995]/20 text-xs">
                    <p className="text-[#D1C5AE]/70 mb-1">Phương thức thanh toán:</p>
                    <p className="font-bold text-white flex items-center gap-2">
                      {completedOrder.customer.paymentMethod === 'cod' ? (
                        <>
                          <Truck className="w-4 h-4 text-[#00C995]" />
                          Thanh toán tiền mặt khi nhận hàng (COD)
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-4 h-4 text-[#FFC52E]" />
                          Chuyển khoản ngân hàng (Đang chờ xác nhận thanh toán)
                        </>
                      )}
                    </p>

                    {completedOrder.customer.paymentMethod === 'bank_transfer' && (
                      <div className="mt-3 p-3 rounded-lg bg-[#03140e] border border-[#00C995]/30 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#00C995] font-bold">Thông tin chuyển khoản:</span>
                          <button
                            onClick={copyBankInfo}
                            className="text-[11px] text-[#FFC52E] hover:underline flex items-center gap-1 cursor-pointer"
                          >
                            <Copy className="w-3 h-3" /> {copiedBank ? 'Đã sao chép!' : 'Sao chép'}
                          </button>
                        </div>
                        <p className="text-[12px] text-white">Ngân hàng: <strong>Vietcombank</strong> (CN Đà Nẵng)</p>
                        <p className="text-[12px] text-white">Số tài khoản: <strong className="font-mono text-[#FFC52E]">9988776655</strong></p>
                        <p className="text-[12px] text-white">Chủ tài khoản: <strong>HẠT DÁNG XINH</strong></p>
                        <p className="text-[12px] text-white">
                          Cú pháp: <strong className="font-mono text-[#00C995]">{completedOrder.id} - {completedOrder.customer.phone}</strong>
                        </p>
                        <p className="text-[10px] text-[#D1C5AE]/60 italic mt-1">
                          * Lưu ý: Đây là biểu mẫu giao dịch frontend mô phỏng. Nhân viên Hạt Dáng Xinh sẽ xác nhận đơn hàng qua điện thoại trước khi gửi.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Items List */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#00C995] mb-2">
                      Sản phẩm đã đặt ({completedOrder.items.length})
                    </p>
                    <div className="space-y-2">
                      {completedOrder.items.map((it, idx) => (
                        <div key={idx} className="flex justify-between items-center text-xs py-1.5 border-b border-[#00C995]/10">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[#00C995] font-bold">{it.quantity}x</span>
                            <span className="text-white font-medium">{it.name}</span>
                          </div>
                          <span className="font-mono text-[#FFC52E]">
                            {formatPrice(it.price * it.quantity)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price breakdown */}
                  <div className="pt-2 text-xs space-y-1">
                    <div className="flex justify-between text-[#D1C5AE]/80">
                      <span>Tạm tính</span>
                      <span>{formatPrice(completedOrder.subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-[#D1C5AE]/80">
                      <span>Phí vận chuyển</span>
                      <span>{completedOrder.shippingFee === 0 ? 'Miễn phí' : formatPrice(completedOrder.shippingFee)}</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-[#00C995]/15">
                      <span>Tổng thanh toán</span>
                      <span className="text-[#FFC52E] font-extrabold">{formatPrice(completedOrder.total)}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => window.print()}
                    className="flex-1 py-3 rounded-xl border border-[#00C995]/40 hover:bg-[#00C995]/15 text-[#F4EBD8] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    In thông tin đơn hàng
                  </button>
                  <button
                    onClick={handleClose}
                    className="flex-1 py-3 rounded-xl bg-[#00C995] hover:bg-[#00e0a6] text-[#050807] text-xs font-bold transition-all shadow-lg shadow-[#00C995]/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Tiếp tục mua sắm
                  </button>
                </div>
              </div>
            ) : (
              /* CHECKOUT FORM VIEW */
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Order quick summary */}
                <div className="p-4 rounded-2xl bg-[#041a12] border border-[#00C995]/15 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[#D1C5AE]/70">Đơn hàng gồm:</span>{' '}
                    <strong className="text-white">{cart.reduce((s, i) => s + i.quantity, 0)} sản phẩm</strong>
                  </div>
                  <div>
                    <span className="text-[#D1C5AE]/70">Tổng tiền:</span>{' '}
                    <strong className="text-base text-[#FFC52E] font-bold">{formatPrice(finalTotal)}</strong>
                  </div>
                </div>

                {/* Customer Information Form */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#00C995] flex items-center gap-1.5">
                    1. Thông tin giao hàng
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#D1C5AE] mb-1 font-medium">
                        Họ và tên người nhận <span className="text-[#FFC52E]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Nguyễn Văn A"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#03140e] border text-white text-sm focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-400 focus:border-red-400' : 'border-[#00C995]/25 focus:border-[#00C995]'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs text-[#D1C5AE] mb-1 font-medium">
                        Số điện thoại nhận hàng <span className="text-[#FFC52E]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0905 123 456"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#03140e] border text-white text-sm focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-400 focus:border-red-400' : 'border-[#00C995]/25 focus:border-[#00C995]'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs text-[#D1C5AE] mb-1 font-medium">
                        Địa chỉ chi tiết (Số nhà, Tên đường, Phường/Xã) <span className="text-[#FFC52E]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Số 123 Đường Nguyễn Văn Linh..."
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#03140e] border text-white text-sm focus:outline-none transition-colors ${
                          errors.address ? 'border-red-400 focus:border-red-400' : 'border-[#00C995]/25 focus:border-[#00C995]'
                        }`}
                      />
                      {errors.address && <p className="text-[11px] text-red-400 mt-1">{errors.address}</p>}
                    </div>

                    <div>
                      <label className="block text-xs text-[#D1C5AE] mb-1 font-medium">
                        Tỉnh / Thành phố
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#03140e] border border-[#00C995]/25 text-white text-sm focus:outline-none focus:border-[#00C995]"
                      >
                        <option value="Đà Nẵng">Đà Nẵng</option>
                        <option value="Hà Nội">Hà Nội</option>
                        <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                        <option value="Quảng Nam">Quảng Nam</option>
                        <option value="Huế">Thừa Thiên Huế</option>
                        <option value="Khác">Tỉnh thành khác</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#D1C5AE] mb-1 font-medium">
                      Ghi chú đơn hàng (Thời gian giao, yêu cầu thêm)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Giao trong giờ hành chính, gọi trước khi giao..."
                      className="w-full px-3.5 py-2 rounded-xl bg-[#03140e] border border-[#00C995]/25 text-white text-sm focus:outline-none focus:border-[#00C995]"
                    />
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#00C995] flex items-center gap-1.5">
                    2. Phương thức thanh toán
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                        formData.paymentMethod === 'cod'
                          ? 'bg-[#00C995]/15 border-[#00C995] shadow-lg shadow-[#00C995]/10'
                          : 'bg-[#041a12] border-[#00C995]/15 hover:border-[#00C995]/30'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={() => {}}
                        className="mt-1 accent-[#00C995]"
                      />
                      <div>
                        <div className="flex items-center gap-1.5 font-bold text-white text-xs sm:text-sm">
                          <Truck className="w-4 h-4 text-[#00C995]" />
                          Thanh toán COD
                        </div>
                        <p className="text-[11px] text-[#D1C5AE]/70 mt-1">
                          Thanh toán bằng tiền mặt khi shipper giao tận tay. Kiểm tra hàng trước khi nhận.
                        </p>
                      </div>
                    </label>

                    <label
                      onClick={() => setFormData({ ...formData, paymentMethod: 'bank_transfer' })}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                        formData.paymentMethod === 'bank_transfer'
                          ? 'bg-[#00C995]/15 border-[#00C995] shadow-lg shadow-[#00C995]/10'
                          : 'bg-[#041a12] border-[#00C995]/15 hover:border-[#00C995]/30'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={formData.paymentMethod === 'bank_transfer'}
                        onChange={() => {}}
                        className="mt-1 accent-[#00C995]"
                      />
                      <div>
                        <div className="flex items-center gap-1.5 font-bold text-white text-xs sm:text-sm">
                          <CreditCard className="w-4 h-4 text-[#FFC52E]" />
                          Chuyển khoản ngân hàng
                        </div>
                        <p className="text-[11px] text-[#D1C5AE]/70 mt-1">
                          Chuyển khoản qua mã QR/STK sau khi đặt hàng. Nhân viên sẽ liên hệ xác nhận.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Transparency Note according to prompt */}
                <div className="p-3.5 rounded-xl bg-[#041610] border border-[#00C995]/20 text-[11px] text-[#D1C5AE]/70 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00C995] flex-shrink-0 mt-0.5" />
                  <span>
                    Hạt Dáng Xinh cam kết bảo mật thông tin đặt hàng. Quý khách được quyền đồng kiểm tra gói hàng trước khi thanh toán.
                  </span>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || cart.length === 0}
                    className="w-full py-4 rounded-2xl bg-[#00C995] hover:bg-[#00e0a6] disabled:opacity-50 text-[#050807] font-extrabold text-sm sm:text-base transition-all shadow-xl shadow-[#00C995]/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#050807] border-t-transparent rounded-full animate-spin" />
                        Đang xử lý đơn hàng...
                      </span>
                    ) : (
                      <span>XÁC NHẬN ĐẶT HÀNG • {formatPrice(finalTotal)}</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
