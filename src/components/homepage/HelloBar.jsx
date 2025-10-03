import React from 'react';
import Translate from "@docusaurus/Translate";

function HelloBar() {
    return (
        <a
            href="https://blog.recloud.tech/news/2025/09/recloud-one-year/"
            target="_blank"
            className="hidden md:flex w-full items-center justify-center bg-blue-600 py-3 hover:bg-blue-700  transition-colors"
        >
            <div className="flex items-center justify-center gap-4 px-4">
                <div className="flex items-center gap-3">
                    <div className="text-sm font-medium text-white">
                        <Translate
                            id="theme.recloud-year.title">
                        </Translate>
                    </div>
                </div>
                <div className="h-4 w-px bg-blue-200"></div>
                <div className="flex items-center gap-2">
                    <div className="text-sm font-medium text-white/90">
                        <Translate
                            id="theme.blog.post.readMore"
                            description="Read more button text on the homepage">
                        </Translate>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default HelloBar;