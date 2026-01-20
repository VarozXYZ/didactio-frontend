function Features() {
    const features = [
        {
            icon: '/assets/brands/ChatGPT-Logo (1) 1.png',
            title: 'Multiple AI engines',
            description: 'Choose from OpenAI, Claude, Gemini, DeepSeek, and more to power your course generation.',
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
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="font-sora font-bold text-3xl text-dark text-center mb-12">
                    Why teachers and students choose us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-secondary/30 rounded-2xl p-6"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0">
                                    <img src={feature.icon} alt="" className="h-6 w-6 object-contain" />
                                </div>
                                <div>
                                    <h3 className="font-sora font-semibold text-lg text-dark mb-2">{feature.title}</h3>
                                    <p className="font-inter text-sm text-dark/70">{feature.description}</p>
                                </div>
                            </div>

                            {feature.logos && (
                                <div className="flex flex-wrap gap-3 mt-4 pl-16">
                                    {feature.logos.map((logo, logoIndex) => (
                                        <img
                                            key={logoIndex}
                                            src={logo}
                                            alt=""
                                            className="h-6 w-6 object-contain"
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
