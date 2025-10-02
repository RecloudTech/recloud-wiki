import Link from "@docusaurus/Link";

export default function HeroSection() {
    return (
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
            <div className="container px-4 md:px-6 relative">
                <div className="absolute inset-0 z-1 h-full w-full bg-transparent bg-[linear-gradient(to_right,#f0f0f010_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f010_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#f0f0f010_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f010_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_140%)])"></div>

                <div className="text-center max-w-3xl mx-auto mb-12 animate-in">
                    <div className="mt-8 mb-4 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
                        Recloud
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                        Студия разработки ПО
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Создаём надёжные цифровые решения для бизнеса: от&nbsp;внутренней автоматизации до&nbsp;высоконагруженных систем. Упрощаем сложное, внедряем устойчивое.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/cost-calculator" className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base">
                            <span>Рассчитать проект</span>
                            <span className="ml-2 text-current" aria-hidden>→</span>
                        </Link>
                        <Link to="/projects" className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-8 text-base">
                            <span>Портфолио</span>
                            <span className="ml-2 text-current" aria-hidden>↗</span>
                        </Link>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <span className="size-4 text-primary" aria-hidden>✔</span>
                            <span>Индивидуальный подход</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="size-4 text-primary" aria-hidden>✔</span>
                            <Link to="/services/project-support" className="hover:underline"><span>Поддержка</span></Link>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="size-4 text-primary" aria-hidden>✔</span>
                            <Link to="/services/integrations-api" className="hover:underline"><span>Интеграции с промышленными системами</span></Link>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto max-w-5xl animate-in" style={{ animationDelay: '200ms' }}>
                    <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                        <img
                            src="/product-launcher.png"
                            width={1280}
                            height={720}
                            alt="SaaSify dashboard"
                            className="w-full h-auto"
                        />
                        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
                    <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
                </div>
            </div>
        </section>
    );
}