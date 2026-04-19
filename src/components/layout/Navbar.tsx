'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Tap2Bay from '../logo/Tap2Bay';

const navLinks = [
    { name: 'المنتجات', href: '/products' },
    { name: 'مسح الكود', href: '/scan' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-[#FDF8F3]/80 backdrop-blur-lg shadow-sm border-b border-[#E8D9C8] py-2'
                    : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* ── Logo ── */}
                <Link href="/" className="shrink-0 group">
                    {/* Desktop: full logo with text */}
                    <span className="hidden sm:block transition-opacity duration-300 group-hover:opacity-80">
                        <Tap2Bay width={148} showText />
                    </span>
                    {/* Mobile: icon only */}
                    <span className="sm:hidden">
                        <Tap2Bay width={36} showText={false} />
                    </span>
                </Link>

                {/* ── Middle Tabs ── */}
                <div className="hidden md:flex items-center bg-[#F4EBE2]/60 p-1 rounded-2xl border border-[#E8D9C8]/60">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 group ${isActive ? 'text-white' : 'text-[#8C7B6E] hover:text-[#C8793A]'
                                    }`}
                            >
                                {isActive && (
                                    <span className="absolute inset-0 bg-[#C8793A] rounded-xl shadow-md -z-10" />
                                )}
                                {!isActive && (
                                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300 -z-10 scale-95 group-hover:scale-100" />
                                )}
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* ── Admin login button ── */}
                <div className="hidden md:flex items-center shrink-0">
                    <Link
                        href="/auth/login"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2C1A0E] hover:bg-[#3D2A1A] text-white font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#2C1A0E]/30 active:scale-95"
                    >
                        {/* Admin / shield icon */}
                        <svg
                            className="w-3.5 h-3.5 opacity-80"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        دخول الأدمن
                    </Link>
                </div>

                {/* ── Mobile Hamburger ── */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="قائمة التنقل"
                >
                    <span className={`w-6 h-0.5 bg-[#2C1A0E] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`w-6 h-0.5 bg-[#2C1A0E] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`w-6 h-0.5 bg-[#2C1A0E] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* ── Mobile Menu ── */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="bg-[#FDF8F3] border-t border-[#E8D9C8] px-6 py-6 flex flex-col gap-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={`font-bold text-base p-3 rounded-xl transition-colors ${pathname === link.href
                                    ? 'bg-[#C8793A]/10 text-[#C8793A]'
                                    : 'text-[#2C1A0E] hover:bg-[#F4EBE2]'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <hr className="border-[#E8D9C8] my-1" />
                    <Link
                        href="/auth/login"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-center gap-2 bg-[#2C1A0E] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-lg"
                    >
                        <svg className="w-4 h-4 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        دخول الأدمن
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;