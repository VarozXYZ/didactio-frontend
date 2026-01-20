function Features() {
    const features = [
        {
            icon: '/assets/brands/ChatGPT-Logo (1) 1.png',
            title: 'Multiple AI engines',
            description: 'Choose from OpenAI, Claude, Gemini, DeepSeek, and more to power your course generation.',
            hasLogos: true,
            logos: [
                '/assets/brands/ChatGPT-Logo (1) 1.png',
                '/assets/brands/Claude_AI_logo 1.png',
                '/assets/brands/Google_Gemini_logo_2025 1.png',
                '/assets/brands/DeepSeek_logo 1.png',
                '/assets/brands/Meta_Platforms_Inc._logo 1.png',
                '/assets/brands/grok.png',
                '/assets/brands/Qwen_logo 1.png',
                '/assets/brands/Mistral_AI_logo_(2025–) 1.png',
                '/assets/brands/kimi-color.png',
            ]
        },
        {
            icon: '/assets/icons/file-lines-solid-full 1.png',
            title: 'Upload your files',
            description: 'Enhance your syllabus by uploading your own materials to integrate with AI-generated content.',
        },
        {
            icon: '/assets/icons/hand-holding-dollar-solid-full 1.png',
            title: 'Affordable & accessible',
            description: 'Budget-friendly plans make quality education tools available to every educator.',
        },
        {
            icon: '/assets/icons/graduation-cap-solid 1.png',
            title: 'One topic, full course',
            description: 'Enter any subject and get a complete, structured syllabus in minutes.',
        },
    ]

    return (
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="font-sora font-bold text-3xl md:text-4xl text-dark text-center mb-16">
                    Why teachers and students choose us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#F5F5F5] rounded-2xl p-8"
                        >
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                                    <img src={feature.icon} alt="" className="h-7 w-7 object-contain" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-sora font-semibold text-xl text-dark mb-3">{feature.title}</h3>
                                    <p className="font-inter text-base text-dark/60 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>

                            {feature.hasLogos && (
                                <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-dark/10">
                                    {feature.logos?.map((logo, logoIndex) => (
                                        <img
                                            key={logoIndex}
                                            src={logo}
                                            alt=""
                                            className="h-7 w-7 object-contain opacity-70 hover:opacity-100 transition-opacity"
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
