import { useState } from "react";
import Icon from "@/components/ui/icon";

const CATALYST_IMG = "https://cdn.poehali.dev/projects/b51c012f-6a7f-4545-b7e8-18c4de32a23c/bucket/9fed808f-7e51-40d0-8b45-13f8274527fc.png";
const HERO_BG = "https://cdn.poehali.dev/projects/b51c012f-6a7f-4545-b7e8-18c4de32a23c/files/506ffeb7-cc74-4448-9a73-a31aebe95b27.jpg";

const PHONE = "+7 (949) 378-59-98";
const PHONE_HREF = "tel:+79493785998";
const WA_HREF = "https://wa.me/79493785998";

const navLinks = [
  { label: "О компании", href: "#about" },
  { label: "Как продать", href: "#how" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const steps = [
  {
    num: "01",
    title: "Оставьте заявку",
    desc: "Заполните форму или позвоните нам — укажите марку авто и регион",
    icon: "ClipboardList",
  },
  {
    num: "02",
    title: "Получите оценку",
    desc: "Наш специалист свяжется с вами в течение 15 минут и назовёт цену",
    icon: "Calculator",
  },
  {
    num: "03",
    title: "Выезд и сделка",
    desc: "Приедем к вам, демонтируем катализатор и выплатим деньги на месте",
    icon: "Banknote",
  },
];

const reviews = [
  {
    name: "Андрей К.",
    car: "BMW 5 Series",
    text: "Очень быстро и честно. Оценили катализатор за 10 минут, приехали на следующий день и сразу выплатили деньги. Рекомендую!",
    stars: 5,
    date: "12 мая 2025",
  },
  {
    name: "Мария Л.",
    car: "Toyota Camry",
    text: "Обращалась впервые — боялась обмана. Но всё прошло отлично, цена была выше чем у конкурентов. Буду советовать знакомым.",
    stars: 5,
    date: "3 апреля 2025",
  },
  {
    name: "Сергей Д.",
    car: "Honda Accord",
    text: "Продал два катализатора. Взвесили честно, заплатили сразу. Работают профессионально, всё чётко и без лишних вопросов.",
    stars: 5,
    date: "18 марта 2025",
  },
];

const stats = [
  { value: "5 000+", label: "Катализаторов куплено" },
  { value: "15 мин", label: "Среднее время оценки" },
  { value: "7 лет", label: "На рынке скупки" },
  { value: "100%", label: "Честная цена" },
];

const prices = [
  { brand: "Toyota / Lexus", price: "до 45 000 ₽", hot: true },
  { brand: "BMW / Mercedes", price: "до 38 000 ₽", hot: false },
  { brand: "Honda / Nissan", price: "до 30 000 ₽", hot: false },
  { brand: "Ford / Opel", price: "до 18 000 ₽", hot: false },
  { brand: "Отечественные авто", price: "до 8 000 ₽", hot: false },
  { brand: "Дорогостоящие иномарки", price: "до 120 000 ₽", hot: true },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", car: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0E0B08] text-[#F5EDDF]">

      {/* TOP BAR — телефон всегда виден */}
      <div className="bg-[#FF6B1A] text-[#0E0B08] text-sm py-2 px-4 text-center font-semibold">
        📞 Звоните прямо сейчас — оценим за 15 минут:&nbsp;
        <a href={PHONE_HREF} className="font-bold underline underline-offset-2">{PHONE}</a>
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-[#0E0B08]/95 backdrop-blur-md border-b border-[#2A2218]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-[#FF6B1A] flex items-center justify-center">
              <Icon name="Flame" size={18} className="text-[#0E0B08]" />
            </div>
            <span className="font-display text-xl font-bold tracking-wide text-white">
              КАТА<span className="text-[#FF6B1A]">СКУПКА</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[#A09080] hover:text-[#FF6B1A] transition-colors duration-200 font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={PHONE_HREF} className="text-white font-bold text-sm hover:text-[#FF6B1A] transition-colors">
              {PHONE}
            </a>
            <a
              href="#order"
              className="inline-flex items-center gap-2 bg-[#FF6B1A] hover:bg-[#FF8C42] text-[#0E0B08] font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200"
            >
              Оставить заявку
            </a>
          </div>

          <button
            className="md:hidden text-[#A09080]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#0E0B08] border-t border-[#2A2218] px-4 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-base text-[#A09080] hover:text-[#FF6B1A] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a href={PHONE_HREF} className="text-white font-bold text-lg text-center py-2">
              {PHONE}
            </a>
            <a
              href="#order"
              onClick={() => setMenuOpen(false)}
              className="bg-[#FF6B1A] text-[#0E0B08] font-semibold text-sm px-5 py-3 rounded-lg text-center"
            >
              Оставить заявку
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0B08] via-[#0E0B08]/85 to-[#0E0B08]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B08] via-transparent to-transparent" />

        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,107,26,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,26,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#FF6B1A]/15 border border-[#FF6B1A]/30 rounded-full px-4 py-1.5 mb-5">
              <div className="w-2 h-2 rounded-full bg-[#FF6B1A]" />
              <span className="text-[#FF6B1A] text-sm font-medium">Выезд по всей республике · Оплата в день обращения</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-4">ДОРОГО КУПИМ
КАТАЛИЗАТОР
С ВАШЕГО АВТО</h1>

            <p className="text-xl text-[#C0B09A] mb-3 font-semibold">
              Цена по XRF-спектрометру — без обмана и занижения
            </p>
            <p className="text-base text-[#A09080] mb-8 leading-relaxed">
              Оценка онлайн за 15 минут. Выезд к вам. Деньги на руки сразу после демонтажа.
            </p>

            {/* Доверие-факторы */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["Без предоплаты", "Точный анализ спектрометром", "Выезд бесплатно", "Работаем официально"].map(t => (
                <span key={t} className="inline-flex items-center gap-1.5 bg-[#1A1510] border border-[#2A2218] rounded-full px-3 py-1 text-xs text-[#C0B09A] font-medium">
                  <Icon name="Check" size={12} className="text-[#FF6B1A]" />
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-[#FF6B1A] hover:bg-[#FF8C42] text-[#0E0B08] font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 neon-glow"
              >
                <Icon name="Phone" size={20} />
                Позвонить сейчас
              </a>
              <a
                href="#order"
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-[#FF6B1A]/40 hover:border-[#FF6B1A] text-[#F5EDDF] font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200"
              >
                <Icon name="FileText" size={18} className="text-[#FF6B1A]" />
                Оставить заявку
              </a>
            </div>

            <p className="mt-4 text-xs text-[#4A3D2F]">Перезвоним в течение 15 минут в рабочее время (8:00–22:00)</p>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 top-0 w-1/2 hidden lg:flex items-end justify-end pointer-events-none">
          <img
            src={CATALYST_IMG}
            alt="Спектрометр Vanta"
            className="h-full w-full object-cover opacity-45"
            style={{ maskImage: 'linear-gradient(to left, rgba(0,0,0,0.7) 0%, transparent 65%)' }}
          />
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-[#2A2218] bg-[#0E0B08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-1">{s.value}</div>
              <div className="text-sm text-[#A09080]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICES */}
      <section className="py-16 sm:py-20 bg-[#111009]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="text-[#FF6B1A] font-semibold text-sm uppercase tracking-widest mb-3">Актуальные цены</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              СКОЛЬКО СТОИТ <span className="gradient-text">ВАШ КАТАЛИЗАТОР</span>
            </h2>
            <p className="text-[#A09080] mt-3">Цены ориентировочные. Точная стоимость определяется после анализа XRF-спектрометром Vanta L.</p>
            <div className="inline-flex items-center gap-2 bg-[#FF6B1A]/10 border border-[#FF6B1A]/25 rounded-full px-4 py-1.5 mt-3">
              <Icon name="ScanLine" size={14} className="text-[#FF6B1A]" />
              <span className="text-[#FF6B1A] text-xs font-medium">Анализ спектрометром — бесплатно, на месте</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {prices.map((p) => (
              <div
                key={p.brand}
                className={`relative rounded-2xl p-5 flex items-center justify-between border transition-all ${p.hot ? 'bg-[#FF6B1A]/10 border-[#FF6B1A]/40' : 'bg-[#161210] border-[#2A2218]'}`}
              >
                {p.hot && (
                  <span className="absolute -top-2.5 right-4 bg-[#FF6B1A] text-[#0E0B08] text-xs font-bold px-2 py-0.5 rounded-full">
                    🔥 Популярно
                  </span>
                )}
                <span className="font-medium text-[#C0B09A]">{p.brand}</span>
                <div className="text-right">
                  <div className={`font-display text-xl font-bold ${p.hot ? 'text-[#FF6B1A]' : 'text-white'}`}>{p.price}</div>
                  <div className="text-xs text-[#A09080]">за кг</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-[#FF6B1A] hover:bg-[#FF8C42] text-[#0E0B08] font-bold text-base px-10 py-4 rounded-xl transition-all duration-200 neon-glow"
            >
              <Icon name="Phone" size={18} />
              Узнать точную цену
            </a>
          </div>
        </div>
      </section>

      {/* ORDER FORM — вынесена выше, ближе к верху страницы */}
      <section id="order" className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B1A]/5 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Левая колонка — усиление доверия */}
            <div>
              <div className="text-[#FF6B1A] font-semibold text-sm uppercase tracking-widest mb-4">Быстрая оценка</div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                ОСТАВЬТЕ ЗАЯВКУ —<br />
                <span className="gradient-text">ПЕРЕЗВОНИМ ЗА 15 МИН</span>
              </h2>
              <p className="text-[#A09080] mb-8">Без обязательств. Просто узнайте цену — и сами решите, продавать или нет.</p>

              <div className="space-y-4">
                {[
                  { icon: "ShieldCheck", title: "Честная цена по спектрометру", desc: "Анализируем металл прибором — никакого «на глаз»" },
                  { icon: "Banknote", title: "Деньги сразу", desc: "Наличные или перевод на карту в момент сделки" },
                  { icon: "Car", title: "Выезд к вам", desc: "Бесплатно приедем в любую точку республики" },
                  { icon: "Clock", title: "Работаем ежедневно", desc: "С 8:00 до 22:00 без выходных" },
                ].map(item => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B1A]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name={item.icon} size={18} className="text-[#FF6B1A]" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{item.title}</div>
                      <div className="text-[#A09080] text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-[#161210] border border-[#2A2218] rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF6B1A] flex items-center justify-center shrink-0">
                  <Icon name="Phone" size={22} className="text-[#0E0B08]" />
                </div>
                <div>
                  <div className="text-[#A09080] text-xs mb-0.5">Или просто позвоните</div>
                  <a href={PHONE_HREF} className="font-display text-2xl font-bold text-white hover:text-[#FF6B1A] transition-colors">
                    {PHONE}
                  </a>
                </div>
              </div>
            </div>

            {/* Форма */}
            <div>
              {submitted ? (
                <div className="bg-[#161210] border border-[#FF6B1A]/30 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#FF6B1A]/15 flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={32} className="text-[#FF6B1A]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
                  <p className="text-[#A09080] mb-6">Мы позвоним вам в течение 15 минут. Спасибо!</p>
                  <a href={WA_HREF} className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                    <Icon name="MessageCircle" size={18} />
                    Написать в WhatsApp
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#161210] border border-[#2A2218] rounded-2xl p-8 space-y-4"
                >
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Узнать цену бесплатно</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#A09080] mb-2">Ваше имя *</label>
                      <input
                        type="text"
                        required
                        placeholder="Иван Иванов"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-[#0E0B08] border border-[#2A2218] rounded-xl px-4 py-3 text-white placeholder-[#4A3D2F] focus:outline-none focus:border-[#FF6B1A] transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#A09080] mb-2">Телефон *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+7 (949) 000-00-00"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-[#0E0B08] border border-[#2A2218] rounded-xl px-4 py-3 text-white placeholder-[#4A3D2F] focus:outline-none focus:border-[#FF6B1A] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#A09080] mb-2">Марка и модель авто</label>
                    <input
                      type="text"
                      placeholder="Toyota Camry 2018"
                      value={form.car}
                      onChange={(e) => setForm({ ...form, car: e.target.value })}
                      className="w-full bg-[#0E0B08] border border-[#2A2218] rounded-xl px-4 py-3 text-white placeholder-[#4A3D2F] focus:outline-none focus:border-[#FF6B1A] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#A09080] mb-2">Комментарий</label>
                    <textarea
                      rows={3}
                      placeholder="Дополнительная информация о катализаторе..."
                      value={form.comment}
                      onChange={(e) => setForm({ ...form, comment: e.target.value })}
                      className="w-full bg-[#0E0B08] border border-[#2A2218] rounded-xl px-4 py-3 text-white placeholder-[#4A3D2F] focus:outline-none focus:border-[#FF6B1A] transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FF6B1A] hover:bg-[#FF8C42] text-[#0E0B08] font-bold text-base py-4 rounded-xl transition-all duration-200 neon-glow flex items-center justify-center gap-2"
                  >
                    <Icon name="Send" size={18} />
                    Узнать цену бесплатно
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-[#2A2218]" />
                    <span className="text-xs text-[#4A3D2F]">или</span>
                    <div className="h-px flex-1 bg-[#2A2218]" />
                  </div>

                  <a
                    href={WA_HREF}
                    className="w-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] font-semibold text-sm py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Icon name="MessageCircle" size={16} />
                    Написать в WhatsApp
                  </a>

                  <p className="text-center text-xs text-[#4A3D2F]">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 sm:py-28 bg-[#111009]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#FF6B1A] font-semibold text-sm uppercase tracking-widest mb-4">О компании</div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                ЧЕСТНАЯ ЦЕНА<br />
                <span className="gradient-text">С 2018 ГОДА</span>
              </h2>
              <p className="text-[#A09080] text-base leading-relaxed mb-6">
                Мы специализируемся на скупке катализаторов и нейтрализаторов с
                автомобилей. За 7 лет работы мы купили более 5 000 катализаторов
                и заработали доверие тысяч клиентов по всей республике.
              </p>
              <p className="text-[#A09080] text-base leading-relaxed mb-8">
                Используем профессиональный XRF-спектрометр Vanta L для точного
                анализа содержания металлов платиновой группы. Цена — по реальным
                данным прибора, без занижений.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "ShieldCheck", text: "Официальная деятельность" },
                  { icon: "TrendingUp", text: "Цена по биржевым котировкам" },
                  { icon: "Clock", text: "Оценка за 15 минут" },
                  { icon: "MapPin", text: "Выезд по всей республике" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FF6B1A]/15 flex items-center justify-center shrink-0">
                      <Icon name={item.icon} size={18} className="text-[#FF6B1A]" />
                    </div>
                    <span className="text-sm text-[#C0B09A] font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-[#FF6B1A]/10 rounded-3xl blur-2xl" />
              <img
                src={CATALYST_IMG}
                alt="Спектрометр Vanta"
                className="relative rounded-2xl w-full object-cover h-80 lg:h-96"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0E0B08]/80 backdrop-blur-sm rounded-xl p-4 border border-[#2A2218]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B1A] flex items-center justify-center">
                    <Icon name="Award" size={18} className="text-[#0E0B08]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Лучшая цена гарантирована</div>
                    <div className="text-[#A09080] text-xs">Если найдёте дороже — доплатим разницу</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO SELL */}
      <section id="how" className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="text-[#FF6B1A] font-semibold text-sm uppercase tracking-widest mb-4">Как продать</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              ТРИ ПРОСТЫХ <span className="gradient-text">ШАГА</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="relative bg-[#161210] border border-[#2A2218] rounded-2xl p-8 card-hover"
              >
                <div className="font-display text-6xl font-bold text-[#FF6B1A]/10 absolute top-4 right-6">
                  {step.num}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-[#FF6B1A]/15 flex items-center justify-center mb-6">
                  <Icon name={step.icon} size={26} className="text-[#FF6B1A]" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-[#A09080] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-[#FF6B1A] hover:bg-[#FF8C42] text-[#0E0B08] font-bold text-base px-10 py-4 rounded-xl transition-all duration-200 neon-glow"
            >
              <Icon name="Phone" size={18} />
              Позвонить и узнать цену
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 sm:py-28 bg-[#111009]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="text-[#FF6B1A] font-semibold text-sm uppercase tracking-widest mb-4">Отзывы</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              ЧТО ГОВОРЯТ <span className="gradient-text">КЛИЕНТЫ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="bg-[#161210] border border-[#2A2218] rounded-2xl p-6 card-hover flex flex-col"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(r.stars)].map((_, j) => (
                    <Icon key={j} name="Star" size={16} className="text-[#FF6B1A]" />
                  ))}
                </div>
                <p className="text-[#C0B09A] text-sm leading-relaxed mb-6 flex-1">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white text-sm">{r.name}</div>
                    <div className="text-[#A09080] text-xs">{r.car}</div>
                  </div>
                  <div className="text-[#4A3D2F] text-xs">{r.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="text-[#FF6B1A] font-semibold text-sm uppercase tracking-widest mb-4">Контакты</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              СВЯЖИТЕСЬ <span className="gradient-text">С НАМИ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "Phone",
                title: "Телефон",
                value: PHONE,
                sub: "Звонок по республике",
                href: PHONE_HREF,
              },
              {
                icon: "MessageCircle",
                title: "WhatsApp / Telegram",
                value: PHONE,
                sub: "Напишите в любое время",
                href: WA_HREF,
              },
              {
                icon: "Clock",
                title: "Режим работы",
                value: "Пн–Вс: 8:00–22:00",
                sub: "Выезд — по договорённости",
                href: null,
              },
            ].map((c) => (
              <div
                key={c.title}
                className="bg-[#161210] border border-[#2A2218] rounded-2xl p-8 text-center card-hover"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FF6B1A]/15 flex items-center justify-center mx-auto mb-4">
                  <Icon name={c.icon} size={26} className="text-[#FF6B1A]" />
                </div>
                <div className="text-[#A09080] text-sm mb-1">{c.title}</div>
                {c.href ? (
                  <a href={c.href} className="font-display text-xl font-bold text-white hover:text-[#FF6B1A] transition-colors block mb-1">
                    {c.value}
                  </a>
                ) : (
                  <div className="font-display text-xl font-bold text-white mb-1">{c.value}</div>
                )}
                <div className="text-[#4A3D2F] text-xs">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STICKY CTA — мобайл */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0E0B08]/95 backdrop-blur-sm border-t border-[#2A2218] p-3 flex gap-3">
        <a
          href={PHONE_HREF}
          className="flex-1 bg-[#FF6B1A] hover:bg-[#FF8C42] text-[#0E0B08] font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2"
        >
          <Icon name="Phone" size={16} />
          Позвонить
        </a>
        <a
          href={WA_HREF}
          className="flex-1 bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] font-semibold text-sm py-3 rounded-xl flex items-center justify-center gap-2"
        >
          <Icon name="MessageCircle" size={16} />
          WhatsApp
        </a>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-[#2A2218] py-8 mb-16 md:mb-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-[#FF6B1A] flex items-center justify-center">
              <Icon name="Flame" size={14} className="text-[#0E0B08]" />
            </div>
            <span className="font-display text-lg font-bold text-white">
              КАТА<span className="text-[#FF6B1A]">СКУПКА</span>
            </span>
          </div>
          <p className="text-[#4A3D2F] text-sm">© 2025 КатаСкупка. Все права защищены.</p>
          <div className="flex gap-4 text-sm text-[#4A3D2F]">
            <a href="#" className="hover:text-[#FF6B1A] transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  );
}