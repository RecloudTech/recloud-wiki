// @ts-ignore
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";

export default function HeroSection() {
    return (
        <section className="w-full py-20 md:py-24 lg:py-36 overflow-hidden">
            <div className="container px-4 md:px-6 relative">

                <div className="text-center max-w-3xl mx-auto mb-12 animate-in">
                    <div
                        className="mt-8 mb-4 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
                        wiki
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-6">
                        <Translate
                            id="theme.recloud.hero.title">
                        </Translate>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        <Translate
                            id="theme.recloud.hero.description">
                        </Translate>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/docs/welcome"
                              className=" text-white hover:text-white inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:no-underline hover:bg-primary/70 h-12 px-8 text-base">
                            <span>
                                <Translate
                                    id="theme.blog.post.readMore"
                                    description="The title of the 404 page">                  
                                </Translate>
                            </span>
                            <span className="ml-2 text-current" aria-hidden>→</span>
                        </Link>
                        <Link href="https://recloud.tech" target="_blank"
                              className="inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input border-white hover:bg-accent hover:text-accent-foreground h-12 px-8 text-base">
                            <span>
                                <Translate
                                    id="theme.recloud.hero.our-site">                  
                                </Translate></span>
                        </Link>
                    </div>
                </div>

                <div className="relative mx-auto max-w-5xl animate-in" style={{animationDelay: '200ms'}}>
                    <div
                        className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">

                        <div
                            className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
                    </div>
                    <div
                        className="absolute bottom-6 right-10 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
                    <div
                        className="absolute -top-96 -left-48 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
                </div>

            </div>
        </section>
    );
}