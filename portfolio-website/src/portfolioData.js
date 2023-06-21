// portfolioData.js
import { events } from './events';

export const portfolioData = {
    personalInfo: {
        name: 'Roberto Peña',
        role: 'Digital Marketing Specialist',
        roleDescription: 'I like dabbling in various parts of digital marketing and like to learn about new technologies, write technical articles or simply play games in my free time.',
        SocialMedia: {
            github: {
                link: 'https://github.com/yourusername',
                icon: './assets/social_media_icons/github.png'
            },
            linkedin: {
                link: 'https://linkedin.com/in/yourusername',
                icon: './assets/social_media_icons/linkedin.png'
            },
            twitter: {
                link: 'https://twitter.com/yourusername',
                icon: './assets/social_media_icons/twitter.png'
            },
            facebook: {
                link: 'https://facebook.com/yourusername',
                icon: './assets/social_media_icons/facebook.png'
            },
            instagram: {
                link: 'https://instagram.com/yourusername',
                icon: './assets/social_media_icons/instagram.png'
            },
            whatsapp: {
                link: 'https://wa.me/yournumber',
                icon: './assets/social_media_icons/whatsapp.png'
            },
            youtube: {
                link: 'https://youtube.com/yourusername',
                icon: './assets/social_media_icons/youtube.png'
            },
            // add more social media platforms as needed
        },
    },
    formation: events,
};
