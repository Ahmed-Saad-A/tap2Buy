'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense, useState } from 'react';

const ADMIN_EMAIL = 'Ahmed-Saad@gmail.com';
const ADMIN_PASSWORD = 'A7med@123';

function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const returnTo = searchParams.get('from') || '/admin';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        await new Promise((r) => setTimeout(r, 900));

        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            // Set cookie so Next.js middleware can protect /admin routes
            document.cookie = `cafe_admin_token=authenticated; path=/; max-age=${30 * 60}; SameSite=Strict`;
            localStorage.setItem('cafe_admin', 'true');
            router.push(returnTo);
        } else {
            setError('البريد الإلكتروني أو كلمة المرور غلط، حاول تاني.');
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Email */}
            <div className="flex flex-col gap-1.5">
                <label className="text-[#2C1A0E] text-sm font-semibold">البريد الإلكتروني</label>
                <div className="relative">
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-[#B8A99A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="m2 7 10 7 10-7" />
                        </svg>
                    </div>
                    <input
                        type="email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="input-field"
                        autoComplete="email"
                    />
                </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
                <label className="text-[#2C1A0E] text-sm font-semibold">كلمة المرور</label>
                <div className="relative">
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-[#B8A99A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="11" width="18" height="11" rx="2" />
                            <path d="M7 11V7a5 5 0 0110 0v4" />
                        </svg>
                    </div>
                    <input
                        type={showPass ? 'text' : 'password'}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="input-field"
                        style={{ paddingLeft: '42px' }}
                        autoComplete="current-password"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPass(!showPass)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B8A99A] hover:text-[#C8793A] transition-colors"
                    >
                        {showPass ? (
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                                <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                                <line x1="1" y1="1" x2="23" y2="23" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Error */}
            {error && (
                <div className="shake flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {error}
                </div>
            )}

            {/* Submit */}
            <button
                type="submit"
                disabled={loading}
                className="relative mt-2 w-full py-3.5 bg-[#C8793A] hover:bg-[#9E5A22] disabled:opacity-70 text-white font-bold text-base rounded-2xl shadow-lg shadow-[#C8793A]/30 hover:shadow-[#C8793A]/50 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
                {loading ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                        جاري التحقق...
                    </span>
                ) : (
                    'تسجيل الدخول'
                )}
                {!loading && (
                    <div className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                )}
            </button>
        </form>
    );
}

/* ─── Page wrapper ─── */
const Login = () => (
    <>
        <style>{`
      @keyframes blob {
        0%,100% { border-radius:60% 40% 30% 70%/60% 30% 70% 40%; }
        50%      { border-radius:30% 60% 70% 40%/50% 60% 30% 60%; }
      }
      @keyframes fade-up {
        from { opacity:0; transform:translateY(20px); }
        to   { opacity:1; transform:translateY(0); }
      }
      @keyframes shake {
        0%,100% { transform:translateX(0); }
        20%,60% { transform:translateX(-6px); }
        40%,80% { transform:translateX(6px); }
      }
      .blob  { animation:blob 8s ease-in-out infinite; }
      .blob2 { animation:blob 8s ease-in-out infinite; animation-delay:-4s; }
      .fade-up { animation:fade-up .6s ease-out both; }
      .shake   { animation:shake .4s ease-out; }
      .input-field {
        width:100%; padding:13px 42px 13px 14px;
        border-radius:14px; border:1.5px solid #E8D9C8;
        background:rgba(255,255,255,.8);
        font-size:14px; color:#2C1A0E;
        outline:none; transition:border-color .25s, box-shadow .25s;
        direction:ltr; font-family:inherit;
      }
      .input-field:focus {
        border-color:#C8793A;
        box-shadow:0 0 0 3px rgba(200,121,58,.12);
      }
      .input-field::placeholder { color:#B8A99A; }
    `}</style>

        <main
            className="min-h-screen bg-[#FDF8F3] flex items-center justify-center px-4 py-12 relative overflow-hidden"
            dir="rtl"
        >
            <div className="blob  absolute -top-32 -right-32 w-80 h-80 bg-[#F0A96B]/20 pointer-events-none" />
            <div className="blob2 absolute -bottom-32 -left-32 w-72 h-72 bg-[#C8793A]/15 pointer-events-none" />

            <div className="relative z-10 w-full max-w-md">
                <div className="bg-white/80 backdrop-blur-sm border border-[#E8D9C8] rounded-3xl shadow-2xl shadow-[#C8793A]/10 p-8 md:p-10 fade-up">

                    {/* Logo */}
                    <div className="flex flex-col items-center mb-8">
                        <Link href="/" className="group flex flex-col items-center gap-2 mb-2">
                            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#C8793A] to-[#9E5A22] flex items-center justify-center shadow-lg shadow-[#C8793A]/30 group-hover:scale-105 transition-transform duration-300">
                                <span className="text-white font-black text-lg">A.S</span>
                            </div>
                            <div className="text-center">
                                <p className="font-black text-[#2C1A0E] text-lg leading-none">A.Sa3d</p>
                                <p className="text-[9px] text-[#8C7B6E] tracking-widest uppercase">Dev</p>
                            </div>
                        </Link>
                        <div className="mt-4 text-center">
                            <h1 className="text-xl font-black text-[#2C1A0E]">مرحباً بيك</h1>
                            <p className="text-[#8C7B6E] text-sm mt-1">سجل دخولك للوصول للوحة التحكم</p>
                        </div>
                    </div>

                    {/* Suspense needed for useSearchParams */}
                    <Suspense fallback={<div className="h-40 flex items-center justify-center text-[#8C7B6E] text-sm">جاري التحميل...</div>}>
                        <LoginForm />
                    </Suspense>

                    <div className="mt-6 text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-1.5 text-[#8C7B6E] hover:text-[#C8793A] text-sm font-medium transition-colors"
                        >
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            الرجوع للصفحة الرئيسية
                        </Link>
                    </div>
                </div>

                <p className="text-center text-[#B8A99A] text-xs mt-6">
                    هذه الصفحة مخصصة للإدارة فقط
                </p>
            </div>
        </main>
    </>
);

export default Login;