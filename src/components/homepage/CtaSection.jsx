import React from 'react';
import Link from '@docusaurus/Link';

function CtaSection() {
    return (
        <section
            className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
            <div
                className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="container px-4 md:px-6 relative">
                <div className="flex flex-col items-center justify-center space-y-6 text-center animate-in">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        Готовы к сотрудничеству?
                    </h2>
                    <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                        Свяжитесь с нами, чтобы обсудить ваш проект. Мы поможем реализовать техническое решение любой
                        сложности — от лаунчера до серверной инфраструктуры.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Link href="https://recloud.tech/services/project-support"
                              className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white text-primary hover:bg-white/90 h-12 px-8 text-base hover:no-underline">
                            Оставить заявку
                            <span className="ml-2" aria-hidden>→</span>
                        </Link>
                        {/**
                         <button className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-transparent border-white text-white hover:bg-white/10 border h-12 px-8 text-base">
                           Написать напрямую
                         </button>
                         */}
                    </div>
                    <p className="text-sm text-primary-foreground/80 mt-4">
                        Мы ответим в течение одного рабочего дня. Без обязательств и лишних слов.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default CtaSection;