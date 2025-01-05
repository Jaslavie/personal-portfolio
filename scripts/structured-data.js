/**
 * Generates structured metadata that the browser can understand
 * @returns {Object} - The structured data
 */
function generateStructuredData() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Jasmine Wu",
        "jobTitle": "Design Engineer",
        "url": "https://jaslavie.com",
        "description": "Jasmine is a 19-year-old design engineer solving hard engineering problems in AI and Defense Tech. Attending Hackathons (15x winner) and studying CS & Neuroscience @ UCI on the side.",
        "sameAs": [
            "https://linkedin.com/in/jaslavie",
            "https://github.com/jaslavie",
            "https://www.instagram.com/jaslavie",
            "https://www.x.com/jaslavie",
            "https://www.devpost.com/jaslavie",
        ],
        "image": {
            "@type": "ImageObject",
            "url": "https://jaslavie.com/images/about/profilePictureJasmineBW.jpg",
            "width": 1024,
            "height": 1024,
            "caption": "Jasmine Wu"
        },
        alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "University of California, Irvine"
        },
        knowsAbout: [
            "Design Engineering",
            "AI",
            "Defense Tech",
            "Computer Science",
            "Neuroscience",
            "Hackathons"
        ]

    }
}