import Image from 'next/image';
import Link from 'next/link';
import Tap2Bay from '@/components/logo/Tap2Bay';
import NTI from '@/assets/NTI.png';
import ITI from '@/assets/ITI.png';

const Footer = () => {
    return (
        <footer className="bg-[#2C1A0E] text-[#E8D9C8]" dir="rtl">
            <div className="max-w-6xl mx-auto px-6 py-12">

                {/* ── Top row ── */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#3D2A1A]">

                    {/* Logo */}
                    <Tap2Bay width={152} dark showText />

                    {/* ITI + NTI */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity duration-300">
                            <Image
                                src={ITI}
                                alt="ITI"
                                width={30}
                                height={30}
                                className="object-contain brightness-0 invert"
                            />
                            <div className="flex flex-col leading-none">
                                <span className="text-white text-xs font-bold">ITI</span>
                                <span className="text-[9px] text-[#8C7B6E] tracking-wide">Information Technology Institute</span>
                            </div>
                        </div>

                        <div className="w-px h-8 bg-[#3D2A1A]" />

                        <div className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity duration-300">
                            <Image
                                src={NTI}
                                alt="NTI"
                                width={30}
                                height={30}
                                className="object-contain brightness-0 invert"
                            />
                            <div className="flex flex-col leading-none">
                                <span className="text-white text-xs font-bold">NTI</span>
                                <span className="text-[9px] text-[#8C7B6E] tracking-wide">National Telecommunication Institute</span>
                            </div>
                        </div>
                    </div>

                    {/* Nav links */}
                    <div className="flex items-center gap-8 text-sm">
                        <Link href="/products" className="text-[#8C7B6E] hover:text-[#C8793A] transition-colors">المنتجات</Link>
                        <Link href="/scan" className="text-[#8C7B6E] hover:text-[#C8793A] transition-colors">مسح الكود</Link>
                        <Link href="/auth/login" className="text-[#8C7B6E] hover:text-[#C8793A] transition-colors">الأدمن</Link>
                    </div>
                </div>

                {/* ── Bottom row ── */}
                <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-5">

                    {/* Tagline */}
                    <p className="text-[#8C7B6E] text-xs">
                        اسكن → شوف السعر → ادفع. بسيطة وسهلة.
                    </p>

                    {/* Team credits */}
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-[#5A4535] text-[10px] font-semibold tracking-widest uppercase">Built by</p>
                        <div className="flex items-center gap-4">

                            {/* Ahmed — Frontend */}
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-[#C8793A]/25 border border-[#C8793A]/35 flex items-center justify-center shrink-0">
                                    <span className="text-[#F0A96B] text-[10px] font-black">AS</span>
                                </div>
                                <div className="flex flex-col leading-none">
                                    <span className="text-[#E8D9C8] text-[10px] font-bold">Ahmed.Sa3d</span>
                                    <span className="text-[#5A4535] text-[9px]">Frontend · Web</span>
                                </div>
                            </div>

                            <div className="w-px h-7 bg-[#3D2A1A]" />

                            {/* Abdelrahman — Backend */}
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-[#1565C0]/20 border border-[#1565C0]/30 flex items-center justify-center shrink-0">
                                    <span className="text-[#7EB8D4] text-[10px] font-black">AA</span>
                                </div>
                                <div className="flex flex-col leading-none">
                                    <span className="text-[#E8D9C8] text-[10px] font-bold">Abdelrahman.S.Amin</span>
                                    <span className="text-[#5A4535] text-[9px]">Backend</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Online status */}
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#4A9B6F] animate-pulse" />
                        <span className="text-[#4A9B6F] text-xs font-medium">الكافية شغالة</span>
                    </div>
                </div>

                {/* ── Copyright ── */}
                <div className="mt-5 pt-5 border-t border-[#3D2A1A] text-center">
                    <p className="text-[#5A4535] text-[10px]">
                        © 2025 Tap2Bay Café · تابع لـ{' '}
                        <span className="text-[#ef5350] font-semibold">ITI</span>
                        {' & '}
                        <span className="text-[#42a5f5] font-semibold">NTI</span>
                        {' '}— وزارة الاتصالات وتكنولوجيا المعلومات
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;